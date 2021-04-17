import { createContext, useContext } from 'react';
var Ctx = createContext();
var A = function (props) {
    var _a = useContext(Ctx), name = _a.name, age = _a.age;
    return (React.createElement("div", null,
        React.createElement(React.Fragment, null,
            React.createElement("h3", null, "A \u7EC4\u4EF6\u6536\u5230\u6839\u7EC4\u4EF6\u63D0\u4F9B\u8005\u7684\u5171\u4EAB\u6570\u636E\u4E86\uFF0C\u6570\u636E\u88AB\u6D88\u8D39"),
            React.createElement("p", null,
                "name: ",
                name),
            React.createElement("p", null,
                "name: ",
                age))));
};
var Mid = function (props) {
    return (React.createElement(React.Fragment, null,
        React.createElement(A, null)));
};
export default function ContextDemo() {
    var sharedValue = { name: 'hm', age: 18 };
    return (React.createElement(Ctx.Provider, { value: sharedValue },
        React.createElement(Mid, null)));
}
