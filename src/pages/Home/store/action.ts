import { action, makeAutoObservable } from 'mobx';
import { getToDoList } from '../../../api';

// 既要为了action与state解耦，又要ts不报错，提前声明抽象类和抽象属性，定义要修改的state。
abstract class HomeState {
  abstract todoList: [];
}

interface ToDoListItem {
  name: string;
  key: number | string;
}
export default class HomeAction extends HomeState {
  todoList: any;
  constructor() {
    super();
    makeAutoObservable(this);
  }

  @action
  addItem(item: string): void {
    this.todoList.push({ name: item, key: Math.random() });
  }

  @action
  deleteItem(key: string | number): void {
    let findI = this.todoList.findIndex(
      (item: ToDoListItem) => item.key === key
    );
    this.todoList.splice(findI, 1);
  }

  @action
  reset(): void {
    this.todoList = [];
  }

  @action async init() {
    const res = await getToDoList('/api/getToDoList', 'get');
    if (res.code === 0) {
      this.todoList = res.data;
    }
  }
}
