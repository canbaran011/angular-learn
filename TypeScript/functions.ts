function topla(x,y){
    return x+y;
}

function topla2(x:number,y:number):number{
    return x+y;
}

let topla3= function(x:number,y:number):number{
    return x+y;
}
console.log(topla(2,3));
console.log(topla(1,2));
console.log(topla2(2,3)); // unexpected type not accepted
console.log(topla3(12,3));