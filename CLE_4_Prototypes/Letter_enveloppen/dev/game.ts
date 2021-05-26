window.addEventListener('load', init);
let card: HTMLElement;
let letterCard : HTMLElement;
let letters : string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y'];
let beheerst : string[] = [];
let onbeheerst : string[] = [];

function init(){
  letterCard = document.getElementById('Letter')!;
  letters = shuffleArray(letters);
  gameLoop(letters);
}

function getLetters(letter:string){
  //Create div for card
  card = document.createElement('div');
  card.classList.add('card');

  //Create h1 for Letter & append to card div
  let L = document.createElement('h1');
  L.innerText = letter;
  card.appendChild(L);
  letterCard.appendChild(card)

  let color = Math.floor(Math.random()*16777215).toString(16);
  L.style.color = "#" + color;

  let goodButton = document.createElement('div');
  goodButton.innerText = 'Goed';
  goodButton.addEventListener('click', function(){
    //function om de letter in de goeie array te stoppen.
    goodLetterToArray(letter);
  });
  card.appendChild(goodButton);

  let wrongButton = document.createElement('div');
  wrongButton.innerText = 'Fout';
  wrongButton.addEventListener('click', function(){
    //function om de letter in de foute array te stoppen.
    wrongLetterToArray(letter);
  });
  card.appendChild(wrongButton);
}

function newLetter(){
  card.remove();
  gameLoop(letters);
}

function wrongLetterToArray(letter:string){
  console.log(`de letter ${letter} is bij de onbeheerste array letters gestopt.`)
  onbeheerst.push(letter);
  for (let letter of onbeheerst){
    console.log(letter);
  }
  filterArray(letter, letters);
} 

function filterArray(letter:string, array:string[]){
  let index = array.indexOf(letter);
  console.log(index);
  if (index === array.indexOf(letter)){
    array.splice(index, 1);
  }
  newLetter();
}

function goodLetterToArray(letter:string){
  console.log(`de letter ${letter} is bij de beheerste array letters gestopt.`);
  beheerst.push(letter);
  for (let letter of beheerst){
    console.log(letter);
  }
  filterArray(letter, letters);
}

function shuffleArray(array:string[]) {
    let curId = array.length;
    // There remain elements to shuffle
    while (0 !== curId) {
      // Pick a remaining element
      let randId = Math.floor(Math.random() * curId);
      curId -= 1;
      // Swap it with the current element.
      let tmp = array[curId];
      array[curId] = array[randId];
      array[randId] = tmp;
    }
    return array;
  }



function gameLoop(array:string[]) {
  let letterId = array.length;
  let randLetter = array[Math.floor(Math.random() * letterId)];
  console.log(`Random letter = ${randLetter}`);
  getLetters(randLetter);
}

