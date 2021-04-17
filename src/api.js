import requeset from './utils/server';
export var getUserInfo = function (url, method, data) {
    return requeset(url, method, data);
};
export var getToDoList = function (url, method, data) {
    return requeset(url, method, data);
};
