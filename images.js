function ImageLoader(){
    this.images = {};
}

ImageLoader.prototype.load = function (key, imgURL) {
  var img = new Image();
  img.src = imgURL;
  this.images[key] = img;
};

ImageLoader.prototype.inicializar = function (){
    this.load("bird", "images/bird.png");
    this.load("paredeCima", "images/pipeCima.png");
    this.load("paredeBaixo", "images/pipeBaixo.png");
}