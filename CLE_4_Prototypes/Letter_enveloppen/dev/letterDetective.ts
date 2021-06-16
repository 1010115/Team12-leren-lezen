import { Image } from "./image.js"

const plaatjes = [
    { id: 1,    name: 'leeuw',     letters: ['L','e','e','u','w']},
    { id: 2,    name: 'vis',       letters: ['v','i','s']}
]

let letters : string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y','z'];



class letterDetective {

    private image : Image
    private div: HTMLElement
    private letter: HTMLElement
    private letterCard : HTMLElement

    constructor() {
        console.log("Letterdetective gestart")
        this.letterCard = document.getElementById('Letter')!;
        
        this.newWord()

    }

    private newWord(){

        let randId = Math.floor(Math.random() * plaatjes.length + 1)


        const filteredId = plaatjes.filter((id) => {
            return id.id == randId
        })

        const filteredName = filteredId.map((name) => {
            return name.name
        })

        const filteredLetters = filteredId.map((letters) => {
            return letters.letters
        })

        // console.log(filteredId)
        // console.log(filteredName)
        // console.log(filteredLetters[0][1])

        let randWrongPos = Math.floor(Math.random() * filteredLetters[0].length)

        console.log(randWrongPos)
         
        for (let x = 0; x < filteredLetters[0].length; x++) {

            let l = document.createElement("h1")
            this.letter = document.createElement("div")
            this.letter.classList.add("card")

            if ( x == randWrongPos) {
                console.log(x)
                l.innerHTML = letters[randWrongPos]

            } else {
                l.innerHTML = filteredLetters[0][x]
            }
            
            this.letter.appendChild(l)
            this.letterCard.appendChild(this.letter)
        }

        // this.image = new Image(filteredName[0])
    }

}


new letterDetective()