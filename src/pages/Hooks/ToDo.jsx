import { useState, useEffect } from 'react';

export default function ToDo(props) {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function handleAddItem() {
    let newList = [{ name: inputValue, key: Math.random() }, ...list];
    setList(newList);
  }

  function handleDeleteItem(key) {
    let newList = list.filter((item) => item.key !== key);
    setList(newList);
  }

  useEffect(() => {
    setList([{ name: 'defaultItem', key: 'def' }]);
  }, []);

  return (
    <>
      <section>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddItem}>添加</button>
      </section>
      <ul>
        {list.map((item) => (
          <li key={item.key}>
            {item.name}
            <button onClick={() => handleDeleteItem(item.key)}>删除</button>
          </li>
        ))}
      </ul>
    </>
  );
}
