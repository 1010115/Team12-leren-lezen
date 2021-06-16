export class Image {

    private div: HTMLElement

    constructor(tagName: string) {
        this.create(tagName)

    }

    private create(tagName : string) {
        this.div = document.createElement(tagName)
        document.body.appendChild(this.div)
        console.log("image aangemaakt")
    }
}


