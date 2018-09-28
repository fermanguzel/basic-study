const dizi = [1, 2, 3, 4]
const kareDizi = []

//forEach
dizi.forEach(sayi => {
    console.log(sayi)
    kareDizi.push(sayi * sayi)
})
console.log(kareDizi)

//Map
const mapDizi = dizi.map(sayi => sayi * 3)
console.log(mapDizi)

//Filter
const filterDizi = dizi.filter(sayi => sayi > 2)
console.log(filterDizi)

//Reduce
const reduceDizi = dizi.reduce((acc,sayi)=>{
    return acc+sayi
})
console.log(reduceDizi)