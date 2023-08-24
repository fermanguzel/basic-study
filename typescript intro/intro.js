var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Start
function selamVer(isim) {
    return "Merhaba " + isim;
}
var mesaj = selamVer("Ferman");
console.log(mesaj);
var sayi;
sayi = 5;
sayi = 6;
var sehir;
sehir = "Antalya";
sehir = "Diyarbakır";
var dogruMu;
dogruMu = true;
dogruMu = false;
var sayilar = [1, 2, 3];
var sayilar2 = [1, 2, 3, 4];
var dizi = [1, "Antalya"]; //Tuple
var Renk;
(function (Renk) {
    Renk[Renk["Kirmizi"] = 0] = "Kirmizi";
    Renk[Renk["Sari"] = 1] = "Sari";
    Renk[Renk["Mavi"] = 2] = "Mavi";
})(Renk || (Renk = {}));
var renk = Renk.Kirmizi; //enum
var deger = [1, 2, 3];
deger = "Ankara";
deger = 2;
var deger2 = undefined; //değer döndermeden işlem yapmak için
// Functions
function selamVer2() {
    console.log("Merhaba");
}
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
console.log(topla("Antalya ", 3));
console.log(topla2(2, 5));
console.log(topla3(3, 5));
function topla4(x, y) {
    if (y === void 0) { y = 4; }
    return x + y;
}
console.log(topla4(3));
// Optional - Array
function topla5(x, y) {
    if (y) {
        return x + y;
    }
    return x;
}
console.log(topla5(3, 40));
function kisiler(kisi1) {
    var kisiDizi = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        kisiDizi[_i - 1] = arguments[_i];
    }
    return kisi1 + " " + kisiDizi.join(" ");
}
console.log(kisiler("Ferman", "Bruce", "Kadir", "Jaina", "Neltharion"));
// Public - Private - Protected
var Ev = /** @class */ (function () {
    function Ev(odaSayisi, katSayisi, pencereSayisi) {
        this._odaSayisi = odaSayisi;
        this._katSayisi = katSayisi;
        this._pencereSayisi = pencereSayisi;
    }
    Ev.prototype.eylem = function () {
        console.log(this._katSayisi + " Katlı evin " + this._odaSayisi + " odasının " + this._pencereSayisi + " penceresi kırıldı.");
    };
    return Ev;
}());
var ev = new Ev(6, 2, 12);
ev.eylem();
console.log(ev._odaSayisi);
// Class
var Kisi = /** @class */ (function () {
    function Kisi() {
    }
    Kisi.prototype.kaydet = function () {
        console.log("Kişi Kaydedildi.");
    };
    return Kisi;
}());
var Musteri = /** @class */ (function (_super) {
    __extends(Musteri, _super);
    function Musteri() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Musteri.prototype.satisYap = function () {
        console.log("Satış Yapıldı");
    };
    return Musteri;
}(Kisi));
var Personel = /** @class */ (function (_super) {
    __extends(Personel, _super);
    function Personel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Personel.prototype.maasOde = function () {
        console.log("Maaş Ödendi");
    };
    return Personel;
}(Kisi));
var musteri = new Musteri();
musteri.kaydet();
musteri.satisYap();
var personel = new Personel();
personel.kaydet();
personel.maasOde();
// Abstract
var KrediBase = /** @class */ (function () {
    function KrediBase() {
    }
    KrediBase.prototype.kaydetBase = function () {
        console.log("kaydedildi");
    };
    return KrediBase;
}());
var TuketiciKredi = /** @class */ (function (_super) {
    __extends(TuketiciKredi, _super);
    function TuketiciKredi() {
        return _super.call(this) || this;
    }
    TuketiciKredi.prototype.hesapla = function () {
        console.log("Tüketici Kredisine göre hesaplama yapıldı.");
    };
    return TuketiciKredi;
}(KrediBase));
var MortgageKredi = /** @class */ (function (_super) {
    __extends(MortgageKredi, _super);
    function MortgageKredi() {
        return _super.call(this) || this;
    }
    MortgageKredi.prototype.hesapla = function () {
        console.log("Konut Kredisine göre hesaplama yapıldı");
    };
    return MortgageKredi;
}(KrediBase));
var tuketiciKredisi = new TuketiciKredi();
tuketiciKredisi.hesapla();
tuketiciKredisi.kaydetBase();
var kredi;
kredi = new TuketiciKredi();
kredi = new MortgageKredi();
function save(product) {
    console.log(product.id + " Id li " + product.name + " ürünü " + product.unitPrice + " fiyatı ile kaydedildi.");
}
save({ id: 1, name: "Laptop", unitPrice: 30000 });
// Loops
var sehirler = ["Ankara", "İstanbul", "Antalya", "Diyarbakır"];
for (var i in sehirler) {
    if (Object.prototype.hasOwnProperty.call(sehirler, i)) {
        var city = sehirler[i];
        console.log(city);
    }
}
for (var i in sehirler) {
    console.log(i);
}
for (var _i = 0, sehirler_1 = sehirler; _i < sehirler_1.length; _i++) {
    var i = sehirler_1[_i];
    console.log(i);
}
// Generics
function ornek(x) {
    return x;
}
function ornek2(x) {
    return x;
}
var sayi2 = ornek(2);
console.log(sayi2);
var sehir2 = ornek2("Ankara");
console.log(sehir2);
function ornek3(x) {
    return x;
}
var sayi3 = ornek3(3);
var sehir3 = ornek3("Antalya");
console.log(sayi3);
console.log(sehir3);
// Generic Class
var GenericClass = /** @class */ (function () {
    function GenericClass() {
    }
    GenericClass.prototype.fonksiyon = function (parametre) {
        return parametre;
    };
    return GenericClass;
}());
var sinif = new GenericClass();
sinif.fonksiyon("antalya");
