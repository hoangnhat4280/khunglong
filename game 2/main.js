const canvas = document.getElementById('screen-game');
const ctx = canvas.getContext('2d');


function clearScreen () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


const tree = new Tree(800, 400, 100, 100, "red", 8);
const dinosaur = new Dinosaur(100, 400,100, 100);
const score = new Score(0, "Score: ");

function play() {
    clearScreen();
    tree.moveLeft();
    dinosaur.draw();
    score.draw();
    requestAnimationFrame(play);
}
play();
window.addEventListener('keydown', () => {
    if (event.key == "ArrowUp") {
        dinosaur.jump();
    }

})