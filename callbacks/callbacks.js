var funcCaller = function(func, argument) {
    return func(argument);
};


var firstVal = function(arr, func) {
    func(arr[0], 0, arr);
};

var firstVal2 = function(thing, func) {
    if (Array.isArray(thing)) {
        func(thing[0], 0, thing);
    } else {
        for (var k in list) {
            return func(list[k], k, list);
        }
    }
};