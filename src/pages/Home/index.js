var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Button, Input, Table, Popconfirm } from 'antd';
import withStore from '../../withHoc/withStore';
import { HOME_STATE_NS, HOME_ACTION_NS } from '../../constant/mobxConstant';
import styles from './index.scss';
var DataManager = (function () {
    function DataManager(data) {
        this.data = data;
        this.data = data;
    }
    DataManager.prototype.getName = function (index) {
        return this.data[index].name;
    };
    return DataManager;
}());
var Home = (function (_super) {
    __extends(Home, _super);
    function Home(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            inputValue: ''
        };
        _this.handleInputChange = _this.handleInputChange.bind(_this);
        _this.handleAddItem = _this.handleAddItem.bind(_this);
        return _this;
    }
    Home.prototype.handleInputChange = function (e) {
        this.setState({ inputValue: e.target.value });
    };
    Home.prototype.handleAddItem = function () {
        this.props.dispatch('addItem', this.state.inputValue);
        this.setState({ inputValue: '' });
    };
    Home.prototype.render = function () {
        var _this = this;
        var todoList = this.props.getState().todoList;
        var inputValue = this.state.inputValue;
        var dataSource = todoList.map(function (item) { return item; });
        var columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name'
            },
            {
                title: 'Action',
                key: 'action',
                render: function (text, record) { return (React.createElement(Popconfirm, { title: "Are you sure to delete this item?", onConfirm: function () { return _this.props.dispatch('deleteItem', record.key); }, okText: "Yes", cancelText: "No" },
                    React.createElement("a", { href: "#" }, "Delete"))); }
            }
        ];
        return (React.createElement("div", null,
            React.createElement("h3", { className: styles.todoTitle }, "Hello Everyone, this is todoList Demo!"),
            React.createElement("section", { style: { marginBottom: 20 } },
                React.createElement(Button, { type: "primary", onClick: this.handleAddItem, className: styles.handleBtn }, "Add Item"),
                React.createElement(Input, { className: styles.toDoInput, type: "text", value: inputValue, onChange: this.handleInputChange }),
                React.createElement(Button, { type: "primary", onClick: function () { return _this.props.dispatch('reset'); }, className: styles.handleBtn }, "Reset")),
            React.createElement("section", { className: styles.tableContainer },
                React.createElement(Table, { dataSource: dataSource, columns: columns }))));
    };
    Home.prototype.componentDidMount = function () {
        this.props.dispatch('init');
    };
    Home = __decorate([
        withStore(HOME_STATE_NS, HOME_ACTION_NS),
        observer,
        __metadata("design:paramtypes", [Object])
    ], Home);
    return Home;
}(Component));
export default Home;
