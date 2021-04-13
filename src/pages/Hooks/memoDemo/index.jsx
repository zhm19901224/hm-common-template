import { useState, useMemo, memo } from 'react';

function S1(props) {
  console.log('son1 rendered');

  const money = useMemo(() => {
    return props.money;
  }, [props.money]);

  const total = () => {
    // 假如是非常繁琐的计算过程
    console.log('total function is called');
    return money + 1000;
  };

  return (
    <div>
      <p>s1 money: {money}</p>
      <p>total money: {total()}</p>
      <p>switch: {props.switch}</p>
    </div>
  );
}

const Son1 = memo(S1);

function Son2(props) {
  // console.log('son2 rendered');
  return <div>s2 money: {props.money}</div>;
}

export default function MemoFather() {
  const [s1Value, setS1] = useState(0);
  const [s2Value, setS2] = useState(0);
  const [s1Switch, setS1Switch] = useState('close');

  const switchHandle = () => {
    if (s1Switch === 'close') return setS1Switch('open');
    return setS1Switch('close');
  };
  return (
    <>
      <div>
        <button onClick={() => setS1(s1Value + 100)}>s1 +100</button>
        <button onClick={switchHandle}>s1 Switch</button>
      </div>
      <div>
        <button onClick={() => setS2(s2Value + 100)}>s2 +100</button>
      </div>
      <Son1 money={s1Value} switch={s1Switch} />
      <Son2 money={s2Value} />
    </>
  );
}
