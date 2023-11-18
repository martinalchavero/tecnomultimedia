class juego{
  constructor(){
    this.estado=0;
    this.img=[];
    this.miPreload();
    this.b=[];
    for ( let i = 0; i < 3; i++ ) {
      this.b.push( new botones() );
    }
    this.pj=new personaje(60);
    this.enemigos = [];
    for ( let i = 0; i < 8; i++ ) {
      this.enemigos[i]=new duendes();
    }
    this.tiempo=15;
  }
  
  miPreload(){
    for(let i = 0; i < 4; i++ ){
      this.img.push( loadImage('assets/pantalla'+i+'.jpg') );
    }
    
  }
  
  actualizar(){
    if(this.estado==1){
      this.colision();
     
      this.temporizador();
      for ( let i = 0; i < 8; i++ ) {
        this.enemigos[i].actualizar();
      }
     
      if ( this.pj.vidas == 0 ) {
        this.estado = 3;
        this.pj.vidas=3;
      }
      
       
      this.pj.actualizar();
    }
  }
  
  dibujar(){
    if(this.estado==0){
      image(this.img[0],0,0);
      this.b[0].btn(200,380,180,60,"JUGAR",285,410);
      fill(157,25,98);
      rect(50,50,500,200,30);
      fill(255);
      text("Somos Hansel y Gretel, esos duendes de haya nos quieren obligar a tomar sus bebidas mágicas, ayudanos a que no nos toquen",50,50,500,190);
    }
    
    
    else if(this.estado==1){
      image(this.img[1],0,0);
      this.pj.dibujar();
      for ( let i = 0; i < 8; i++ ) {
        this.enemigos[i].dibujar();
      }
      
      push();
      noCursor();
      fill(162,252,158,50);
      rect(420,0,200,100,10);
      fill(255)
      text(round(this.tiempo)+"''",520,70);
      text( "Vidas:" + this.pj.vidas, 500,30 );
      pop();
      
      
    }
    
    
    else if(this.estado==2){
      cursor();
      image(this.img[2],0,0);
      this.b[1].btn(140,500,300,60,"VOLVER A JUGAR",285,530);
      fill(25,157,42);
      rect(50,190,500,100,30);
      fill(255);
      text("Ganamos, gracias por liberarnos de ellos",50,150,500,190);
    }
    
    
    else if(this.estado==3){
      cursor();
      image(this.img[3],0,0);
      this.b[1].btn(140,500,300,60,"VOLVER A JUGAR",285,530);
      fill(25,130,157);
      rect(50,180,500,100,30);
      fill(255);
      text("Perdimos, esas bebidas locas nos ganaron",50,140,500,190);
    }
  }
  
  botones(){
    if( this.estado == 0 && (mouseX>this.b[0].x)&&(mouseX<this.b[0].x+this.b[0].ancho)&&(mouseY>this.b[0].y)&&(mouseY<this.b[0].y+this.b[0].alto) )
    {
      this.estado = 1;
    }
    else if(this.estado ==2 && (mouseX>this.b[1].x)&&(mouseX<this.b[1].x+this.b[1].ancho)&&(mouseY>this.b[1].y)&&(mouseY<this.b[1].y+this.b[1].alto) ){
      this.estado=0;
      this.tiempo=15;
      this.pj.vidas=3;
    }
    else if(this.estado == 3 && (mouseX>this.b[1].x)&&(mouseX<this.b[1].x+this.b[1].ancho)&&(mouseY>this.b[1].y)&&(mouseY<this.b[1].y+this.b[1].alto) ){
      this.estado=0;
      this.tiempo=15;
      this.pj.vidas=3;
    }
  }
  
  colision() { 
    push();
    for(let i=0; i<8; i++ ){
        if (dist( this.pj.x, this.pj.y, this.enemigos[i].x, this.enemigos[i].y )<this.enemigos[i].t) 
        {
          // reinicio posicion
          this.enemigos[i].x = int(random(this.enemigos.t,width-this.t));
          this.enemigos[i].y =int(random(this.enemigos.t,height/2));
          // le quito una vida
          this.pj.vidas-=1;
        }
    }
    pop();
  }
  
  temporizador(){
    this.tiempo-=1/60;
    if(round(this.tiempo)== 0 && this.pj.vidas==0)
    {
      this.estado = 3;
      this.tiempo=15;
      this.pj.vidas=3;
    }
    else if(round(this.tiempo)== 0 &&this.pj.vidas>=1)
    {
      this.estado = 2;
      this.tiempo=15
      this.pj.vidas=3;
    }
  }
  
}
