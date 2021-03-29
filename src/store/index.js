import { observable, action, makeAutoObservable } from 'mobx';
import { getToDoList } from '../api.js'

class Store {
    constructor(){
        makeAutoObservable(this)
    }
    @observable todoList = [];
    @action.bound
    addItem(item){
        console.log('run')
        this.todoList.push(item)
    }
    @action deleteItem(i){
        this.todoList.splice(i, i)
    }
    @action resetItem(i){
        this.todoList = []
    }
    @action async init(){
        const res = await getToDoList('/api/getToDoList', 'get')
        if (res.code === 0) {
            this.todoList = res.data;
        }
    }
}

const store = new Store()

export default store