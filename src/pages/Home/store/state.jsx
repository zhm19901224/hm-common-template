import { observable, makeAutoObservable } from 'mobx';

export default class HomeState {
  constructor() {
    makeAutoObservable(this);
  }

  @observable todoList = ['111', '222'];
}
