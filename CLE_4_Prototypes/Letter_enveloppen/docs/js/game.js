"use strict";
window.addEventListener('load', init);
let card;
let letterCard;
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y'];
let beheerst = [];
let onbeheerst = [];
function init() {
    letterCard = document.getElementById('Letter');
    letters = shuffleArray(letters);
    gameLoop(letters);
}
function getLetters(letter, array) {
    card = document.createElement('div');
    card.classList.add('card');
    let L = document.createElement('h1');
    L.innerText = letter;
    card.appendChild(L);
    letterCard.appendChild(card);
    let color = Math.floor(Math.random() * 16777215).toString(16);
    L.style.color = "#" + color;
    let goodButton = document.createElement('div');
    goodButton.innerText = 'Goed';
    goodButton.addEventListener('click', function () {
        goodLetterToArray(letter, array);
    });
    card.appendChild(goodButton);
    let wrongButton = document.createElement('div');
    wrongButton.innerText = 'Fout';
    wrongButton.addEventListener('click', function () {
        wrongLetterToArray(letter, array);
    });
    card.appendChild(wrongButton);
}
function newLetter() {
    if (letters.length === 0 && onbeheerst.length > 0) {
        card.remove();
        gameLoop(onbeheerst);
    }
    else {
        card.remove();
        gameLoop(letters);
    }
}
function wrongLetterToArray(letter, array) {
    console.log(`de letter ${letter} is bij de onbeheerste array letters gestopt.`);
    onbeheerst.push(letter);
    for (let letter of onbeheerst) {
        console.log(letter);
    }
    filterArray(letter, array);
}
function filterArray(letter, array) {
    let index = array.indexOf(letter);
    console.log(index);
    if (index === array.indexOf(letter)) {
        array.splice(index, 1);
    }
    newLetter();
}
function goodLetterToArray(letter, array) {
    console.log(`de letter ${letter} is bij de beheerste array letters gestopt.`);
    beheerst.push(letter);
    for (let letter of beheerst) {
        console.log(letter);
    }
    filterArray(letter, array);
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
    let randLetter = array[Math.floor(Math.random() * letterId)];
    console.log(`Random letter = ${randLetter}`);
    getLetters(randLetter, array);
}
//# sourceMappingURL=game.js.map