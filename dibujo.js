var boton = document.getElementById("botoncito");

var boton1 = document.getElementById("botoncito1");
boton1.addEventListener("click", dibujo1 );
var boton2 = document.getElementById("botoncito2");
boton2.addEventListener("click", dibujo2 );
var boton3 = document.getElementById("botoncito3");
boton3.addEventListener("click", dibujo3 );

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

var colorcito = "red";

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujo1()
{
  lienzo.clearRect(0,0,d.width,d.height);
  var l = 0;
  var yi, xf;
  var colorcito = "blue";

  for(l = 0;l < 30; l++)
  {
    yi = 10*l;
    xf = 10*(l + 1);
  
  //-------------- 1 --------------------
  dibujarLinea(colorcito, 0, (yi+300), xf, 600);//Izquierda-abajo
  dibujarLinea(colorcito, yi, 0, 0, 300-xf);//Izquierda-arriba
  dibujarLinea(colorcito, 300+yi, 0, 600, xf);//Derecha-arriba
  dibujarLinea(colorcito, 300+yi, 600, 600, 600-xf);//Derecha-abajo
  
  dibujarLinea(colorcito, 50, (yi+250), (xf+50), 550);
  dibujarLinea(colorcito, yi+50, 50, 50, 350-xf);
  dibujarLinea(colorcito, 250+yi, 50, 550, xf+50);
  dibujarLinea(colorcito, 250+yi, 550, 550, 550-xf);

  dibujarLinea(colorcito, 300, yi, 300+xf, 300);
  dibujarLinea(colorcito, 300+yi, 300, 300, 600-xf);
  dibujarLinea(colorcito, yi, 300, 300, 300+xf);
  dibujarLinea(colorcito, yi, 300, 300, 300-xf);
  }
  dibujarLinea(colorcito, 0,300,300,300);
  dibujarLinea(colorcito, 300,0,300,300);
}

function dibujo2()
{
  lienzo.clearRect(0,0,d.width,d.height);
  
  var l = 0;
  var yi, xf;
  var colorcito = "black";

  for(l = 0;l < 30; l++)
  {
    yi = 10*l;
    xf = 10*(l + 1);
    dibujarLinea(colorcito, 0, yi, 600, 600-yi);
    dibujarLinea(colorcito, 0, 310+yi, 600, 290-yi);

    dibujarLinea(colorcito, 300, 300+yi, 300+xf, 600);
    dibujarLinea(colorcito, 300+yi, 0, 300, 300-xf);
    dibujarLinea(colorcito, yi, 0, 300, xf);
    dibujarLinea(colorcito, yi, 600, 300, 600-xf);

    dibujarLinea(colorcito, 0, (yi+300), xf, 600);//Izquierda-abajo
    dibujarLinea(colorcito, yi, 0, 0, 300-xf);//Izquierda-arriba
    dibujarLinea(colorcito, 300+yi, 0, 600, xf);//Derecha-arriba
    dibujarLinea(colorcito, 300+yi, 600, 600, 600-xf);//Derecha-abajo
  
    dibujarLinea(colorcito, 300, yi, 300+xf, 300);
    dibujarLinea(colorcito, 300+yi, 300, 300, 600-xf);
    dibujarLinea(colorcito, yi, 300, 300, 300+xf);
    dibujarLinea(colorcito, yi, 300, 300, 300-xf);
  }
  dibujarLinea(colorcito, 0,300,600,300);
  dibujarLinea(colorcito, 300,300,300,600);
}

function dibujo3()
{
  lienzo.clearRect(0,0,d.width,d.height);
  var l = 0;
  var yi, xf;
  var colorcito = "red";

  for(l = 0;l < 30; l++)
  {
    yi = 10*l;
    xf = 10*(l + 1);

    dibujarLinea(colorcito, 300, yi, 300+xf, 300);
    dibujarLinea(colorcito, 300+xf, 300, 300, 600-yi);
    dibujarLinea(colorcito, yi, 300, 300, 300+xf);
    dibujarLinea(colorcito, yi, 300, 300, 300-xf);

    if(l<20){
      dibujarLinea(colorcito, 350, 50+yi, 350+xf, 250);
      dibujarLinea(colorcito, 350+xf, 350, 350, 550-yi);
      dibujarLinea(colorcito, 50+yi, 350, 250, 350+xf);
      dibujarLinea(colorcito, 50+yi, 250, 250, 250-xf);

      dibujarLinea(colorcito, 0, (yi+400), xf, 600);//Izquierda-abajo
      dibujarLinea(colorcito, xf, 0, 0, 200-yi);//Izquierda-arriba
      dibujarLinea(colorcito, 400+yi, 0, 600, xf);//Derecha-arriba
      dibujarLinea(colorcito, 400+yi, 600, 600, 600-xf);//Derecha-abajo
    }

    if(l<10){
      dibujarLinea(colorcito, 400, 100+yi, 400+xf, 200);
      dibujarLinea(colorcito, 400+xf, 400, 400, 500-yi);
      dibujarLinea(colorcito, 100+yi, 400, 200, 400+xf);
      dibujarLinea(colorcito, 100+yi, 200, 200, 200-xf);
    }
  }
  dibujarLinea(colorcito, 200,0,200,600);
  dibujarLinea(colorcito, 0,200,600,200);
  dibujarLinea(colorcito, 250,0,250,600);
  dibujarLinea(colorcito, 0,250,600,250);
  dibujarLinea(colorcito, 350,0,350,600);
  dibujarLinea(colorcito, 400,0,400,600);
  dibujarLinea(colorcito, 0,350,600,350);
  dibujarLinea(colorcito, 0,400,600,400);
  dibujarLinea(colorcito, 600,400,0,400);
}

dibujarLinea(colorcito, 1,1,1,599);
dibujarLinea(colorcito, 1,599,599,599);
dibujarLinea(colorcito, 1,1,599,1);
dibujarLinea(colorcito, 599,1,599,599);



