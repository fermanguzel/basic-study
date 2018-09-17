for (let index = 0; index < 10; index++) {
    console.log(index)
}


var sehirler = ["Ankara", "İzmir", "Antalya", "Mersin", "Diyarbakır"]

for (let i = 0; i < sehirler.length; i++) {
    console.log(sehirler[i])
}


var i = 0

while (i < 10) {
    console.log(i)
    i++
}

sehirler.forEach(function (sehir) {
    console.log(sehir)
})
