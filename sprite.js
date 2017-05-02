function Sprite(x, y, w, h, cor) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.vx = 0;
    this.vy = 0;
    this.color = cor;
    this.g = 0;
}

Sprite.prototype.desenhar = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.strokeRect(this.x, this.y, this.width, this.height);
};

Sprite.prototype.mover = function (dt) {
    this.x += this.vx * dt;
    this.y += this.vy * dt;
    this.vy += this.g * dt;
}