class NoButton extends HTMLButtonElement {
    constructor() {
        super();
        this.id = "#NEWNO";
        this.addEventListener("mouseover", moveNewNo);
        this.addEventListener("click", moveNewNo);
        this.className = "new-no-button";
    }
}
customElements.define("no-button", NoButton, { extends: "button" });

function moveNo() {
    const outerdiv = document.querySelector(".outer-container");
    const button = document.querySelector("#NO");
    if (button.style.opacity == "") {
        // Make the old button disappear
        button.style.opacity = 0;

        // Create new button
        const newNobutton = document.createElement("button", { is: "no-button" });
        const newContent = document.createTextNode("No");
        // add the text node to new button
        newNobutton.appendChild(newContent);

        // Calculate random position within the viewport
        const maxX = window.innerWidth - button.offsetWidth;
        const maxY = window.innerHeight - button.offsetHeight;
        newNobutton.style.top = Math.floor(Math.random() * maxY) + "px";
        newNobutton.style.left = Math.floor(Math.random() * maxX) + "px";

        // Insert new button in the body
        document.body.insertBefore(newNobutton, outerdiv);
    }
}

function moveNewNo(e) {
    const button = e.target;

    // Calculate random position within the viewport
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Set the new position relative to the container
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
}
