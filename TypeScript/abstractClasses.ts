abstract class KrediBase {
    constructor() {
        
    }
    kaydet():void{
        console.log("Kaydedildi")
    }
    abstract hesapla():void; // her yerde ortak  
}

class  TuketiciKredi extends KrediBase{
    hesapla(): void {
       console.log("Tuketici kredisine gore hesaplama")
    }
    constructor(){
        super();
    }
}
class MortgageKredi extends KrediBase{
    hesapla(): void {
        console.log("Mortgage kredisine gore hesaplama")
    }
    baskaBirOperasyon(){
        console.log("baska bir op")
    }
    constructor(){
        super()
    }

}

let tuketiciKredisi = new TuketiciKredi()
tuketiciKredisi.hesapla()
tuketiciKredisi.kaydet()

let mortgageKredi = new MortgageKredi()
mortgageKredi.hesapla()
mortgageKredi.kaydet()
mortgageKredi.baskaBirOperasyon()

let kredi : KrediBase
kredi = new TuketiciKredi()
kredi = new MortgageKredi()




