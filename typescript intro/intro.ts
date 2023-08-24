// Start
function selamVer(isim: string) {
    return "Merhaba " + isim
}
let mesaj = selamVer("Ferman")

console.log(mesaj)

let sayi: number
sayi = 5
sayi = 6

let sehir: string
sehir = "Antalya"
sehir = "Diyarbakır"

let dogruMu: boolean
dogruMu = true
dogruMu = false

let sayilar: number[] = [1, 2, 3]

let sayilar2: Array<number> = [1, 2, 3, 4]

let dizi: [number, string] = [1, "Antalya"] //Tuple

enum Renk { Kirmizi, Sari, Mavi }
let renk: Renk = Renk.Kirmizi  //enum

let deger: any = [1, 2, 3]
deger = "Ankara"
deger = 2

let deger2: void = undefined //değer döndermeden işlem yapmak için



// Functions
function selamVer2(): void {
    console.log("Merhaba")
}

function topla(x, y) {
    return x + y;
}

function topla2(x: number, y: number) {
    return x + y;
}

let topla3 = function (x: number, y: number) {
    return x + y;
}

console.log(topla(2, 3));
console.log(topla("Antalya ", 3));
console.log(topla2(2, 5));
console.log(topla3(3, 5));

function topla4(x: number, y: number = 4): number {
    return x + y
}

console.log(topla4(3))



// Optional - Array
function topla5(x: number, y?: number): number { // ? opsiyonel anlamına gelir sadece sondaki parametrede olur.
    if (y) {
        return x + y
    }
    return x
}

console.log(topla5(3, 40))

function kisiler(kisi1: string, ...kisiDizi: string[]): string {
    return kisi1 + " " + kisiDizi.join(" ")
}

console.log(kisiler("Ferman", "Bruce", "Kadir", "Jaina", "Neltharion"))



// Public - Private - Protected
class Ev {

    public _odaSayisi: number
    private _katSayisi: number
    protected _pencereSayisi: number

    constructor(odaSayisi: number, katSayisi: number, pencereSayisi) {
        this._odaSayisi = odaSayisi
        this._katSayisi = katSayisi
        this._pencereSayisi = pencereSayisi
    }

    eylem() {
        console.log(this._katSayisi + " Katlı evin " + this._odaSayisi + " odasının " + this._pencereSayisi + " penceresi kırıldı.")
    }
}

let ev = new Ev(6, 2, 12)

ev.eylem()

console.log(ev._odaSayisi)



// Class
class Kisi {
    kaydet() {
        console.log("Kişi Kaydedildi.")
    }
}

class Musteri extends Kisi {
    satisYap() {
        console.log("Satış Yapıldı")
    }
}

class Personel extends Kisi {
    maasOde() {
        console.log("Maaş Ödendi")
    }
}

let musteri = new Musteri()
musteri.kaydet()
musteri.satisYap()

let personel = new Personel()
personel.kaydet()
personel.maasOde()



// Abstract
abstract class KrediBase {
    constructor() {

    }
    kaydetBase(): void {
        console.log("kaydedildi")
    }

    abstract hesapla(): void;
}

class TuketiciKredi extends KrediBase {
    constructor() {
        super();
    }

    hesapla(): void {
        console.log("Tüketici Kredisine göre hesaplama yapıldı.")
    }
}

class MortgageKredi extends KrediBase {
    constructor() {
        super();
    }

    hesapla(): void {
        console.log("Konut Kredisine göre hesaplama yapıldı")
    }
}

let tuketiciKredisi = new TuketiciKredi()
tuketiciKredisi.hesapla();
tuketiciKredisi.kaydetBase();

let kredi: KrediBase
kredi = new TuketiciKredi()
kredi = new MortgageKredi()



// Interface
interface IProduct {
    id: number
    name: string
    unitPrice: number
}

function save(product: IProduct) {
    console.log(product.id + " Id li " + product.name + " ürünü " + product.unitPrice + " fiyatı ile kaydedildi.")
}

save({ id: 1, name: "Laptop", unitPrice: 30000 })



// Loops
let sehirler = ["Ankara", "İstanbul", "Antalya", "Diyarbakır"]

for (const i in sehirler) {
    if (Object.prototype.hasOwnProperty.call(sehirler, i)) {
        const city = sehirler[i];
        console.log(city)
    }
}

for (let i in sehirler) {
    console.log(i)
}

for (const i of sehirler) {
    console.log(i)
}



// Generics
function ornek(x: number) {
    return x
}

function ornek2(x: string) {
    return x
}

let sayi2 = ornek(2);
console.log(sayi2)

let sehir2 = ornek2("Ankara")
console.log(sehir2);

function ornek3<T>(x: T): T {
    return x
}

let sayi3 = ornek3(3);
let sehir3 = ornek3("Antalya")

console.log(sayi3);
console.log(sehir3);



// Generic Class
class GenericClass<T> {

    degisken: T

    fonksiyon(parametre:T):T{
        return parametre
    }
}

let sinif = new GenericClass<string>()
sinif.fonksiyon("antalya")