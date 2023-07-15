//video -- https://youtu.be/IofmlSMWhv0

int a = 22;
int b =19; 
int estado;
boolean apreteBotonMenu,dentroDelRect;

//tipoDeDato + nombre --- new tipoDeDato[cantidad]
PImage[] hyg =  new PImage[a]; //declaro arreglo y asigno su dimensión/tamaño
String[] textos = new String[b]; //declaro arreglo y asigno su dimensión/tamaño

PFont fuente1;
PFont fuente2;


void setup(){
  size(600,600);
  for( int i = 0 ; i < a ; i++ ){
    hyg[i] = loadImage( "img/pantalla" + i + ".jpg" );  
  }
   textos = loadStrings("texto/texto.txt");
  for( int i = 0 ; i < b ; i++ ){
    println( i + ": " + textos[i] );
  }
  
  
  fuente1=loadFont("fuentes/CooperBlack-48.vlw");
  fuente2=loadFont("fuentes/ArialRoundedMTBold-48.vlw");
  estado=0;
  apreteBotonMenu=true;
  dentroDelRect=true;
}

//funcion que no retorna valor  -- boton siguiente
void botonSig(int c1,int c2,int c3,int c4){
  textSize(20);
  dentroDelRect=( mouseX > 430 ) && ( mouseX < 430+145) && ( mouseY > 540) && ( mouseY < 540+45);
      
  if(dentroDelRect){
        noStroke();
        fill(c1);
        rect( 430, 540, 145, 45,5 );
        fill(c2,c3,c4);
        text("Siguiente",500,562);
      }
      else{
        noStroke();
        fill(c2,c3,c4);
        rect( 430, 540, 145, 45,5 );
        fill(c1);
        text("Siguiente",500,562);
      }
}

//funcion que no retorna valor  -- boton reiniciar
void botonReiniciar(int c1,int c2,int c3,int c4){
  textSize(30);
        dentroDelRect=( mouseX >250 ) && ( mouseX < 250+160 ) && ( mouseY > 520) && ( mouseY < 520+50);
        if(dentroDelRect){//boton reinicio
          noStroke();
          fill(c1);
          rect( 250, 520, 160, 50,5 );
          fill(c2,c3,c4);
          text("Reiniciar",330,545);
        }
        else{
          noStroke();
          fill(c2,c3,c4);
          rect( 250, 520, 160, 50,5 );
          fill(c1);
          text("Reiniciar",330,545);
        }
}

//función que devuelve valor --- distancia entre dos variables con mouseX y mouseY
float distCir(float v1,float v2){
  float distancia= dist(mouseX,mouseY,v1,v2);
  return distancia;
  
}

boolean dentroDelCirc( int x, int y, int t ){  
  return dist(mouseX, mouseY, x, y) <= t/2;
}

