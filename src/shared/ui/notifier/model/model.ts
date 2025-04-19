import { createEffect, createEvent, createStore, sample } from "effector";
import { delay } from "../../../lib/delay";

export type Notification = {
  id: number;
  message: string;
  variant: "success" | "error";
  timeout?: number;
};

export type Notify = Omit<Notification, "id">;

export const $notifications = createStore<Notification[]>([], {
  name: "notifications",
});

export const notify = createEvent<Notify>();
export const cancel = createEvent<number>();
export const startExit = createEvent<number>();

const timeoutFx = createEffect<(notify: Notification) => Promise<number>>(
  async ({ id, timeout = 5000 }) => {
    await delay(timeout, id);

    return id;
  },
);

const exitAnimationFx = createEffect(async (id: number) => {
  await delay(50, id);

  return id;
});

const id = createStore(0).on(notify, (prev) => prev + 1);

const newNotification = sample({
  source: id,
  clock: notify,
  fn: (id, notify) => ({ id, ...notify }),
});

sample({
  clock: newNotification,
  target: timeoutFx,
});

sample({
  clock: timeoutFx.doneData,
  target: startExit,
});

sample({
  clock: startExit,
  target: exitAnimationFx,
});

sample({
  clock: exitAnimationFx.doneData,
  target: cancel,
});

$notifications
  .on(newNotification, (state, notification) => [...state, notification])
  .on(startExit, (state, id) =>
    state.map((notification) =>
      notification.id === id
        ? { ...notification, isExiting: true }
        : notification,
    ),
  )
  .on(cancel, (state, id) =>
    state.filter((notification) => notification.id !== id),
  );

sample({
  clock: startExit,
  target: exitAnimationFx,
});

sample({
  clock: exitAnimationFx.doneData,
  target: cancel,
});

export const notifyFX = createEffect((notification: Notify[] | Notify) => {
  if (Array.isArray(notification)) {
    notification.forEach((item) => notify(item));

    return;
  }
  notify(notification as Notify);
});
