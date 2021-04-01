export const registSubStore = (
  Store: any,
  storeNamespace: string,
  subStore: any
) => {
  Store[storeNamespace] = subStore;
  return Store;
};

export const registSubAction = (
  Action: any,
  actionNamespace: string,
  subAction: any
) => {
  Action[actionNamespace] = subAction;
  return Action;
};
