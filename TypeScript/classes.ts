class Ev{
    _odaSayisi:number;
   private _pencereSayisi:number; //sadece tanimlandigi class icinde erisilebilir
    _kat:number;
    constructor(odaSayisi:number,pencereSayisi:number,kat:number){
        this._odaSayisi = odaSayisi;
        this._pencereSayisi = pencereSayisi;
        this._kat=kat;
    }
    yemekYe(){
        console.log(this._kat +" yemek yenildi");
    }
}

let ev =new Ev(3,4,5);
ev.yemekYe()
console.log(ev._odaSayisi)

class Kisi{
    protected name : string // inherit edildigi class tada erisilebilir
    public yas : number // her yerde erisilebilir demek
    private _isim : string

    get isim():string{
        return "Sayin "+ this._isim;
    }
    set isim(ad:string){
        this._isim = ad;
    }

    kaydet(){
        console.log("kisi kaydedildi")
    }
}

class Musteri extends Kisi{
    satis(){
        let same = this.name
        console.log("satis yapildi")
    }
}

class Personel extends Kisi{
    maasode(){
        console.log("maas odendi")
    }
}
let musteri = new Musteri()
musteri.isim = "CanBrain";
console.log(musteri.isim)
musteri.kaydet()
musteri.satis()

let personel = new Personel()
personel.kaydet()
personel.maasode()

