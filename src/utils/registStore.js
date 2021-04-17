export var registSubStore = function (Store, storeNamespace, subStore) {
    Store[storeNamespace] = subStore;
    return Store;
};
export var registSubAction = function (Action, actionNamespace, subAction) {
    Action[actionNamespace] = subAction;
    return Action;
};
