// queryselector
let main = document.querySelector('main')

// create
let divBackground = document.createElement('div')
let img = document.createElement('img')
let divFon = document.createElement('div')
let h1 = document.createElement('h1')
let p = document.createElement('p')
let vse = document.createElement('div')
let divprice = document.createElement('div')
let price = document.createElement('img')
let pricep = document.createElement('p')
let divrank = document.createElement('div')
let rank = document.createElement('img')
let rankp = document.createElement('p')
let divbox = document.createElement('div')
let box = document.createElement('img')
let boxp = document.createElement('p')
let but = document.createElement('button')

// class
divBackground.classList.add("imgbackground")
img.classList.add("photo")
divFon.classList.add("cherniy")
but.classList.add("btnn")
divprice.classList.add("priced")
divrank.classList.add("rankd")
divbox.classList.add("boxd")
vse.classList.add("vse")
price.classList.add("amg")
rank.classList.add("amg")
box.classList.add("amg")

// text
h1.innerHTML = "MEN’S CLOTHING (120)";
p.innerHTML = "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday";
pricep.innerHTML = "109";
rankp.innerHTML = "3,9";
boxp.innerHTML = "120";
but.innerHTML = "В избранное";

// attribute
img.setAttribute('src', './img/sumka.png')
price.setAttribute('src', './img/price.png')
rank.setAttribute('src', './img/rank.png')
box.setAttribute('src', './img/box.png')

// append
main.append(divBackground, divFon)
divBackground.append(img)
divprice.append(price, pricep)
divrank.append(rank, rankp)
divbox.append(box, boxp)
divFon.append(h1, p, vse, but)
vse.append(divprice, divrank, divbox,)