function greeting(name:string){
    return "Hello " + name;
}

let message = greeting("CBG");
console.log(message);

let sayi : number = 2
sayi = 10
sayi = 10.3

let sehir : string
sehir = "Ankara"
sehir = "istanbul"

let isTrue : boolean
isTrue = true
isTrue = false

let sayilarDizi:number[] = [1,2,3]
let sayilar2 : Array<number> = [1,2,3,4,5]

let diziTuple :[number,string] = [2,"Adana"]
diziTuple[0]

enum Renk {kirmizi= 1 , siyah , mavi}
let renk : Renk = Renk.kirmizi

 let deger : any = "izmir"
 deger = 2
 deger = {}

 let deger2 : void = undefined

 function Great2():void{
     console.log("Helooooo")
 }

 // undefined and null
 let age : number
 age= 12

 class Clients{
     
 }