void draw(){
  //image( hyg[15], 0, 0 );  //muestro sólo la imagen guardada en la tercera posición de mi arreglo
 
  switch(estado){
    case 0:
      println("menu");
      image( hyg[0], 0, 0 );
      textSize( 15 );
      
      textAlign( CENTER, CENTER );
      textFont(fuente1);
      fill(173,255,147);
      textSize( 60 );
      text("Hansel y Gretel",300,90);
       
      textFont(fuente2);
      textSize(35);
      
      pushStyle();
      //boton de la historia
      dentroDelRect=( mouseX > 228 ) && ( mouseX < 228+165 ) && ( mouseY > 240) && ( mouseY < 240+60);
      
      if(dentroDelRect){
        noStroke();
        fill( 255);
        rect( 228, 240,165,60,5 );
        fill(255,175,0);
        text("Iniciar",310,270);
      }
      else{
        noStroke();
        fill( 255,175,0);
        rect( 228, 240,165,60,5 );
        fill(255);
        text("Iniciar",310,270);
      }
      popStyle();
      
      pushStyle();
      //boton creditos
      dentroDelRect=( mouseX > 200 ) && ( mouseX < 200+220 ) && ( mouseY > 370) && ( mouseY < 370+60);
      
        if(dentroDelRect){
          noStroke();
          fill( 255);
          rect( 200, 370, 220, 60,5 );
          fill(227,108,221);
          text("Créditos",310,400);
        }
        else{
          noStroke();
          fill(227,108,221);
          rect( 200, 370, 220, 60,5 );
          fill(255);
          text("Créditos",310,400);
        }
      popStyle();
    break;
      
    case 1:
    println("creditos");
    image( hyg[1], 0, 0 );
      pushStyle();
      textFont(fuente2);
      textSize(30);
      text("Realizado por:",320,260);
      textAlign(CENTER,CENTER);
      
      textFont(fuente1);
      textSize(40);
      fill(103,17,93);
      text("Chavero Martina",320,320);
      
      textFont(fuente1);
      textSize(30);
      fill(160,19,144);
      text("Comisión 2",320,360);
      textAlign(CENTER,CENTER);
      
      textFont(fuente2);
      textSize(20);
      fill(0,93,203);
      text("Historia original de los Hermanos Grimm",320,450);
      popStyle();
      
      pushStyle();
      //volver al menu
      dentroDelRect=( mouseX > 350 ) && ( mouseX < 200+350 ) && ( mouseY > 500) && ( mouseY < 500+60);
        
        if(dentroDelRect){
          noStroke();
          fill(255);
          rect( 385, 500, 170, 60,5 );
          fill(0,23,255);
          text("Volver",470,530);
        }
        else{
          noStroke();
          fill(0,23,255);
          rect( 385, 500, 170, 60,5 );
          fill(255);
          text("Volver",470,530);
        }
      popStyle(); 
    break;
    
    case 2:
    println("p1");
    image( hyg[2], 0, 0 );
      pushStyle();
        noStroke();
        fill(51,152,38);
        rect(60,10,465,100,5);
        fill(255);
        textSize(25);
        text( textos[0], 40, 0, 500, 120 );
      popStyle();
      
      pushStyle();
        botonSig(255,255,15,132); //boton de siguiente 
      popStyle();
    break;
    
    case 3:
    println("p2");
    image( hyg[3], 0, 0 );
      pushStyle();
        noStroke();
        fill(111,62,17);
        rect(30,10,550,135,5);
        fill(255);
        textSize(25);
        text( textos[1], 35, 0, 540, 150 );
      popStyle();
    
      pushStyle();
        botonSig(255,193,44,18); //boton de siguiente 
      popStyle();
    break;

    case 4:
    println("p3");
    image( hyg[4], 0, 0 );
       pushStyle();
        noStroke();
        fill(17,111,22);
        rect(30,20,550,115,5);
        fill(255);
        textSize(25);
        text( textos[2], 35, 0, 540, 150 );
      popStyle();
    
      pushStyle();
        botonSig(255,18,193,127); //boton de siguiente 
      popStyle();
    break;
    
    case 5:
    println("p4");
    image( hyg[5], 0, 0 );
     pushStyle();
        noStroke();
        fill(17,111,64);
        rect(30,10,550,135,5);
        fill(255);
        textSize(25);
        text( textos[3], 35, 0, 540, 150 );
      popStyle();
    
      pushStyle();
        botonSig(255,237,114,12); //boton de siguiente 
      popStyle();
    break;
    
    case 6:
    println("p5");
    image( hyg[6], 0, 0 );
     pushStyle();
        noStroke();
        fill(25,95,178);
        rect(30,20,550,110,5);
        fill(255);
        textSize(25);
        text( textos[4], 35, 0, 540, 150 );
        
        fill(2,112,242);
        rect(85,150,470,45,5);
        fill(255);
        text("¿A donde crees que deberiamos ir?",320,170);
      popStyle();
    
    
    
    //primera decision 
      pushStyle();
      dentroDelRect=( mouseX > 355) && ( mouseX < 100+355 ) && ( mouseY > 260) && ( mouseY < 260+60);
        if(dentroDelRect){
          noStroke();
          fill(0,50);
          rect( 355, 260, 100, 60,5 );
        }
      popStyle(); 
      
      pushStyle();
      dentroDelRect=( mouseX > 460) && ( mouseX < 100+460 ) && ( mouseY > 390) && ( mouseY < 390+60);
        if(dentroDelRect){
          noStroke();
          fill(0,50);
          rect(460, 390, 100, 60,5 );
        }
      popStyle(); 
    break;
    
    case 7: //primera decision opcion A
    println("p6");
    image( hyg[7], 0, 0 );
     pushStyle();
        noStroke();
        fill(13,137,180);
        rect(50,10,500,80,5);
        fill(255);
        textSize(25);
        text( textos[5], 80, 0, 450, 100 );
      popStyle();
    
      pushStyle();
        botonSig(255,255,15,132); //boton de siguiente 
      popStyle();
    break;
    
    case 8:
    println("p7");
    image( hyg[8], 0, 0 );
      pushStyle();
        noStroke();
        fill(8,148,160);
        rect(20,10,570,80,5);
        fill(255);
        textSize(25);
        text( textos[6], 30, 0, 550, 100 );
      popStyle();
    
      pushStyle();
        botonSig(255,231,240,17); //boton de siguiente 
      popStyle();
    break;
    
    case 9:
    println("p8");
    image( hyg[9], 0, 0 );
      pushStyle();
        noStroke();
        fill(8,148,160);
        rect(20,10,570,80,5);
        fill(255);
        textSize(25);
        text( textos[7], 30, 0, 550, 100 );
      popStyle();
    
      pushStyle();
        botonSig(255,82,112,255); //boton de siguiente 
      popStyle();
    break;
    
    case 10://segunda decición 
    println("p9"+" "+ "Distancia 1: "+distCir(180,550)+" "+ "Distancia 2: "+distCir(450,550));
    image( hyg[10], 0, 0 );
      pushStyle();
        noStroke();
        fill(116,86,1);
        rect(20,10,570,60,5);
        fill(255);
        textSize(25);
        text( textos[8], 30, 0, 550, 80 );
        
        fill(229,73,21);
        rect(140,460,360,40,5);
        fill(255);
        text("Ayudanos, elige una opción",320,480);
      popStyle();
    
    
      pushStyle();//boton A
        if(distCir(180,550)<=75/2){
        noStroke();
          fill(255);
          circle(180,550,75);
          fill(199,3,255);
          text("A",180,550);
        }
        else{
          noStroke();
          fill(199,3,255);
          circle(180,550,75);
         fill(255);
          text("A",180,550);
        }
      popStyle();
      
      pushStyle();//boton B
        if(distCir(450,550)<=75/2){
        noStroke();
          fill(255);
          circle(450,550,75);
          fill(5,213,234);
          text("B",450,550);
        }
        else{
          noStroke();
          fill(5,213,234);
          circle(450,550,75);
          fill(255);
          text("B",450,550);
        }
      popStyle();
    break;
    
    case 11://opcion A
    println("p10");
    image( hyg[11], 0, 0 );
     pushStyle();
        noStroke();
        fill(162,92,11);
        rect(20,10,570,80,5);
        fill(255);
        textSize(25);
        text( textos[9], 30, 0, 550, 100 );
      popStyle();
    
      pushStyle();
        botonSig(255,17,240,59); //boton de siguiente 
      popStyle();
    break;
    
    case 12:
    println("p11");
    image( hyg[12], 0, 0 );
    pushStyle();
        noStroke();
        fill(0,184,219);
        rect(40,10,520,60,5);
        fill(255);
        textSize(25);
        text( textos[10], 30, 0, 550, 80 );
      popStyle();
    
      pushStyle();
        botonSig(255,240,162,17); //boton de siguiente 
      popStyle();
    break;
    
    case 13://pantalla de final 1
    println("p12");
    image( hyg[13], 0, 0 );
    pushStyle();
        noStroke();
        fill(14,170,43);
        rect(20,10,570,100,5);
        fill(255);
        textSize(25);
        text( textos[11], 30, 0, 550, 120 );
      popStyle();
    
      pushStyle();
        botonReiniciar(255,255,106,238);
      popStyle();
    break;
  
  
    case 14://opcion B
    println("p13");
    image( hyg[14], 0, 0 );
    pushStyle();
        noStroke();
        fill(162,92,11);
        rect(20,10,570,80,5);
        fill(255);
        textSize(25);
        text( textos[12], 30, 0, 550, 100 );
      popStyle();
    
      pushStyle();
        botonSig(255,17,240,59);   //boton de siguiente 
      popStyle();
    break;
    
    case 15:
    println("p14");
    image( hyg[15], 0, 0 );
    pushStyle();
        noStroke();
        fill(64,63,47);
        rect(20,10,570,80,5);
        fill(255);
        textSize(25);
        text( textos[13], 30, 0, 550, 100 );
      popStyle();
    
      pushStyle();
        botonSig(255,255,15,132);  //boton de siguiente 
      popStyle();
    break;
  
    case 16:
    println("p15");
    image( hyg[16], 0, 0 );
    pushStyle();
        noStroke();
        fill(162,92,11);
        rect(20,10,570,80,5);
        fill(255);
        textSize(25);
        text( textos[14], 30, 0, 550, 100 );
      popStyle();
    
      pushStyle();
        botonReiniciar(255,2,155,133);
      popStyle();
    break; 
    
    case 17://primera decision opción B
    println("p16");
    image( hyg[17], 0, 0 );
    pushStyle();
        noStroke();
        fill(8,113,191);
        rect(20,10,570,100,5);
        fill(255);
        textSize(25);
        text( textos[15], 30, 0, 550, 120 );
      popStyle();
    
      pushStyle();
        botonSig(255,255,15,132); //boton de siguiente 
      popStyle();
    break;
    
    case 18://primera decision opción B
    println("p17");
    image( hyg[18], 0, 0 );
      pushStyle();
          noStroke();
          fill(0,142,274);
          rect(20,10,570,80,5);
          fill(255);
          textSize(25);
          text( textos[16], 30, 0, 550, 100 );
          
          fill(33,132,206);
          rect(160,100,320,40,5);
          fill(255);
          text("Mmm,¿Nos quedamos?",320,120);
        popStyle();
    
      pushStyle();//decisión
        dentroDelRect=( mouseX > 40) && ( mouseX < 40+200 ) && ( mouseY > 270) && ( mouseY < 270+50);
       textSize(25);
        if(dentroDelRect){
          noStroke();
          fill(255);
          rect( 40, 270, 200, 50,5 );
          fill(255,3,91);
          text("No,vayanse",140,294);
        }
        else{
          noStroke();
          fill(255,3,91);
          rect( 40, 270, 200, 50,5 );
          fill(255);
          text("No,vayanse",140,294);
        }
      popStyle();
      
      pushStyle();//decisión
        dentroDelRect=( mouseX > 40) && ( mouseX < 40+200 ) && ( mouseY > 200) && ( mouseY < 200+50);
       textSize(25);
        if(dentroDelRect){
          noStroke();
          fill(255);
          rect( 40, 200, 200, 50,5 );
          fill(5,234,18);
          text("Si,quedense",140,222);
        }
        else{
          noStroke();
          fill(5,234,18);
          rect( 40, 200, 200, 50,5 );
          fill(255);
          text("Si,quedense",140,222);
        }
      popStyle();
      
    break;
    
    case 19://opcion A
    println("p18");
    image( hyg[19], 0, 0 );
      pushStyle();
        noStroke();
        fill(26,135,216);
        rect(10,160,580,130,5);
        fill(255);
        textSize(25);
        text( textos[17], 10, 150, 580, 150 );
      popStyle();
    
      pushStyle();
        botonSig(255,255,15,132); //boton de siguiente 
      popStyle();
    break;
    
    case 20:
    println("p19");
    image( hyg[20], 0, 0 );
      pushStyle();
        noStroke();
        fill(13,109,180);
        rect(10,60,350,180,5);
        fill(255);
        textSize(25);
        text( textos[18], 10, 0, 350, 300 );
      popStyle();
    
      pushStyle();
        botonSig(255,57,5,234); //boton de siguiente 
      popStyle();
    break;
  
    case 21:
    println("p20");
    image( hyg[21], 0, 0 );
     pushStyle();
        noStroke();
        fill(5,134,229);
        rect(335,30,230,140,5);
        fill(255);
        textSize(25);
        text( textos[19], 350, 0, 200, 200 );
      popStyle();
    
    
      pushStyle();
        botonReiniciar(255,149,234,5); //boton de siguiente 
      popStyle();
    break;
  }
}


