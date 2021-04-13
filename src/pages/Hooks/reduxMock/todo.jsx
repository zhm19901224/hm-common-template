import { useContext, useReducer, useState, useEffect } from 'react';
import { Ctx } from './store';

function request() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(['aaa', 'bbb', 'ccc']);
    }, 300);
  });
}

export default function Todo() {
  const [inputValue, setInputValue] = useState('');

  useEffect(async () => {
    let list = await request();
    dispatch({ type: 'init', payload: list });
  }, []);

  // 对todo内部的state做操作
  const [todo, dispatch] = useReducer((todo, action) => {
    switch (action.type) {
      case 'add':
        todo.list = [inputValue, ...todo.list];
        return { ...todo };
        break;
      case 'init':
        todo.list = action.payload;
        return { ...todo };
        break;
      default:
        return todo;
    }
  }, useContext(Ctx).todo1);

  return (
    <>
      <h3>function component todo</h3>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={() => dispatch({ type: 'add' })}>Add</button>
      </div>
      <ul>
        {todo.list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
