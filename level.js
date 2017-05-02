function Level() {
    this.paredes = [];
    this.total = 6;
}

Level.prototype.inicializar = function (tela) {
    for (var i = 1; i < this.total; i++) {
        var espaco = 100;
        var tamanho = 250;
        var indice = 0;

        var pX = 200+tamanho * i;
        var vX = -80;
        var paredeCima = new Sprite(pX, 0, 30, parseInt(Math.random() * 300 + espaco / 500), "green");
        var paredeBaixo = new Sprite(pX, 500, 30, -(500 - paredeCima.height) + espaco, "green");
        paredeCima.vx = vX; 
        paredeBaixo.vx = vX; 
        this.paredes.push(paredeCima);
        this.paredes.push(paredeBaixo);
    }
}

Level.prototype.desenhar = function (ctx) {
    for (var i = 0; i < this.paredes.length; i++) {
        this.paredes[i].desenhar(ctx);
    }
}

Level.prototype.mover = function (dt) {
    for (var i = 0; i < this.paredes.length; i++) {
        this.paredes[i].mover(dt);
    }
}