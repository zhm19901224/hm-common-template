import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import withDispatch from '../../withHoc/withStore';
import { HOME_STATE_NS, HOME_ACTION_NS } from '../../constant/mobxConstant';
import { Button } from 'antd';

@withDispatch // 提供修改局部组件store的dispatch方法，并注入props
@inject('store') // 将store内的数据注入组件props
@inject('action') // 将action注入组件props
@observer // 观察具体store属性变化，store更新自动触发组件更新
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  handleInputChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  handleAddItem() {
    this.props.dispatch(
      HOME_STATE_NS,
      HOME_ACTION_NS,
      'addItem',
      this.state.inputValue
    );
  }

  render() {
    const {
      store: {
        home: { todoList },
      },
    } = this.props;
    const { inputValue } = this.state;
    return (
      <div>
        <h3>Hello Everyone, this is todoList Demo!</h3>
        <section>
          <button onClick={this.handleAddItem}>add item</button>
          <input
            type="text"
            value={inputValue}
            onChange={this.handleInputChange}
          />
        </section>
        <div>
          {todoList.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <Button type="primary">Primary Button</Button>
      </div>
    );
  }

  componentDidMount() {
    this.props.dispatch(HOME_STATE_NS, HOME_ACTION_NS, 'init');
  }
}

export default Home;
