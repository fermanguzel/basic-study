var users = [
    { username: "ferman", password: "12345" },
    { username: "siya", password: "1234" }
]

var twitts = [
    { username: "ferman", twit: "Karşim bugün bugün naptın?" },
    { username: "ferman", twit: "Karşim bugün bugün naptın? 2" },
    { username: "siya", twit: "Karşim bugün bugün naptın? 3" },
    { username: "siya", twit: "Karşim bugün bugün naptın? 4" },
    { username: "ferman", twit: "Karşim bugün bugün naptın? 5" }
]

var username = prompt("İsim Giriniz :")
var password = prompt("Parola Giriniz")

function hasUser(username, password) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].username == username && users[i].password == password) {
            return true;
        }
    }
    return false;
}

function login(username, password) {
    if (hasUser(username, password)) {
        console.log(twitts)
    } else {
        alert("User Not Found")
    }
}

login(username, password)