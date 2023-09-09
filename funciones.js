function jugador()
{
    //mover jugador
    push();
      //noStroke();
      //fill(0);
      image(conejo,jx,jy-25);
      //ellipse(jx,jy,80);
      if(mouseX >=40 && mouseX <=width-40)
      {
        jx=mouseX;
      }
      if(mouseY >=40 && mouseY <=height-40)
      {
        jy=mouseY;
      }  
    pop();
}

function zanahorias() {
  for ( let i=0; i<cant; i++ ) {
    //dibujo
    push();
    noStroke()
    translate(zx[i], zy[i]);
    fill(170);
    image(zanahoria,0,0);
    //ellipse(0, 0, za[i]*2,za[i]*2);
    pop();
  }
}

function moverZ() {
  for ( let i=0; i<cant; i++ ) {
    // i -> 0 , 1 , 2 , 3
    zx[i]+=zvelx[i];
    zy[i]+=zvely[i];
    
    //limites
    if ( zy[i] >= height-za[i] ) {
      zy[i] = height-za[i];
      zvely[i] = -zvely[i];
    }
    if ( zy[i] <= 0+za[i] ) {
      zy[i] = 0+za[i];
      zvely[i] = -zvely[i];
    }
    
    //limites horizontales
    if ( zx[i] > width+za[i]  ) {
      zx[i] = 0-za[i];
    }
    if ( zx[i] < 0-za[i] ) {
      zx[i] = width+za[i];
    }
  }
}

function actualizarZ() {
  moverZ();
  zanahorias();
}

function inicializarZ() {
  for ( let i=0; i<cant; i++ ) {
    //i -> 0 , 1 , 2 , 3
    za[i] = 30;
    zx[i] = random( za[i], width-za[i] );
    zy[i] = random( za[i], height/2 );
    zvelx[i] = random(-2, 2);
    zvely[i] = random(-2, 2);
  }
}

function evaluarColisiones() {
  for ( let i=0; i<cant; i++ ) {
    if(dist(jx,jy,zx[i],zy[i])<za[i]){
      zx[i]=random(za[i], width-za[i]);
      zy[i]=random(za[i], height-za[i]);
      marcador+=1;
    }
  }
}

function temporizador(){
  tiempo-=1/60;
  if(round(tiempo)== 0 && marcador<60)
    {
      estado = 4;
      tiempo=30;
    }
  else if(round(tiempo)== 0 && marcador>=60)
    {
      estado = 5;
      tiempo=30;
    }
}
