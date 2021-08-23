function greeting(name) {
    return "Hello " + name;
}
var message = greeting("CBG");
console.log(message);
var sayi = 2;
sayi = 10;
sayi = 10.3;
var sehir;
sehir = "Ankara";
sehir = "istanbul";
var isTrue;
isTrue = true;
isTrue = false;
var sayilarDizi = [1, 2, 3];
var sayilar2 = [1, 2, 3, 4, 5];
var diziTuple = [2, "Adana"];
console.log(diziTuple[0]);
var Renk;
(function (Renk) {
    Renk[Renk["kirmizi"] = 1] = "kirmizi";
    Renk[Renk["siyah"] = 2] = "siyah";
    Renk[Renk["mavi"] = 3] = "mavi";
})(Renk || (Renk = {}));
var renk = Renk.kirmizi;
var deger = "izmir";
deger = 2;
deger = {};
var deger2 = undefined;
function Great2() {
    console.log("Helooooo");
}
// undefined and null
var age;
age = 12;
var Clients = /** @class */ (function () {
    function Clients() {
    }
    return Clients;
}());
