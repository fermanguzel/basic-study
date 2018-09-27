var selamFonksiyonu = function selam() {
    console.log("Birinci Selam Fonksiyonu Çalıştı")
}
selamFonksiyonu()

const selamFonksiyonu2 = () => {
    console.log("İkinci Selam Fonksiyonu Çalıştı")
}
selamFonksiyonu2()

const selamFonksiyonu3 = () => console.log("Üçüncü Selam Fonksiyonu Çalıştı")

selamFonksiyonu3()


sayi1 = prompt("Birinci Sayıyı Gir")
sayi2 = prompt("İkinci Sayıyı Gir")

var topla = (sayi1, sayi2) => {
    return parseInt(sayi1) + parseInt(sayi2)
}

let toplam = topla(sayi1, sayi2)
console.log(toplam)