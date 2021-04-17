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
import { createContext, Component } from 'react';
var Ctx = createContext();
var Consumer = Ctx.Consumer;
var store = {
    global: {},
    todo1: {
        list: []
    },
    todo2: {
        list: ['yyy', 'mmm', 'lll']
    }
};
function connect(Wrap) {
    return (function (_super) {
        __extends(class_1, _super);
        function class_1(props) {
            return _super.call(this, props) || this;
        }
        class_1.prototype.render = function () {
            var _this = this;
            return (React.createElement(Consumer, null, function (data) { return React.createElement(Wrap, __assign({}, _this.props, data)); }));
        };
        return class_1;
    }(Component));
}
var Provider = function (props) {
    return React.createElement(Ctx.Provider, { value: store }, props.children);
};
export { Consumer, Provider, Ctx, connect };
