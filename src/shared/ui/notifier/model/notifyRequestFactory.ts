import { Effect, sample, Store } from "effector";
import { redirect } from "atomic-router";

import { createFactory, invoke } from "@withease/factories";
import { notify, Notify, notifyFX } from "./model";
import { mainPageRoute } from "../../../routes";

type FactoryParams<Params, Done, Error> = {
  effect: Effect<Params, Done, Error>;
  error?: string;
  success?: string;
  isNeedRedirect?: boolean;
  $isActive: Store<boolean>;
  isNeedRedirectFromSuccess?: boolean;
};
const transformErrorList = (
  list: Array<{ message: string; reason: string }>,
): Notify[] =>
  list.map(({ message }) => ({
    message,
    variant: "error",
  }));

const notifyRequestFactory = createFactory(
  <Params, Done, Error>({
    effect,
    error,
    success,
    isNeedRedirect = true,
    $isActive,
    isNeedRedirectFromSuccess = false,
  }: FactoryParams<Params, Done, Error>) => {
    const defaultError = {
      message: "Что-то пошло не так",
      variant: "error",
    } as Notify;
    sample({
      clock: effect.fail,
      source: $isActive,
      filter: (active) => !!active,
      fn: (_, result: any): Notify | Notify[] => {
        if (error) {
          return {
            message: error,
            variant: "error",
          };
        }

        const response = result?.error?.data;

        if (!response) return defaultError;

        const errorList = response?.error?.errors;

        if (errorList && errorList.length > 0) {
          return transformErrorList(errorList);
        }

        if (response?.error && typeof response.error === "string") {
          return {
            message: response?.error,
            variant: "error",
          };
        }

        return defaultError;
      },
      target: notifyFX,
    });

    if (success) {
      sample({
        clock: effect.done,
        source: $isActive,
        filter: (active) => !!active,
        fn: (): Notify => ({
          message: success,
          variant: "success",
        }),
        target: notify,
      });
    }

    if (isNeedRedirect) {
      redirect({
        clock: sample({
          clock: effect.fail,
        }),
        route: mainPageRoute,
      });
    }
    if (isNeedRedirectFromSuccess) {
      redirect({
        clock: sample({
          clock: effect.done,
        }),
        route: mainPageRoute,
      });
    }

    return {};
  },
);

export const notifyFromEffect = <Params, Done, Error>(
  params: FactoryParams<Params, Done, Error>,
) => invoke(() => notifyRequestFactory(params));
