let j;

function setup() {
  createCanvas(600,600);
  j= new juego();//clase principal
  textAlign(CENTER,CENTER);
}


function draw() {
  j.actualizar();
  j.dibujar();
}

function mousePressed(){
  j.botones();
}
