CardsArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheesburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheesburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
]

CardsArray.sort(()=> 0.5-Math.random())
//console.log(CardsArray)

let gridDisplay = document.querySelector('#grid')
let chosenCard = []
let chosenCardsId = []
let trafioneKarty = []
let licznik = 0

function createBoard(){
    for(let i=0; i<CardsArray.length;i++){
        let card = document.createElement('img')
        card.setAttribute('src','images/blank.png')//'CardsArray[i].img')
        card.setAttribute('data-id',i)
        gridDisplay.appendChild(card)
        card.addEventListener('click',flipCard)
    };
}

createBoard()

function flipCard(){
    let cardId = this.getAttribute('data-id')
    this.setAttribute('src',CardsArray[cardId].img)
    chosenCard.push(CardsArray[cardId].name)
    chosenCardsId.push(cardId)
    if(chosenCard.length == 2){  
            setTimeout(checkMatch,500)
    }
}

function checkMatch(){
    licznik++
    let cards = document.querySelectorAll('#grid img')
    // console.log('wybrane karty: '+chosenCard)//, chosenCard[0])
    // console.log('sprawdzam',cards)
    if(chosenCard[0] == chosenCard[1]){
        console.log('trafione')
        trafioneKarty.push('para')
        cards[chosenCardsId[0]].setAttribute('src','images/white.png')
        cards[chosenCardsId[1]].setAttribute('src','images/white.png')
        cards[chosenCardsId[0]].removeEventListener('click',flipCard)
        cards[chosenCardsId[1]].removeEventListener('click',flipCard)
    }
    else{
        cards[chosenCardsId[0]].setAttribute('src','images/blank.png')
        cards[chosenCardsId[1]].setAttribute('src','images/blank.png')
    }
    chosenCard = []
    chosenCardsId = []
    if(trafioneKarty.length == CardsArray.length/2){
        gridDisplay.style.display = 'none'
        document.querySelector('#wynik').innerHTML = "Brawo, znalazłeś wszystkie pary! <br> Zajęło Ci to "+licznik+" kroków."
    }
}