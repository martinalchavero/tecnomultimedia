class aventura{
  constructor(){
    this.estado=18;
    
    this.j=new juego(); //clase juego
    this.flechaDer=loadImage('assets/flecha-continuar.png');
    this.fuente=loadFont('assets/Vollkorn-ExtraBold.ttf');
    this.fuente2=loadFont('assets/IBMPlexSerif-Bold.ttf');
    
    this.b=[]; //arreglo de botones, en cada celda de almacenamiento asignamos los valores que tendran
    // valores---> x,y,ancho,alto,c1,c2,c3,op,txt,tx,ty
    
    this.b[0]=new botones(100,400,160,60,255,80,80,255,"Créditos",175,427);
    this.b[1]=new botones(10,15,100,50,80,57,216,255,"Volver",60,36);//volver
    this.b[2]=new botones(320,400,160,60,255,80,232,255,"Historia",400,427);// lleva a p1
    this.b[3]=new botones(500,500,60,60,227,158,166,"",0,0); //siguiente
    this.b[4]=new botones(350,260,90,60,175,100,65,170,"",0,0); 
    this.b[5]=new botones(460,390,90,60,175,100,65,170,"",0,0); 
    this.b[6]=new botones(150,500,80,70,98,193,255,255,"A",190,535); 
    this.b[7]=new botones(400,500,80,70,255,185,8,255,"B",439,535); 
    this.b[8]=new botones(340,480,160,60,180,8,255,255,"Reiniciar",420,510); 
    
    
  }
  
         
  //----------------------------------- 
  actualizar(){
    if(this.estado==19){
      this.j.actualizar(20,6);
      this.resultado();
    }
    
  }
  
  //SEPARAR LAS PANTALLAS DE AVENTURA CON UN ARREGLO + VER SI SE PUEDE ENTREGAR EN WEB
  
  //-----------------------------------  
  dibujar(txt,imagen){
    
    switch(this.estado)
    {
      case 0://inicio
        image( imagen[0],0,0 );
        push();
         fill(255);
         textAlign( CENTER, CENTER );
         fill(173,255,147);
         textFont(this.fuente);
         textSize(60);
         text("Hansel y Gretel",300,180);
          
          this.b[0].boton();
          this.b[2].boton();
        pop();
       
      break;
      
      case 1://creditos
        image( imagen[1],0,0 );
        push();
          fill(255);
          textFont(this.fuente);
          textSize(30);
          text("Realizado por:",320,180);
          textAlign(CENTER,CENTER);
          textSize(40);
          fill(103,17,93);
          text("Chavero Martina",320,260);
          text("Trevisan Joaquin",320,330);
          textSize(30);
          fill(160,19,144);
          text("Comisión 2",320,400);
          textAlign(CENTER,CENTER);
          textFont(this.fuente2);
          textSize(20);
          fill(0,93,203);
          text("Historia original de los Hermanos Grimm",320,500);
         
          this.b[1].boton();
        pop();
      break;
      
      case 2://p1
        image(imagen[2],0,0 );
        push();
          noStroke();
          fill(51,152,38);
          rect(46,10,484,100,5);
          fill(255);
          textSize(25);
          text(txt[0],40, 0, 500, 120);
          this.b[3].boton(); //500,500,60,60,227,158,166
          image(this.flechaDer,510,510);
        pop();
      break;
    
      case 3://p2
        image( imagen[3],0,0 );
        push();
          noStroke();
          fill(111,62,17);
          rect(30,10,550,135,5);
          fill(255);
          textSize(25);
          text(txt[1],35, 0, 540, 150);
          
          this.b[3].boton()//.boton(500,500,60,60,227,158,204);
          image(this.flechaDer,510,510);
        pop();
      break;
      
      case 4://p3
        image( imagen[4],0,0 );
        push();
          noStroke();
          fill(17,111,22);
          rect(30,20,550,115,5);
          fill(255);
          textSize(25);
          text(txt[2],35, 0, 540, 150);
          
          this.b[3].boton();
          image(this.flechaDer,510,510);
        pop();
      break;
      
      case 5://p4
        image( imagen[5],0,0 );
        push();
          noStroke();
          fill(17,111,64);
          rect(30,10,550,135,5);
          fill(255);
          textSize(25);
          text(txt[3],35, 0, 540, 150);
          
          this.b[3].boton();
          image(this.flechaDer,510,510);
        pop();
      break;
      
      
      case 6://p5
        image( imagen[6],0,0 );
        push();
          noStroke();
          fill(25,95,178);
          rect(30,20,550,110,5);
          fill(255);
          textSize(25);
          text(txt[4],35, 0, 540, 150);
          
          fill(2,112,242);
          rect(85,150,470,45,5);
          fill(255);
          text("¿A donde crees que deberiamos ir?",320,170);
          
          this.b[4].boton(); 
          this.b[5].boton();
        pop();
      break;
      
      
      case 7://p6
        image( imagen[7],0,0 );
        push();
          noStroke();
          fill(13,137,180);
          rect(50,10,500,80,5);
          fill(255);
          textSize(25);
          text(txt[5],80, 0, 450, 100);
          this.b[3].boton();
          image(this.flechaDer,510,510);
        pop();
      break;
      
      case 8://p7
        image( imagen[8],0,0 );
        push();
          noStroke();
          fill(8,148,160);
          rect(20,10,570,90,5);
          fill(255);
          textSize(25);
          text(txt[6],80, 0, 450, 112);
          
          
          this.b[3].boton();
          image(this.flechaDer,510,510);
        pop();
      break;
      
      case 9://p8
        image( imagen[9],0,0 );
        push();
          noStroke();
          fill(8,148,160);
          rect(20,10,570,80,5);
          fill(255);
          textSize(25);
          text(txt[7], 30, 0, 550, 100);
          
          this.b[3].boton(); 
          image(this.flechaDer,510,510);
        pop();
      break;
      
      case 10://p9
        image( imagen[10],0,0 );
        push();
          noStroke();
          fill(116,86,1);
          rect(20,10,570,60,5);
          fill(255);
          textSize(25);
          text(txt[8],30, 0, 550, 80 );
          
          
          this.b[6].boton();//OPCION A
          this.b[7].boton();//OPCION B 
          
          fill(229,73,21);
          rect(140,440,360,40,5);
          fill(255);
          text("Ayudanos, elige una opción",320,460);
        pop();
      break;
      
      case 11://p10
        image( imagen[11],0,0 );
        push();
          noStroke();
          fill(162,92,11);
          rect(20,10,570,80,5);
          fill(255);
          textSize(25);
          text(txt[9], 30, 0, 550, 100 );
          
          this.b[3].boton(); 
          image(this.flechaDer,510,510);
        pop();
      break;
      
      case 12://p11
        image( imagen[12],0,0 );
        push();
          noStroke();
          fill(0,184,219);
          rect(40,10,520,60,5);
          fill(255);
          textSize(25);
          text(txt[10],30, 0, 550, 80);
          
          this.b[3].boton();
          image(this.flechaDer,510,510);
        pop();
      break;
      
      case 13://p12
        image( imagen[13],0,0 );
        push();
          noStroke();
          fill(14,170,43);
          rect(20,10,570,100,5);
          fill(255);
          textSize(25);
          text(txt[11], 30, 0, 550, 120 );
          
          this.b[8].boton();
        pop();
      break;
      
      case 14://p13
        image( imagen[14],0,0 );
        push();
          noStroke();
          fill(162,92,11);
          rect(20,10,570,80,5);
          fill(255);
          textSize(25);
          text(txt[12],30, 0, 550, 100);
          
          this.b[3].boton(); 
          image(this.flechaDer,510,510);
        pop();
      break;
      
      case 15://p14
        image( imagen[15],0,0 );
        push();
          noStroke();
          fill(64,63,47);
          rect(20,10,570,80,5);
          fill(255);
          textSize(25);
          text(txt[13], 30, 0, 550, 100);
          
          this.b[3].boton(); 
          image(this.flechaDer,510,510);
        pop();
      break;
      
      case 16://p15
        image( imagen[16],0,0 );
        push();
          noStroke();
          fill(162,92,11);
          rect(20,10,570,80,5);
          fill(255);
          textSize(25);
          text(txt[14],30, 0, 550, 100);
          this.b[8].boton();
        pop();
      break;
      
      case 17://p16 decision derecha
        image( imagen[17],0,0 );
        push();
          noStroke();
          fill(8,113,191);
          rect(20,10,570,100,5);
          fill(255);
          textSize(25);
          text(txt[15],30, 0, 550, 120);
          
          this.b[3].boton(); 
          image(this.flechaDer,510,510);
        pop();
      break;
      
      case 18://p17
        image( imagen[18],0,0 );
        push();
          noStroke();
          fill(0,142,274);
          rect(20,10,570,150,5);
          fill(255);
          textSize(25);
          text(txt[16],30, 0, 550, 100);
          text("Evita tocar las posciones mágicas para no volverte loco",80,90,450,60);
          
          this.b[3].boton(); 
          image(this.flechaDer,510,510);
        pop();
      break;
      
      case 19://juego
        push();
          this.j.dibujar();
        pop();
      break;
      
      case 20://p18
        image( imagen[19],0,0 );
        push();
          noStroke();
          fill(26,135,216);
          rect(10,160,580,130,5);
          fill(255);
          textSize(25);
          text(txt[17],10, 150, 580, 150);
          
          this.b[3].boton();
          image(this.flechaDer,510,510);
        pop();
      break;
      
      case 21://p19
        image( imagen[20],0,0 );
        push();
          noStroke();
          fill(13,109,180);
          rect(10,60,350,180,5);
          fill(255);
          textSize(25);
          text(txt[18], 10, 0, 350, 300 );
          
          this.b[3].boton(); 
          image(this.flechaDer,510,510);
        pop();
      break;
      
      case 22://final
        image( imagen[21],0,0 );
        push();
          noStroke();
          fill(5,134,229);
          rect(335,30,230,140,5);
          fill(255);
          textSize(25);
          text(txt[19], 350, 0, 200, 200);
          this.b[8].boton(); 
        pop();
      break;
    }
   
  }
  
  
  resultado(){
    this.j.tiempo-=1/60;
    if(round(this.j.tiempo)== 0 && this.j.pj.vidas==0 )
    {
      cursor();
      this.estado=20;
      this.j.tiempo=10;
      this.j.pj.vidas=3;
    }
    else if(round(this.j.tiempo)== 0 &&this.j.pj.vidas>=1)
    {
      cursor();
      this.estado=7;
      this.j.tiempo=10;
      this.j.pj.vidas=3;
    }
    else if ( this.j.pj.vidas == 0 ) {
      cursor();
      this.estado=20;
      this.j.pj.vidas=3;
      this.j.tiempo=10;
    }
  }
  
  
  
  
  
  cambiopantalla(estado1,estado2,boton){
    if( this.estado == estado1 && (mouseX>this.b[boton].x1)&&(mouseX<this.b[boton].x1+this.b[boton].ancho)&&(mouseY>this.b[boton].y1)&&(mouseY<this.b[boton].y1+this.b[boton].alto) )
    {
      
      this.estado = estado2;
      this.b[9].boton();
    }
  }
  
  
  botones(){
    //boton volver     ---> this.b[1].boton(50,50,40,40);
    //boton decision 1 ---> this.b[0].boton(150,450,60,6);
    //boton decision 2 ---> this.b[2].boton(400,450,60,60);
    //boton siguiente  ---> this.b[3].boton(500,500,60,60);
    
    this.cambiopantalla(0,1,0); //inicio a creditos
    this.cambiopantalla(1,0,1); //creditos a inicio
    
    this.cambiopantalla(0,2,2); //inicio a pantalla 1
    this.cambiopantalla(2,3,3); //pantalla 1 a pantalla 2
    this.cambiopantalla(3,4,3); //pantalla 2 a pantalla 3 
    this.cambiopantalla(4,5,3); //pantalla 3 a pantalla 4
    
    //----------------------------------------------------------------------------------
    
    //DECISION CASA DE LA ANCIANA
    this.cambiopantalla(5,6,3); //pantalla 4 a pantalla 5 
    this.cambiopantalla(6,7,4); //pantalla 5 a pantalla 6(PRIMERA DECISION - OPCION IZQ)
    this.cambiopantalla(7,8,3); //pantalla 6 a pantalla 7
    this.cambiopantalla(8,9,3); //pantalla 8 a pantalla 9
   
   
    this.cambiopantalla(9,10,3); //pantalla 8 a pantalla 9 
    this.cambiopantalla(10,11,6); //pantalla 9 a pantalla 10  (SEGUNDA DECISION - OPCION IZQ)
    this.cambiopantalla(11,12,3); //pantalla 10 a pantalla 11 
    this.cambiopantalla(12,13,3); //pantalla 11 a pantalla 12 (PRIMER FINAL)
    this.cambiopantalla(13,0,8);
    
    this.cambiopantalla(10,14,7); //pantalla 10 a pantalla 13 (SEGUNDA DECISION - OPCION DER)
    this.cambiopantalla(14,15,3); //pantalla 13 a pantalla 14
    this.cambiopantalla(15,16,3);//pantalla 14 a pantalla 15  (SEGUNDO FINAL)
    this.cambiopantalla(16,0,8);
    
   //----------------------------------------------------------------------------------
   
   //DECISION FIESTA DE DUENDES 
   this.cambiopantalla(6,17,5); //pantalla 5 a pantalla 16  (PRIMERA DECISION - OPCION DER)
   this.cambiopantalla(17,18,3); //pantalla 16 a pantalla 17
   this.cambiopantalla(18,19,3); //pantalla 17 a pantalla JUEGO
   this.cambiopantalla(20,21,3); //pantalla 18 a pantalla 19
   this.cambiopantalla(21,22,3); //pantalla 19 a pantalla FINAL
   this.cambiopantalla(22,0,8);
  }
}
