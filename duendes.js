class duendes{
  constructor(){
    this.t=40;
    this.x=int(random(this.t,width-this.t));
    this.y=int(random(this.t,height/2));
    this.vy=random(2,6);
    this.vx=random(2,6);
    this.img=loadImage('assets/posion.png');
  }
  
  
  actualizar(){
     this.x = this.x + this.vx; 
     this.y = this.y + this.vy; 
    
    //limites
    if ( this.y >= height-this.t ) {
      this.y = height-this.t;
      this.vy = -this.vy;
    }
    if ( this.y <= 0+this.t ) {
      this.y = 0+this.t;
      this.vy = -this.vy;
    }
    
    
    //limites horizontales
    if ( this.x >= width-this.t ) {
      this.x = width-this.t;
      this.vx = -this.vx;
    }
    if ( this.x <= 0+this.t ) {
      this.x = 0+this.t;
      this.vx = -this.vx;
    }
    
  }
  
  dibujar(){
    push();
    image(this.img,this.x-25,this.y-60);
      
      //fill(0);
      //circle(this.x, this.y, this.t);
      //fill( 255 );
      //text( this.v, this.x, this.y+this.t/2 );
    pop();
  }
  
  
}
