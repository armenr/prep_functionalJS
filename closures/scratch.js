var closureAlert = function() {
    var x = 0;
    var alerter = function() {
        alert(++x);
    };

    return alerter;
};

var funcStorer = closureAlert();
var funcStorer2 = clonsureAlert();