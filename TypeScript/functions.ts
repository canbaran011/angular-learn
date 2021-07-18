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

function topla4(x:number,y:number=4):number{
    return x+y;
}
console.log(topla4(2));
console.log(topla4(2,3));

function topla5(x:number,y?:number):number{
    if(y){
        return x+y;
    }
    return x;
}

console.log(topla5(3));

function davetEt(ilkdavetli:string,...digerleri:string[]):string{
    return ilkdavetli+" " + digerleri.join(" ");
}


console.log(davetEt("CBG","ZBG","HUN","PLK"))