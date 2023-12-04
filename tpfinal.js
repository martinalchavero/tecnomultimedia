//HISTORIA: HANSEL Y GRETEL
//GRUPO: CHAVERO MARTINA (92720/3) Y TREVISAN JOAQUIN (92714/5) -- COMISION 2

let a;
let texto=[];
let img=[];

function setup() {
  createCanvas(600,600);
  a= new aventura(texto,img);//clase principal
  textAlign(CENTER,CENTER);
 
}


function draw() {
  a.actualizar();
  a.dibujar(texto,img);
  
}

function mousePressed(){
  a.botones();
}

function preload(){
  for (let x = 0; x < 19; x++) {
      texto = loadStrings('assets/texto.txt');
  }
  for (let i = 0; i < 22; i++) {
    img[i] = loadImage('assets/pantalla'+ i +'.jpg');
  }
}
