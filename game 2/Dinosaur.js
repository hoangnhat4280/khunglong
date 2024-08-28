class Dinosaur {
    x;
    y;
    w;
    h;
    canvas;
    ctx;
    flag;

    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.canvas = document.getElementById('screen-game');
        this.ctx = this.canvas.getContext('2d');
        this.flag = 'top';
    }
    draw() {
        // this.ctx.beginPath();
        // this.ctx.fillRect(this.x, this.y, this.w, this.h);
        // this.ctx.fillStyle = this.color;
        // this.ctx.closePath();

        const image = new Image();
        image.src = 'dinosaur.png';
        this.ctx.drawImage(image, this.x, this.y, this.w, this.h);
    }
    jump() {
       let x = setInterval( () => {
         if (this.y <= 240) {
             this.flag = "down";
         }
         if (this.flag === "down" && this.y + this.h >= this.canvas.height) {
             this.flag = "top";
         }
             switch (this.flag) {
                 case "top":
                     this.y -= 10;
                     break;
                 case "down":
                     this.y += 10;
                     break;
             }
         if (this.y + this.h >= this.canvas.height) {
             clearInterval(x);
             return
         }
         this.draw();

       },20)
    }
}