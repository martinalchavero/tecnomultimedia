let estado;
let cant=6;
let jx,jy; //posicion del jugador
let zx=[], zy=[], zvelx=[], zvely=[], za=[];//zanahorias
let marcador,fondo,fondo1,fondo2,fondo3,volver,reset;
let fuente1,fuente2;
let zanahoria,conejo,conejo1,conejo2;
let tiempo=30;

function setup() {
  createCanvas(600,600);
  imageMode(CENTER);
  estado=0;
  inicializarZ();
  marcador=0;
}

function preload(){
  fondo= loadImage("assets/img/fondo.png");
  fondo1=loadImage("assets/img/fondo1.png");
  fondo2=loadImage("assets/img/fondo2.png");
  fondo3=loadImage("assets/img/fondo3.png");
  zanahoria=loadImage("assets/img/zanahoria.png");
  conejo=loadImage("assets/img/conejo.png");
  conejo1=loadImage("assets/img/conejo1.png");
  conejo2=loadImage("assets/img/conejo2.png");
  volver=loadImage("assets/img/flecha.png");
  reset=loadImage("assets/img/reset.png");
}


function draw(){
  if(estado==0)//menu
  {
    image(fondo1,0,0);
    cursor();
    if((mouseX>180)&&(mouseX<180+220)&&(mouseY>190)&&(mouseY<190+70))
      {
        noStroke();
        fill(28,3,131);
        rect(180,190,220,70,50);
        fill(255);
        textSize(40);
        text("Jugar",240,235);
      }
      else
      {
        noStroke();
        fill(62,51,240);
        rect(180,190,220,70,50);
        fill(255);
        textSize(40);
        text("Jugar",240,235);
      }
      
      
      if((mouseX>150)&&(mouseX<150+280)&&(mouseY>280)&&(mouseY<280+70))
      {
        noStroke();
        fill(28,3,131);
        rect(150,280,280,70,50);
        fill(255);
        textSize(40);
        text("Intrucciones",185,325);
      }
      else
      {
        noStroke();
        fill(62,51,240);
        rect(150,280,280,70,50);
        fill(255);
        textSize(40);
        text("Intrucciones",185,325);
      }
      
      
      if((mouseX>170)&&(mouseX<170+240)&&(mouseY>370)&&(mouseY<370+70))
      {
        noStroke();
        fill(28,3,131);
        rect(170,370,240,70,50);
        fill(255);
        textSize(40);
        text("Créditos",210,415);
      }
      else
      {
        noStroke();
        fill(62,51,240);
        rect(170,370,240,70,50);
        fill(255);
        textSize(40);
        text("Créditos",210,415);
      }
      
    
  }
  else if(estado==1)//instrucciones
  {
    image(fondo2,0,0);
    //boton volver
      if((mouseX>30)&&(mouseX<30+60)&&(mouseY>30)&&(mouseY<30+60))
      {
        noStroke();
        fill(233, 184, 16);
        rect(30,30,60,60,20);
        image(volver, 60,57);
      }
      else
      {
        noStroke();
        fill(253, 212, 73);
        rect(30,30,60,60,20);
        image(volver, 60,57);
      }
      
      textSize(40);
      fill(170,10,66);
      text("¡Pompón está con hambre!",50,140,);
      
      push();
      fill(170,10,66);
      textSize(35);
      textAlign(CENTER,CENTER);
      text("Ayuda a Pompón a comer más de 60 zanahorias para que se llene\n \n¡Apresurate solo tiene 30 segundos!",40,180,500,300);
      pop();
  }
  else if(estado==2)//creditos
  {
    image(fondo2,0,0);
    //boton volver
      if((mouseX>30)&&(mouseX<30+60)&&(mouseY>30)&&(mouseY<30+60))
      {
        noStroke();
        fill(233, 184, 16);
        rect(30,30,60,60,20);
        image(volver, 60,57);
      }
      else
      {
        noStroke();
        fill(253, 212, 73);
        rect(30,30,60,60,20);
        image(volver, 60,57);
      }
     
     push();
      fill(170,10,66);
      textSize(30);
      text("Diseñado por:",200,200);
      textSize(40);
      text("Martina Chavero",140,260);
      textSize(30);
      text("Programado por:",180,360);
      textSize(40);
      text("Martina Chavero",140,420);
     pop(); 
  }
  else if(estado==3)//juego
  {
    image(fondo,0,0);
    noCursor();
    jugador();
    temporizador();
    evaluarColisiones();
    actualizarZ()
    
    //marcador
      fill(250,113,0);
      textSize(40);
      text(marcador,280,550);
    //tiempo 
      fill(180,64,167);
      text(round(tiempo)+"''",500,70);
      //boton volver
      if((mouseX>50)&&(mouseX<50+60)&&(mouseY>30)&&(mouseY<30+60))
      {
        noStroke();
        fill(250,126,178);
        rect(30,30,60,60,20);
        image(volver, 60,57);
      }
      else
      {
        noStroke();
        fill(209,59,124);
        rect(30,30,60,60,20);
        image(volver, 60,57);
      }
      
      //boton reiniciar
      if((mouseX>110)&&(mouseX<110+60)&&(mouseY>30)&&(mouseY<30+60))
      {
        noStroke();
        fill(200,126,250);
        rect(110,30,60,60,20);
        image(reset, 140,60);
        
      }
      else
      {
        noStroke();
        fill(151,59,209);
        rect(110,30,60,60,20);
        image(reset, 140,60);
      }
     
      
  }
  
  else if(estado==4)//perdiste
  {
    image(fondo3,0,0);
    fill(222,129,92,90);
    rect(0,0,600,600);
    image(conejo1,270,270);
    fill(103,12,9);
    text("Fallaste, Pompón se quedó con hambre",110,80,400,200);
    cursor();
     if((mouseX>100)&&(mouseX<100+380)&&(mouseY>370)&&(mouseY<370+70))
      {
        noStroke();
        fill(214,43,63);
        rect(100,370,380,70,50);
        fill(255);
        textSize(40);
        text("Volver a intentarlo",130,417);
      }
      else
      {
        noStroke();
        fill(240,77,96);
        rect(100,370,380,70,50);
        fill(255);
        textSize(40);
        text("Volver a intentarlo",130,417);
      }
      
      if((mouseX>100)&&(mouseX<100+380)&&(mouseY>460)&&(mouseY<460+70))
      {
        noStroke();
        fill(24,157,147);
        rect(100,460,380,70,50);
        fill(255);
        textSize(40);
        text("Volver al menú",150,510);
      }
      else
      {
        noStroke();
        fill(14,193,180);
        rect(100,460,380,70,50);
        fill(255);
        textSize(40);
        text("Volver al menú",150,510);
      }
      
  }
  
  else if(estado==5)//ganaste
  {
    image(fondo3,0,0);
    fill(98,250,157,50);
    rect(0,0,600,600);
    image(conejo2,270,270);
    fill(16,95,47);
    text("Ganaste, Pompón se quedó satisfecho",110,80,400,200);
    cursor();
     if((mouseX>100)&&(mouseX<100+380)&&(mouseY>370)&&(mouseY<370+70))
      {
        noStroke();
        fill(73,170,10);
        rect(100,370,380,70,50);
        fill(255);
        textSize(40);
        text("Volver a jugar",160,417);
      }
      else
      {
        noStroke();
        fill(89,224,0);
        rect(100,370,380,70,50);
        fill(255);
        textSize(40);
        text("Volver a jugar",160,417);
      }
      
      if((mouseX>100)&&(mouseX<100+380)&&(mouseY>460)&&(mouseY<460+70))
      {
        noStroke();
        fill(24,157,147);
        rect(100,460,380,70,50);
        fill(255);
        textSize(40);
        text("Volver al menú",150,510);
      }
      else
      {
        noStroke();
        fill(14,193,180);
        rect(100,460,380,70,50);
        fill(255);
        textSize(40);
        text("Volver al menú",150,510);
      }
  }
  
}


