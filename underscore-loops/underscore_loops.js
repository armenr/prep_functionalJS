function log (msg) {
    console.log(msg);
}

var myArray = ['parev', 'hayvan', 'kaknem', 'mamayit', 'peranuh'];

var eacher = _.each(myArray, function(value, index){
    console.log(value);
    console.log(index);
});

var helloArr = ['suh dude', 'bonjour', 'parev hayvan!', 'aalyo'];


var checkValue = function(arr, val){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] === val) {
            return console.log(true);
        } else {
            return console.log(false) ;
        }
    }
};


var checkValue2 = checkValue(helloArr, 'fuuuu');
var checkValue3 = checkValue(helloArr, 'suh dude');
checkValue2;


var checkEachValue = function(arr, value) {
    result = false;             //because you can't return anything with each, you have to first init this value, then return it
    _.each(arr, function(v){
        if(v === val) {
            result = true;
        }
    });
    return result;
};


var pushLoop = function(obj, arr){
    for (var prop in obj) {
        arr.push(prop);
    }
}

obj1 = {two: 2, four: 4, three: 3};
arr1 = []

pushLoop(obj1, arr1);
log (arr1);

var pushMap = _.map(obj1, function(val, prop, obj){
    return val;
    return prop;
});


var numArr = [1, 2, 3, 4, 100, 56, 78, 55, 45, 17, 43, 18, 18]

//return even values only
var evens = _.filter(numArr, function(num) { return num %2 == 0; });

//return UNIQUE even values only
var evens = _.uniq(_.filter(numArr, function(num) { return num %2 == 0; }));