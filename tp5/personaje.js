class personaje{
  constructor(t){
    this.y=500;
    this.x=width/2;
    this.tam=t;
    this.vidas=3;
    this.img=loadImage('assets/personajes.png');
  }
  
  
  actualizar(){
    this.x=mouseX;
    this.y=mouseY;
  }
  
 
  
  
  dibujar(){
      image(this.img,this.x-45,this.y-40);
      //fill(0,0,255);
      //ellipse(this.x,this.y,this.tam);
    
  }

}
