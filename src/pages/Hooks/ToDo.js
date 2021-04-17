var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { useState, useEffect } from 'react';
export default function ToDo(props) {
    var _a = useState([]), list = _a[0], setList = _a[1];
    var _b = useState(''), inputValue = _b[0], setInputValue = _b[1];
    function handleAddItem() {
        var newList = __spreadArrays([{ name: inputValue, key: Math.random() }], list);
        setList(newList);
    }
    function handleDeleteItem(key) {
        var newList = list.filter(function (item) { return item.key !== key; });
        setList(newList);
    }
    useEffect(function () {
        setList([{ name: 'defaultItem', key: 'def' }]);
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement("section", null,
            React.createElement("input", { type: "text", value: inputValue, onChange: function (e) { return setInputValue(e.target.value); } }),
            React.createElement("button", { onClick: handleAddItem }, "\u6DFB\u52A0")),
        React.createElement("ul", null, list.map(function (item) { return (React.createElement("li", { key: item.key },
            item.name,
            React.createElement("button", { onClick: function () { return handleDeleteItem(item.key); } }, "\u5220\u9664"))); }))));
}
