function Level() {
    this.paredes = [];
    this.total = 10;
}

Level.prototype.inicializar = function (tela) {
    for (var i = 1; i < this.total; i++) {
        var espaco = 80;
        var tamanho = 250;
        var indice = 0;

        var pX = 200+tamanho * i;
        var vX = -100;
        var paredeCima = new Sprite(pX, 0, 40, parseInt(Math.random() * 300 + espaco / 500), "green", "paredeBaixo");
        var paredeBaixo = new Sprite(pX, 500, 40, -(500 - paredeCima.height) + espaco, "green", "paredeCima");
        paredeCima.vx = vX; 
        paredeBaixo.vx = vX; 
        this.paredes.push(paredeCima);
        this.paredes.push(paredeBaixo);
    }
}

Level.prototype.desenhar = function (ctx) {
    for (var i = 0; i < this.paredes.length; i++) {
        this.paredes[i].desenhar(ctx, this.imageLib.images[this.paredes[i].imgkey]);
    }
}

Level.prototype.mover = function (dt) {
    for (var i = 0; i < this.paredes.length; i++) {
        this.paredes[i].mover(dt);
    }
}

Level.prototype.colidiuComPassaro = function(bird){
    for (var i = 0; i < this.paredes.length; i++) {
        return this.paredes[i].colidiu(bird);
    }
    return false;
}