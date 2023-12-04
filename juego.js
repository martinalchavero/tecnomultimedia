class juego{
  constructor(){
    this.img=loadImage('assets/juego.jpg');
    this.pj=new personaje(60); //clase personaje
    this.enemigos = [];
    for ( let i = 0; i < 6; i++ ) {
      this.enemigos[i]=new duendes(); //clase duendes
    }
    this.tiempo=10;
  }
 
  
  actualizar(){
      this.colision();
      //this.temporizador();
      for ( let i = 0; i < 6; i++ ) {
        this.enemigos[i].actualizar();
      }
     
      //if ( this.pj.vidas == 0 ) {
      //  this.estado = 3;
      //  this.pj.vidas=3;
      //}
      this.pj.actualizar();
    
  }
  
  dibujar(){
    image(this.img,0,0);
      this.pj.dibujar();
      for ( let i = 0; i < 6; i++ ) {
        this.enemigos[i].dibujar();
      }
      
      push();
      noCursor();
      noStroke();
      fill(162,252,158,50);
      rect(420,0,200,100,10);
      fill(255)
      textSize(25);
      text(round(this.tiempo)+"''",520,70);
      text( "Vidas:" + this.pj.vidas, 500,30 );
      pop();
  }
  
  
  
  colision() { 
    push();
    for(let i=0; i<6; i++ ){
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
  
  
}
