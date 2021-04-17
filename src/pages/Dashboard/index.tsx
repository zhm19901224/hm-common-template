import React from 'react';
export default function Dashboard() {

  interface StoreTypes {
    name: string;
    age: number;
  }

  class Test<T extends keyof StoreTypes>{
    constructor(private store: StoreTypes){}
    getValue(key: T) {
      return this.store[key];
    }
  }

  // 尽量不要这么做，尽可能做到表现与逻辑相分离。styledComponent虽然好用，但是理念不够好。
  const style: React.CSSProperties = {
    textAlign: 'center',
    marginTop: 100,
    color: '#abcdef',
    fontSize: 30
  };
  return <h1 style={style}>This is Dashboard page!</h1>;
}
