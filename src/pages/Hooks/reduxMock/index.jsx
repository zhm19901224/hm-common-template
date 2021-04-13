import { Provider } from './store';
import Todo from './todo';
import Todo2 from './todo2';

const Mid1 = () => {
  return (
    <>
      this is mid1 Component <Todo />
    </>
  );
};

const Mid2 = () => {
  return (
    <>
      this is mid2 Component <Todo2 />
    </>
  );
};

export default function App() {
  return (
    <Provider>
      <Mid1 />
      <Mid2 />
    </Provider>
  );
}
