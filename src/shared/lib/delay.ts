export const delay = <D = unknown>(delay: number, doneData: D): Promise<D> =>
  new Promise((resolve) => setTimeout(() => resolve(doneData), delay));
