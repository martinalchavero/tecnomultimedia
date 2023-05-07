//CHAVERO MARTINA -- N° Legajo 92720/3 -- Comision 2

PFont fuente1;
PFont fuente2;

int pantalla; //estados
int marcaEnElTiempo; 

PImage img1;
PImage img2;
PImage img3;
PImage img4;

int y1 =-50;
int y2 =490;
int x=640;
float opacidad;
float opacidad1;
int tamaño=0;
float tamaño1=0;

void setup(){
  fuente1 = loadFont("MADETOMMY-ExtraBold-48.vlw");
  fuente2 = loadFont("MADETOMMYOutline-Black-48.vlw");
  
  pantalla=0;
  
  size(640,480);
  
  
  img1=loadImage("koala1.jpg");
  img2=loadImage("koala2.jpg");
  img3=loadImage("koala3.jpg");
  img4=loadImage("koala4.jpg");
  
}

void draw(){
  int diferenciaTemporal = millis() - marcaEnElTiempo;
  println(diferenciaTemporal +"/"+ millis() +"/" + marcaEnElTiempo);
  
  
  //pantalla 0 (inicial)
  if(pantalla==0)
  {
    textFont(fuente2); 
    image(img1,0,0);
    textSize(60);
    fill(255);
    textAlign(RIGHT,RIGHT);
    
    //info
    text("Hola!\nSoy un koala\nte invito\na conocerme",640,y1);
    
    //transicion hacia abajo
    if (y1>=-50){
     y1+=1;
    }
    
    
    //
    if( diferenciaTemporal >= 10500)
    {
      y1=-50; //reinicio
      pantalla = 1;
      marcaEnElTiempo=millis();
    }
  }
  
  
  //pantalla 1
  else if(pantalla==1)
  {
    image(img2,x,0);
    //transicion hacia la izquierda
    if(x>=0)
    {
      x-=2;
    }
    
      textFont(fuente1);
      textAlign(CENTER,CENTER);
      textSize(35);
      
      //opacidad del texto
      if(x<=1)
      {
        if(opacidad<=255)
        {
          fill(255,opacidad);
          opacidad+=1;
          
          //info
          text("Nos encanta el eucalipto \ntanto que nunca \nlos abandonamos",320,240);
        }
        
  
      }
      
      //
      if( diferenciaTemporal >= 9500)
      {
        
        opacidad=0; //reinicio
        x=640; //reinicio
        pantalla = 2; //reinicio
        marcaEnElTiempo=millis();
      }
 
    }
    
   //pantalla 2
   else if(pantalla==2)
   {
     image(img3,0,y2);
     if(y2>=0)
     {
       y2-=1;
     }
     
       fill(255);
       noStroke();
       circle(0,480,tamaño);
       
       textAlign(LEFT,BOTTOM);
       textFont(fuente1);
       fill(0,opacidad);
       textSize(40);
       
       //aumento de circulo + opacidad de letras
       if(y2<=1)
       {
         if(tamaño<=600)
        {
         tamaño+=3;
         
         if(opacidad<=255)
          {
            opacidad+=1; 
          }
         }
         
         //info
         text("Somos \ncapaz de \ndormir hasta \n18 horas \npor dia!!",10,450);
       }
       
         
      //
      if( diferenciaTemporal >= 12500)
      {
        opacidad=0; //reinicio
        tamaño=0; //reinicio
        y2=490; //reinicio
        
        pantalla = 3;
        marcaEnElTiempo=millis();
      }   
   }
      
   //pantalla 3   
   else if(pantalla==3)
   {
    image(img4,0,0);
    textFont(fuente2);
    textAlign(RIGHT,TOP);
    textSize(tamaño1);
    fill(255);
    
    //aumento de letras
    if(tamaño1<=40)
    {
      tamaño1+=0.3;
    }
    
    //info
    text("Nacemos con unos dos\n centimetros de tamano\n y un gramo de peso.\n Somos muy muy pequeñitos",600,20);
   
    //
      if( diferenciaTemporal >=8000)
      {
        tamaño1=0; //reinicio
        pantalla = 4; //reinicio
        marcaEnElTiempo=millis();
      }  
    }
    
    
    //pantalla 4 (final)
    else if(pantalla==4)
    {
      opacidad1+=1;
      fill(147,224,162,opacidad1);
      rect(0,0,640,480);
      textAlign(CENTER,CENTER);
      fill(0,opacidad1);
      textFont(fuente2);
      
      text("Puedes volver a ver \nsobre mi tocando \nel botón de abajo",320,200);
      
      
        int x=640/2, y=350, d=70;
       color bg=color (255);
       float distancia, radio;
       int colorBtn;
       distancia = dist(x, y, mouseX, mouseY);
       radio = d / 2;
  
      //color_boton = mouseOver
      if ( distancia < radio ) 
      {
        colorBtn = 50;
        if ( mousePressed ) 
        {
          colorBtn = 255;
        }
      } 
      
      else 
      {
        colorBtn = 255;
      }
    
      //boton
      fill( colorBtn );
      circle( x, y, d );
      line( x, y, mouseX, mouseY );
         
    }
}

void mousePressed() {
  if( pantalla == 4){
     y1=-50;
     opacidad1 = 0;
     
     pantalla = 0 ;
  }
}  
  