function mousePressed(){
   //( mouseX > x ) && ( mouseX < x+ancho ) && ( mouseY > y) && ( mouseY < y+alto);
   if((mouseX>180)&&(mouseX<180+220)&&(mouseY>190)&&(mouseY<190+70)){
     estado = 3; //juego
   }
   if(estado==0&&(mouseX>150)&&(mouseX<150+280)&&(mouseY>280)&&(mouseY<280+70)){
     estado=1;//instrucciones
   }
   if(estado==0&&(mouseX>170)&&(mouseX<170+240)&&(mouseY>370)&&(mouseY<370+70)){
     estado=2; //creditos
   }
   
   //boton volver al menu desde instrucciones
   if( estado == 1 && (mouseX>30)&&(mouseX<30+60)&&(mouseY>30)&(mouseY<30+60) ){
    estado = 0; //menu
   }
   
   //boton volver al menu desde creditos
   if( estado == 2 && (mouseX>30)&&(mouseX<30+60)&&(mouseY>30)&(mouseY<30+60) ){
    estado = 0; //menu
   }
   
   //boton volver al menu
   if( estado == 3 && (mouseX>30)&&(mouseX<30+60)&&(mouseY>30)&(mouseY<30+60) ){
    estado = 0; //menu
    inicializarZ();
    marcador=0;
    tiempo=30;//reiniciar
   }
   //boton reiniciar juego
   if( estado == 3 && (mouseX>110)&&(mouseX<110+60)&&(mouseY>30)&&(mouseY<30+60) ){
      inicializarZ();
       marcador=0; 
       tiempo=30;//reiniciar
   }
   
   //pantalla perdiste
   if(estado==4 && (mouseX>100)&&(mouseX<100+380)&&(mouseY>460)&&(mouseY<460+70)){
     estado=0;//menu
   }
   if(estado==4&&(mouseX>100)&&(mouseX<100+380)&&(mouseY>370)&&(mouseY<370+70)){
     estado=3;//volver a jugar
     inicializarZ();
       marcador=0; 
       tiempo=30;//reiniciar
   }
   
   //pantalla ganaste
    if(estado==5 && (mouseX>100)&&(mouseX<100+380)&&(mouseY>460)&&(mouseY<460+70)){
     estado=0;//menu
   }
   if(estado==5&&(mouseX>100)&&(mouseX<100+380)&&(mouseY>370)&&(mouseY<370+70)){
     estado=3;//volver a jugar
     inicializarZ();
       marcador=0; 
       tiempo=30;//reiniciar
   }
   
}
