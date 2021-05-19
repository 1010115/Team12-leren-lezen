"use strict";
window.addEventListener('load', init);
let letterCard;
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y'];
let beheerst;
let fout;
function init() {
    letterCard = document.getElementById('Letter');
    letters = shuffleArray(letters);
    gameLoop(letters);
}
function getLetters(letter) {
    let card = document.createElement('div');
    card.classList.add('card');
    let L = document.createElement('h1');
    L.innerText = letter;
    card.appendChild(L);
    letterCard.appendChild(card);
    let color = Math.floor(Math.random() * 16777215).toString(16);
    L.style.color = "#" + color;
}
function shuffleArray(array) {
    let curId = array.length;
    while (0 !== curId) {
        let randId = Math.floor(Math.random() * curId);
        curId -= 1;
        let tmp = array[curId];
        array[curId] = array[randId];
        array[randId] = tmp;
    }
    return array;
}
function gameLoop(array) {
    let letterId = array.length;
    for (let letter of array) {
        console.log(letter);
    }
    let randLetter = array[Math.floor(Math.random() * letterId)];
    console.log(`Random letter = ${randLetter}`);
    getLetters(randLetter);
}
//# sourceMappingURL=game.js.map