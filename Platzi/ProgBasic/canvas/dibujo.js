/* Variables para captrar los datos del usuario */
let texto = document.getElementById("texto_lineas");
let boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

/* Variables para el dibujo en Canvas */
let d = document.getElementById("dibujito");
let lienzo = d.getContext("2d");
let ancho = d.width;


/* for(l = 0 ; l < lineas; l++){
    yi = 10 * l;
    xi = 10 * (l + 1);
    vi = 150 - (l * 10);
    zi = 350 + (l * 10);
    dibujarlinea("orange",250,0,0,yi);
    dibujarlinea("orange",250,0,500,yi);
    dibujarlinea("orange",0,150,yi,500);
    dibujarlinea("orange",500,150,yi,500);
    dibujarlinea("orange",0,150,vi,0)
    dibujarlinea("orange",0,150,500,vi)
    dibujarlinea("orange",500,150,0,vi)
    dibujarlinea("orange",500,150,zi,0)
        console.log("linea " + vi)
}
dibujarlinea("orange",0,0,500,500);
dibujarlinea("orange",500,0,0,500);
dibujarlinea("orange",0,250,500,250);
dibujarlinea("orange",250,0,250,500); */


function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
/* Funcion del boton */
function dibujoPorClick(){
    let lineas = parseInt(texto.value);
    let espacio = ancho / lineas;
    let l = 0;
    let yi, xf, vi;
    for(l = 0; l < lineas; l++){
        yi = espacio * l;
        xi = espacio * (l + 1);
        viz = 500 - (l * espacio);
        dibujarlinea("orange",0,xi,yi,500);
        dibujarlinea("orange",500,xi,yi,0);
        dibujarlinea("orange",xi,500,500,viz);
        dibujarlinea("orange",0,viz,xi,0);
    }
}