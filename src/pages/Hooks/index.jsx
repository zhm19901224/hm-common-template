import ToDo from './ToDo';
import ContextDemo from './context';
import ReducerDemo from './reducerDemo';
import App from './reduxMock/index';
import MemoFather from './memoDemo/index';

export default function Hooks(props) {
  return (
    <>
      <h3>Hooks</h3>
      {/* <div>
        <ToDo />
        <ContextDemo />
      </div>
      <App /> */}
      <MemoFather />
    </>
  );
}
