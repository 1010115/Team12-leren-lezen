window.addEventListener('load', init);

let letterCard : HTMLElement;
let letters : string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y'];
let beheerst : string[];
let fout : string[];

function init(){
  letterCard = document.getElementById('Letter')!;
  letters = shuffleArray(letters);
  gameLoop(letters);
}

function getLetters(letter:string){
  //Create div for card
  let card = document.createElement('div');
  card.classList.add('card');

  //Create h1 for Letter & append to card div
  let L = document.createElement('h1');
  L.innerText = letter;
  card.appendChild(L);
  letterCard.appendChild(card)

  let color = Math.floor(Math.random()*16777215).toString(16);
  L.style.color = "#" + color;
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
  for(let letter of array) {
    console.log(letter);
  }

  let randLetter = array[Math.floor(Math.random() * letterId)];
  console.log(`Random letter = ${randLetter}`);
  getLetters(randLetter);
}