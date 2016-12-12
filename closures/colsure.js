var nonsense = function(string) {

    var blab = function() {
        alert(string);
    };

    setTimeout(blab(), 2000);

    return blab;
};

var blabLater = nonsense('somestring');
var blabAgainLater = nonsense('otherstrings');

function log(msg) {
    console.log(msg);
}



var lastNameTrier = function(firstName) {
    var innerFunction = function(){
        console.log(firstName + " " + lastName);
    };

    return innerFunction;
};

var firstNameFarmer = lastNameTrier('Farmer');
firstNameFarmer('Brown');



function counter() {
    var n = 0;
    return {
        count: function() {return ++n},
        reset: function() {n = 0}
    }
}

var myCounter = counter();