import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import withStore from '../../withHoc/withStore';
import { HOME_STATE_NS, HOME_ACTION_NS } from '../../constant/mobxConstant';
import { Button, Input, Table, Popconfirm } from 'antd';
import { ColumnsType } from 'antd/es/table';
import styles from './index.scss';

type StateType = {
  inputValue: string;
};

type propType = {
  dispatch: (actionName: string, payload?: any) => {};
  getState: () => any;
};

interface Home {
  state: StateType;
  props: propType;
}

@withStore(HOME_STATE_NS, HOME_ACTION_NS)
// @inject('store') // 将store内的数据注入组件props, 使用withDispatch后就不用使用它了。
// @inject('action') // 将action注入组件props, 使用withDispatch后就不用使用它了。
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
    // this.props.dispatchByNs(
    //   HOME_STATE_NS,
    //   HOME_ACTION_NS,
    //   'addItem',
    //   this.state.inputValue
    // );
    this.props.dispatch('addItem', this.state.inputValue);
    this.setState({ inputValue: '' });
  }

  render() {
    const { todoList } = this.props.getState();
    const { inputValue } = this.state;
    const dataSource = todoList.map((item) => item);

    interface ToDo {
      key: string | Number;
      name: string;
    }

    const columns: ColumnsType<ToDo> = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Popconfirm
            title="Are you sure to delete this item?"
            onConfirm={() => this.props.dispatch('deleteItem', record.key)}
            okText="Yes"
            cancelText="No"
          >
            <a href="#">Delete</a>
          </Popconfirm>
        ),
      },
    ];
    return (
      <div>
        <h3 className={styles.todoTitle}>
          Hello Everyone, this is todoList Demo!
        </h3>
        <section style={{ marginBottom: 20 }}>
          <Button
            type="primary"
            onClick={this.handleAddItem}
            style={{ marginLeft: 40 }}
          >
            Add Item
          </Button>
          <Input
            style={{ width: 400, marginLeft: 20 }}
            type="text"
            value={inputValue}
            onChange={this.handleInputChange}
          />
          <Button
            type="primary"
            onClick={() => this.props.dispatch('reset')}
            style={{ marginLeft: 40 }}
          >
            Reset
          </Button>
        </section>
        <section>
          <Table dataSource={dataSource} columns={columns} />;
        </section>
      </div>
    );
  }

  componentDidMount() {
    this.props.dispatch('init');
  }
}

export default Home;
