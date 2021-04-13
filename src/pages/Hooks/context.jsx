import { createContext, useContext } from 'react';
const Ctx = createContext();

const A = (props) => {
  const { name, age } = useContext(Ctx);
  return (
    <div>
      <>
        <h3>A 组件收到根组件提供者的共享数据了，数据被消费</h3>
        <p>name: {name}</p>
        <p>name: {age}</p>
      </>
    </div>
  );
};

const Mid = (props) => {
  // 这是中间层级组件
  return (
    <>
      <A />
    </>
  );
};

export default function ContextDemo() {
  // 这是顶层组件
  const sharedValue = { name: 'hm', age: 18 };
  return (
    <Ctx.Provider value={sharedValue}>
      <Mid />
    </Ctx.Provider>
  );
}
