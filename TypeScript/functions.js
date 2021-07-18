function topla(x, y) {
    return x + y;
}
function topla2(x, y) {
    return x + y;
}
var topla3 = function (x, y) {
    return x + y;
};
console.log(topla(2, 3));
console.log(topla(1, 2));
console.log(topla2(2, 3)); // unexpected type not accepted
console.log(topla3(12, 3));
function topla4(x, y) {
    if (y === void 0) { y = 4; }
    return x + y;
}
console.log(topla4(2));
console.log(topla4(2, 3));
function topla5(x, y) {
    if (y) {
        return x + y;
    }
    return x;
}
console.log(topla5(3));
function davetEt(ilkdavetli) {
    var digerleri = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        digerleri[_i - 1] = arguments[_i];
    }
    return ilkdavetli + " " + digerleri.join(" ");
}
console.log(davetEt("CBG", "ZBG", "HUN", "PLK"));
