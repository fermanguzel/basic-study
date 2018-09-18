// Id ile çağırma
var intro1 = document.getElementById("intro1")
var mesaj = document.getElementById("mesaj")

mesaj.innerHTML = intro1.innerHTML

// Tag Name(HTML işareti) ile çağırma
var sehirlerListesi = document.getElementsByTagName("ul")
var liste = sehirlerListesi[0]

var sehirler = liste.getElementsByTagName("li")

for (let i = 0; i < sehirler.length; i++) {
    alert(sehirler[i].innerHTML)
}

// Class Name ile çağırma 
var classElemanlari = document.getElementsByClassName("intro1")
classElemanlari[0].innerHTML = "By Classname"
alert(classElemanlari[0].innerHTML)

// Arka arkaya çağırma yöntemi
var queryElemanlari = document.querySelectorAll("p.intro1")
alert(queryElemanlari.length)

// Name ile çağırma
var nameElemanlari = document.getElementsByName("musteriAdi")
alert(nameElemanlari[0].value)

// Event Listener
var kisi = document.getElementById("kisi")
kisi.addEventListener("click", degistir)

function degistir() {
    nameElemanlari[0].value = "Siyabend Güzel"
    kisi.innerHTML = "Siyabend Güzel"

    alert(nameElemanlari[0].value + " olarak değişti")
}

// Node ile çalışma
var node = document.getElementById("agac")
alert(node.childNodes[0].nodeValue)

// Node ile çalışma 2
var baslik=document.createElement("h2")
var text=document.createTextNode("Merhaba Javascript")
baslik.appendChild(text)

var div1=document.getElementById("div1")
var p2=document.getElementById("p2")

div1.insertBefore(baslik,p2)

alert("P2 Silindi")
div1.removeChild(p2)

var p1=document.getElementById("p1")
div1.replaceChild(baslik,p1)