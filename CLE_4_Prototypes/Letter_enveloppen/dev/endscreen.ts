export class EndScreen {

    screen : HTMLElement;


    constructor(){
        console.log('ik ben het eindscherm.');
        this.screen = document.getElementById('Screen')!
        this.showEndScreen();
    }   

    private showEndScreen(){
        this.screen.innerText = "Goed Gedaan!";
    }
}