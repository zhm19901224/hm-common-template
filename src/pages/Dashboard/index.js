import React from 'react';
export default function Dashboard() {
    var Test = (function () {
        function Test(store) {
            this.store = store;
        }
        Test.prototype.getValue = function (key) {
            return this.store[key];
        };
        return Test;
    }());
    var style = {
        textAlign: 'center',
        marginTop: 100,
        color: '#abcdef',
        fontSize: 30
    };
    return React.createElement("h1", { style: style }, "This is Dashboard page!");
}
