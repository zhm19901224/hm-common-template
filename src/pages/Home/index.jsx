import React, { Component} from 'react'
import { inject, observer } from 'mobx-react'

// 将store内的数据注入组件
@inject('store') @observer
export default class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            inputValue: ''
        }
        
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleAddItem = this.handleAddItem.bind(this)
    }

    handleInputChange(e){
        this.setState({ inputValue: e.target.value })
    }

    handleAddItem(){
        this.props.store.addItem(this.state.inputValue)
    }

    render(){
        const { store: { todoList } } = this.props;
        const { inputValue } = this.state;
        return (
            <>
                <h3>Hello Everyone, this is todoList Demo!</h3>
                <section>
                    <button onClick={this.handleAddItem}>add item</button>
                    <input type='text' value={ inputValue } onChange={this.handleInputChange} />
                </section>
                <div>
                    {
                        todoList.map(item => <p key={item}>{item}</p>)
                    }
                </div>
            </>
            
        );
    }

    componentDidMount(){
        this.props.store.init()
    }
}
