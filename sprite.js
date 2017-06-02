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
    ctx.drawImage(img, this.x-this.width/2, this.y-this.height/2, this.width, this.height);
    // ctx.strokeRect(this.x-this.width/2, this.y-this.height/2, this.width, this.height);
};

Sprite.prototype.mover = function (dt) {
    this.x += this.vx * dt;
    this.y += this.vy * dt;
    this.vy += this.g * dt;
}

Sprite.prototype.colidiu = function (alvo) {
    // return (this.x + this.width/2) > alvo.x
    // && this.x < (alvo.x + alvo.width/2)
    // && (this.y + this.height/2) > alvo.y
    // && this.y < (alvo.y + alvo.height/2);

  if(this.x + this.width/2 < alvo.x-alvo.width/2) return false;
  if(this.x -this.width/2 > alvo.x+alvo.width/2) return false;
  if(this.y + this.height/2 < alvo.y-alvo.height/2) return false;
  if(this.y-this.height/2 > alvo.y+alvo.height/2) return false;
  return true;  
};


