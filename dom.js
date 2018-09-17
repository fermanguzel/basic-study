var intro1 = document.getElementById("intro1")
var mesaj = document.getElementById("mesaj")

mesaj.innerHTML = intro1.innerHTML

var sehirlerListesi = document.getElementsByTagName("ul")
var liste = sehirlerListesi[0]

var sehirler = liste.getElementsByTagName("li")

for (let i = 0; i < sehirler.length; i++) {
    alert(sehirler[i].innerHTML)
}

var classElemanlari=document.getElementsByClassName("intro1")
classElemanlari[0].innerHTML="By Classname"
alert(classElemanlari[0].innerHTML)

var queryElemanlari=document.querySelectorAll("p.intro1")
alert(queryElemanlari.length)

var nameElemanlari=document.getElementsByName("musteriAdi")
alert(nameElemanlari[0].value)