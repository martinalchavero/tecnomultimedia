class botones{
  constructor(){
    this.x=0;
    this.y=0;
    this.ancho=0;
    this.alto=0;
  }
  
  btn(posX,posY,tam1,tam2,txt,txt1,txt2){
    noStroke();
    fill(243,245,200);
    rect(this.x=posX,this.y=posY,this.ancho=tam1,this.alto=tam2,60);
    fill(0);
    textSize(29);
    text(txt,txt1,txt2);
  }
}
