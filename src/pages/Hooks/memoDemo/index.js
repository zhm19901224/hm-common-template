import { useState, useMemo, memo } from 'react';
function S1(props) {
    console.log('son1 rendered');
    var money = useMemo(function () {
        return props.money;
    }, [props.money]);
    var total = function () {
        console.log('total function is called');
        return money + 1000;
    };
    return (React.createElement("div", null,
        React.createElement("p", null,
            "s1 money: ",
            money),
        React.createElement("p", null,
            "total money: ",
            total()),
        React.createElement("p", null,
            "switch: ",
            props.switch)));
}
var Son1 = memo(S1);
function Son2(props) {
    return React.createElement("div", null,
        "s2 money: ",
        props.money);
}
export default function MemoFather() {
    var _a = useState(0), s1Value = _a[0], setS1 = _a[1];
    var _b = useState(0), s2Value = _b[0], setS2 = _b[1];
    var _c = useState('close'), s1Switch = _c[0], setS1Switch = _c[1];
    var switchHandle = function () {
        if (s1Switch === 'close')
            return setS1Switch('open');
        return setS1Switch('close');
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", null,
            React.createElement("button", { onClick: function () { return setS1(s1Value + 100); } }, "s1 +100"),
            React.createElement("button", { onClick: switchHandle }, "s1 Switch")),
        React.createElement("div", null,
            React.createElement("button", { onClick: function () { return setS2(s2Value + 100); } }, "s2 +100")),
        React.createElement(Son1, { money: s1Value, switch: s1Switch }),
        React.createElement(Son2, { money: s2Value })));
}
