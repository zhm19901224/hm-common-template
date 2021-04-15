import { observable, action, makeAutoObservable } from 'mobx';
import HomeState from '../pages/Home/store/state';
import HomeAction from '../pages/Home/store/action';
import { HOME_ACTION_NS, HOME_STATE_NS } from '../constant/mobxConstant';
import { registSubStore, registSubAction } from '../utils/registStore';

// 全局store
class Store {
  constructor() {
    makeAutoObservable(this);
  }
}

// 全局action
class Action {
  constructor() {
    makeAutoObservable(this);
  }
}

interface MyStore {
  global: Store;
  [propsName: string]: any;
}

interface MyAction {
  global: Action;
  [propsName: string]: any;
}

let store: MyStore = {
  global: new Store()
};

// 注册自模块的store、action
store = registSubStore(store, HOME_STATE_NS, new HomeState());

let actions: MyAction = {
  global: new Action()
};

actions = registSubAction(actions, HOME_ACTION_NS, new HomeAction());

export { store, actions };
