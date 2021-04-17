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
import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './index.scss';
var NotFound = (function (_super) {
    __extends(NotFound, _super);
    function NotFound(props) {
        var _this = _super.call(this, props) || this;
        _this.goBack = _this.goBack.bind(_this);
        _this.goIndex = _this.goIndex.bind(_this);
        return _this;
    }
    NotFound.prototype.goBack = function () {
        window.history.go(-1);
    };
    NotFound.prototype.goIndex = function () {
        useHistory().push('/home');
    };
    NotFound.prototype.render = function () {
        return (React.createElement("div", { className: styles.notFound },
            React.createElement("h1", { className: styles.notFoundTitle }, "404"),
            React.createElement("p", { className: styles.notFoundText }, "\u4E0D\u8981\u60B2\u4F24\uFF0C\u4E0D\u8981\u7EDD\u671B\uFF0C\u7070\u6697\u7684\u65E5\u5B50\u4F9D\u7136\u4F1A\u6765\u4E34\uFF01"),
            React.createElement("p", { className: styles.notFoundText }, "\u73B0\u5728"),
            React.createElement("span", { onClick: this.goBack, className: styles.linkStyle }, "\u8FD4\u56DE\u4E0A\u4E00\u9875"),
            React.createElement("span", null, "\u6216\u8005"),
            React.createElement("span", { onClick: this.goIndex, className: styles.linkStyle }, "\u8DF3\u8F6C\u9996\u9875")));
    };
    return NotFound;
}(React.Component));
export default NotFound;
