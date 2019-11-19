console.log("Up and running!");

const arrCards = ["queen", "queen", "king", "king"]

const cardsInPlay = []


var cardOne = arrCards[0]

var cardTwo = arrCards[2]

var cardThree = arrCards[1]

var cardFour = arrCards[3]


cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);


console.log("User flipped " + cardsInPlay[0]);
console.log("User flipped " + cardsInPlay[1]);


if (cardsInPlay.length === 2) {

if (cardsInPlay[0] == cardsInPlay[1]) {

alert("You found a match"); }



else {
 alert("Sorry, try again.");
}
}

