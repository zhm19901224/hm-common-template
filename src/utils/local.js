var getHashParam = function (key) {
    var hashString = window.location.hash.slice(1);
    var keyValues = hashString.split('&');
    for (var _i = 0, keyValues_1 = keyValues; _i < keyValues_1.length; _i++) {
        var item = keyValues_1[_i];
        var _a = item.split('='), currentKey = _a[0], currentValue = _a[1];
        if (currentKey === key)
            return currentValue;
    }
    return null;
};
export var getCurrentLocalByHash = function () {
    return getHashParam('local');
};
