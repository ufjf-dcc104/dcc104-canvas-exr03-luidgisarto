function Sprite(x, y, w, h, cor, imgkey) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.vx = 0;
    this.vy = 0;
    this.imgkey = imgkey;
    this.color = cor;
    this.g = 0;
}

Sprite.prototype.desenhar = function (ctx, img) {
    ctx.fillStyle = this.color;
    ctx.lineWidth =2;
    ctx.drawImage(img, this.x, this.y, this.width, this.height);
    // ctx.strokeRect(this.x, this.y, this.width, this.height);
};

Sprite.prototype.mover = function (dt) {
    this.x += this.vx * dt;
    this.y += this.vy * dt;
    this.vy += this.g * dt;
}

Sprite.prototype.colidiu = function (alvo) {
  return !(
      ((parseInt(alvo.y) + parseInt(alvo.height)) < parseInt(this.y))
      || (parseInt(alvo.y)) > (parseInt(this.y) + parseInt(this.height))
      || (parseInt(alvo.x) + parseInt(alvo.width)) < parseInt(this.x)
      || (parseInt(alvo.x)) >  (parseInt(this.x) + parseInt(this.width))    
  )
};