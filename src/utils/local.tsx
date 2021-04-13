const getHashParam = (key: string): string | null => {
  // 从 #a=111&b=222形式的hash，根据key获取对应的value
  const hashString = window.location.hash.slice(1);
  const keyValues = hashString.split('&');
  for (let item of keyValues) {
    let [currentKey, currentValue] = item.split('=');
    if (currentKey === key) return currentValue;
  }
  return null;
};

export const getCurrentLocalByHash = () => {
  return getHashParam('local');
};
