import requeset from './utils/server';

export const getUserInfo = (url: string, method: string, data: any) =>
  requeset(url, method, data);

export const getToDoList = (url: string, method: string, data?: any) =>
  requeset(url, method, data);
