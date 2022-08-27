class AppFeed extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open'})
    }

    connectedCallback() {
    
        this.render()
    }

    render() {
        this.shadowRoot.innerHTML = `
        <link rel ="stylesheet" href="./src/styles.css">
        <div class="post">
            <div class="info">
                <div class="user">
                 <div class="pfp"> <img src ="./src/pfp.png" class="icon"> </div>
                    <p class="name">Juanaa_16a</p>
                    <div id="dots">
                    <img src ="./src/dots.png" class="dots">
                </div>
                </div> 
            </div> 
                
                <div id="pic">
                    <img src="./src/pic.png" class="picpost">
                </div>

                <div id="reacts">
                    <img src ="./src/hearth.png" class="hearth"> 
                    <img src ="./src/comment.png" class="comment"> 
                    <img src ="./src/share.png" class="send"> 
                    <img src ="./src/save.png" class="save"> 
                </div>
        </div>
        `
    }
}

customElements.define('app-feed', AppFeed)



