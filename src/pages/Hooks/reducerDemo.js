var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { useReducer, useState } from 'react';
export default function ReducerDemo(props) {
    var _a = useState(''), inputValue = _a[0], setInputValue = _a[1];
    var _b = useReducer(function (list, action) {
        switch (action.type) {
            case 'add':
                var newList = __spreadArrays([inputValue], list);
                return newList;
                break;
        }
    }, []), list = _b[0], dispatch = _b[1];
    return (React.createElement(React.Fragment, null,
        React.createElement("div", null,
            React.createElement("input", { type: "text", value: inputValue, onChange: function (e) { return setInputValue(e.target.value); } }),
            React.createElement("button", { onClick: function () { return dispatch({ type: 'add' }); } }, "\u6DFB\u52A0")),
        React.createElement("ul", null, list.map(function (item) { return (React.createElement("li", { key: item }, item)); }))));
}
