import { useReducer, useState } from 'react';
export default function ReducerDemo(props) {
  const [inputValue, setInputValue] = useState('');
  const [list, dispatch] = useReducer((list, action) => {
    switch (action.type) {
      case 'add':
        let newList = [inputValue, ...list];
        return newList;
        break;
    }
  }, []);
  return (
    <>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={() => dispatch({ type: 'add' })}>添加</button>
      </div>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
