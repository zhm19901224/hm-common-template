import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Button, Input, Table, Popconfirm } from 'antd';
import { ColumnsType } from 'antd/es/table';
// 引用的第三方模块写最上方，业务代码模块统一写在下方
import withStore from '../../withHoc/withStore';
import { HOME_STATE_NS, HOME_ACTION_NS } from '../../constant/mobxConstant';
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

interface ToDoItem {
  key: string | number;
  name: string;
}

@withStore(HOME_STATE_NS, HOME_ACTION_NS)
// @inject('store') // 将store内的数据注入组件props, 使用withDispatch后就不用使用它了。
// @inject('action') // 将action注入组件props, 使用withDispatch后就不用使用它了。
@observer // 观察具体store属性变化，store更新自动触发组件更新
class Home extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      inputValue: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  handleInputChange(e: any) {
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
    const dataSource = todoList.map((item: ToDoItem) => item);

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
            className={styles.handleBtn}
          >
            Add Item
          </Button>
          <Input
            className={styles.toDoInput}
            type="text"
            value={inputValue}
            onChange={this.handleInputChange}
          />
          <Button
            type="primary"
            onClick={() => this.props.dispatch('reset')}
            className={styles.handleBtn}
          >
            Reset
          </Button>
        </section>
        <section className={styles.tableContainer}>
          <Table dataSource={dataSource} columns={columns} />
        </section>
      </div>
    );
  }

  componentDidMount() {
    this.props.dispatch('init');
  }
}

export default Home;
