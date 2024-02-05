function moveNo() {
    const button = document.querySelector("#NO");

    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Set the new position
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';

}
