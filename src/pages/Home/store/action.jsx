import { action, makeAutoObservable } from 'mobx';
import { getToDoList } from '../../../api';

export default class HomeAction {
  constructor() {
    makeAutoObservable(this);
  }

  @action.bound
  addItem(item) {
    console.log('run');
    this.todoList.push(item);
  }

  @action async init() {
    const res = await getToDoList('/api/getToDoList', 'get');
    if (res.code === 0) {
      this.todoList = res.data;
    }
  }
}
