// USE THIS FILE TO WRITE ANY WEB COMPONENTS, use example for reference

//////////////////////////////////
// Web Components Classes Here
//////////////////////////////////

class ProjectCard extends HTMLElement {
    constructor(){
        super()

        const name = this.getAttribute("name")
        const git = this.getAttribute("git")
        const live = this.getAttribute("live")
        const img = this.getAttribute("img")

        this.innerHTML = 
        `
        <sl-card>
        <h1 class="card-heading">${name}</h1>
        <img class="card-image" src='${img}' alt=${name} slot="image">
        <a href='${live}'><sl-button>Live</sl-button></a>
        <a href='${git}'><sl-button>Git</sl-button></a>
        </sl-card>
        `

        
    }
}



/////////////////////////////////
// Register the HTML Tag here
/////////////////////////////////

customElements.define("my-card", ProjectCard)