void mousePressed(){  
  //( mouseX > x ) && ( mouseX < x+ancho ) && ( mouseY > y) && ( mouseY < y+alto);

  if( estado == 0 && (mouseX>200)&&(mouseX<200+220)&&(mouseY>370)&&(mouseY<60+370) ){
    estado = 1; //creditos
  }else if( estado == 1 && ( mouseX > 385) && ( mouseX < 385+170 ) && ( mouseY > 500) && ( mouseY < 500+60)){
    estado = 0; //vuelve al menu 
  }else if( estado == 0 && ( mouseX > 200 ) && ( mouseX < 200+165) && ( mouseY > 240) && ( mouseY < 240+60)){
    estado = 2; //p2 (inicio de historia)
  }else if(estado == 2 && ( mouseX > 430) && ( mouseX < 430+145 ) && ( mouseY > 540) && ( mouseY < 540+45) ){
    estado = 3; //p3
  }else if(estado == 3 && ( mouseX > 430) && ( mouseX < 430+145 ) && ( mouseY > 540) && ( mouseY < 540+45) ){
    estado = 4; //p4
  }else if(estado == 4 && ( mouseX > 430) && ( mouseX < 430+145 ) && ( mouseY > 540) && ( mouseY < 540+45) ){
    estado = 5; //p5
  }else if(estado == 5 && ( mouseX > 430) && ( mouseX < 430+145 ) && ( mouseY > 540) && ( mouseY < 540+45) ){
    estado = 6; //p6
  }
  
  //primer decisión opcion A
  else if(estado == 6 && ( mouseX > 355) && ( mouseX < 355+100 ) && ( mouseY > 260) && ( mouseY < 260+60) ){
    estado = 7; //p7
  }else if(estado == 7 && ( mouseX > 430) && ( mouseX < 430+145 ) && ( mouseY > 540) && ( mouseY < 540+45) ){
    estado = 8; //p8
  }else if(estado == 8 && ( mouseX > 430) && ( mouseX < 430+145 ) && ( mouseY > 540) && ( mouseY < 540+45) ){
    estado = 9; //p9
  }else if(estado == 9 && ( mouseX > 430) && ( mouseX < 430+145 ) && ( mouseY > 540) && ( mouseY < 540+45) ){
    estado = 10; //p10
  }
  
  //segunda decisión opcion A
  else if(estado == 10 && dentroDelCirc(180,550,75)  ){
    estado = 11; //p11
  }else if(estado == 11 && ( mouseX > 430) && ( mouseX < 430+145 ) && ( mouseY > 540) && ( mouseY < 540+45) ){
    estado = 12; //p12
  }else if(estado == 12 && ( mouseX > 430) && ( mouseX < 430+145 ) && ( mouseY > 540) && ( mouseY < 540+45) ){
    estado = 13; //p13
  }else if(estado == 13 && ( mouseX >250 ) && ( mouseX < 250+160 ) && ( mouseY > 520) && ( mouseY < 520+50) ){
    estado = 0; //menu (reinicio)
  }
  
  //segunda decision opcion B
   else if(estado == 10 && dentroDelCirc(450,550,75)){
    estado = 14; //p14
  }else if(estado == 14 && ( mouseX > 430) && ( mouseX < 430+145 ) && ( mouseY > 540) && ( mouseY < 540+45) ){
    estado = 15; //p15
  }else if(estado == 15 && ( mouseX > 430) && ( mouseX < 430+145 ) && ( mouseY > 540) && ( mouseY < 540+45) ){
    estado = 16; //p16
  }else if(estado == 16 && ( mouseX >250 ) && ( mouseX < 250+160 ) && ( mouseY > 520) && ( mouseY < 520+50) ){
    estado = 0; //menu (reinicio)
  }
  
  //primera decision opcion B
  else if(estado == 6 &&( mouseX > 460) && ( mouseX < 100+460 ) && ( mouseY > 390) && ( mouseY < 390+60)){
    estado=17;
  }else if(estado == 17 &&( mouseX > 430) && ( mouseX < 430+145 ) && ( mouseY > 540) && ( mouseY < 540+45)){
    estado=18;
  }
  
  //segunda decision opcion A
  else if(estado == 18 && ( mouseX > 40) && ( mouseX < 40+200 ) && ( mouseY > 200) && ( mouseY < 200+50)){
    estado = 19; //p19
  }else if(estado == 19 && ( mouseX > 430) && ( mouseX < 430+145 ) && ( mouseY > 540) && ( mouseY < 540+45) ){
    estado = 20; //p20
  }else if(estado == 20 && ( mouseX > 430) && ( mouseX < 430+145 ) && ( mouseY > 540) && ( mouseY < 540+45) ){
    estado = 21; //p21
  }else if(estado == 21 && ( mouseX >250 ) && ( mouseX < 250+160 ) && ( mouseY > 520) && ( mouseY < 520+50) ){
    estado = 0; //menu (reinicio)
  }
  
  
  //segunda decision opcion B
  else if(estado == 18 && ( mouseX > 40) && ( mouseX < 40+200 ) && ( mouseY > 270) && ( mouseY < 270+50)){
    estado = 7; //p7
  }
  
}
