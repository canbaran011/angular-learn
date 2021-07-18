var Product2 = /** @class */ (function () {
    function Product2() {
    }
    return Product2;
}());
function save(product) {
    console.log(product.name + " kaydedildi");
}
save({ id: 1, name: "CBG", unitPrice: 2123 });
function save2(product) {
    console.log(product.name + " kaydedildi");
}
var mouse = new Product2();
mouse.name = "Yeni fare";
save2(mouse);
