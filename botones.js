class botones{
  constructor( x,y,ancho,alto,c1,c2,c3,op,txt,tx,ty){
    //posiciones
    this.x1=x;
    this.y1=y;
    
    //ancho y alto
    this.alto=alto;
    this.ancho=ancho;
    
    //color
    this.color1=c1;
    this.color2=c2;
    this.color3=c3;
    this.opacidad=op;
    
    //texto
    this.texto=txt;
    this.textoX=tx;
    this.textoY=ty;
  }
  
  boton(){
    noStroke();
    fill(this.color1,this.color2,this.color3,this.opacidad);
    rect(this.x1,this.y1,this.ancho,this.alto,10);
    textSize(27);
    fill(255);
    text(this.texto,this.textoX,this.textoY);
  }
  
  
}  
