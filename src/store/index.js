import { makeAutoObservable } from 'mobx';
import HomeState from '../pages/Home/store/state';
import HomeAction from '../pages/Home/store/action';
import { HOME_ACTION_NS, HOME_STATE_NS } from '../constant/mobxConstant';
import { registSubStore, registSubAction } from '../utils/registStore';
var Store = (function () {
    function Store() {
        makeAutoObservable(this);
    }
    return Store;
}());
var Action = (function () {
    function Action() {
        makeAutoObservable(this);
    }
    return Action;
}());
var store = {
    global: new Store()
};
store = registSubStore(store, HOME_STATE_NS, new HomeState());
var actions = {
    global: new Action()
};
actions = registSubAction(actions, HOME_ACTION_NS, new HomeAction());
export { store, actions };
