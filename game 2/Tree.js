class Tree {
    x;
    y;
    w;
    h;
    color;
    speed;
    canvas;
    ctx;

    constructor(x, y, w, h, color, speed) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.w = w;
        this.h = h;
        this.color = color;
        this.speed = speed;
        this.canvas = document.getElementById('screen-game');
        this.ctx = this.canvas.getContext('2d');
    }

    draw() {
        // this.ctx.beginPath();
        // this.ctx.fillRect(this.x, this.y, this.w, this.h);
        // this.ctx.fillStyle = this.color;
        // this.ctx.closePath();

        const image = new Image();
        image.src = 'catus.jpg';
        this.ctx.drawImage(image, this.x, this.y, this.w, this.h);
    }

    moveLeft() {
        this.x -= this.speed;
        if (this.x + this.w <= 0) {
            this.x = this.canvas.width;
        }
        this.draw();
    }
}


