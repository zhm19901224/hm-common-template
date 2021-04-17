import { Provider } from './store';
import Todo from './todo';
import Todo2 from './todo2';
var Mid1 = function () {
    return (React.createElement(React.Fragment, null,
        "this is mid1 Component ",
        React.createElement(Todo, null)));
};
var Mid2 = function () {
    return (React.createElement(React.Fragment, null,
        "this is mid2 Component ",
        React.createElement(Todo2, null)));
};
export default function App() {
    return (React.createElement(Provider, null,
        React.createElement(Mid1, null),
        React.createElement(Mid2, null)));
}
