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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import { store, actions } from '../store/index';
function dispatchHoc(stateNs, actionNs) {
    return function (Wrap) {
        return (function (_super) {
            __extends(class_1, _super);
            function class_1(props) {
                return _super.call(this, props) || this;
            }
            class_1.prototype.dispatch = function (action, payload) {
                if (!stateNs)
                    throw new Error('当前组件没有注入状态命名空间');
                if (!actionNs)
                    throw new Error('当前组件没有注入action命名空间');
                if (!action)
                    throw new Error('action name is required');
                this.dispatchByNs(stateNs, actionNs, action, payload);
            };
            class_1.prototype.getState = function () {
                if (!stateNs)
                    throw new Error('当前组件没有注入状态命名空间');
                return this.getStateByNs(stateNs);
            };
            class_1.prototype.dispatchByNs = function (storeNamespace, actionNamespace, actionName, payload) {
                var storeState = store[storeNamespace];
                var action = actions[actionNamespace];
                if (!storeNamespace)
                    throw new Error('storeNamespace is required!');
                if (!actionNamespace)
                    throw new Error('actionNamespace is required!');
                if (storeNamespace === 'global')
                    throw new Error('global cant be used!');
                if (actionNamespace === 'global')
                    throw new Error('global cant be used!');
                if (!actionName)
                    throw new Error('actionName is required!');
                if (!storeState)
                    throw new Error('state not exists!');
                if (!action)
                    throw new Error('action not exists!');
                action[actionName].call(storeState, payload);
            };
            class_1.prototype.getStateByNs = function (storeNamespace) {
                if (!storeNamespace)
                    throw new Error('storeNamespace is required!');
                var storeState = store[storeNamespace];
                if (!storeState)
                    throw new Error('state not exists!');
                return storeState;
            };
            class_1.prototype.render = function () {
                return (React.createElement(Wrap, __assign({}, this.props, { dispatchByNs: this.dispatchByNs, getStateByNs: this.getStateByNs, dispatch: this.dispatch, getState: this.getState })));
            };
            return class_1;
        }(React.Component));
    };
}
export default dispatchHoc;
