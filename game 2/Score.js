class Score {
    score;
    text;

    constructor(score, text) {
        this.score = score;
        this.text = text;
        this.canvas = document.getElementById('screen-game');
        this.ctx = this.canvas.getContext('2d');
    }

    draw() {
        this.ctx.fillStyle = "black";
        this.ctx.font = "30px Arial";
        this.ctx.fillText(this.text + this.score, 800, 50);
    }
}
