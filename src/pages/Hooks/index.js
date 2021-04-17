import MemoFather from './memoDemo/index';
export default function Hooks(props) {
    return (React.createElement(React.Fragment, null,
        React.createElement("h3", null, "Hooks"),
        React.createElement(MemoFather, null)));
}
