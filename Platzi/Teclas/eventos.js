const teclas = { LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40};
const colores = {ROJO: "red", AZUL: "blue", NEGRO: "black", VERDE: "green"};

document.addEventListener("keydown", dibujarTeclado);
let cuadrito = document.getElementById("dibujito");
let papel = cuadrito.getContext("2d");
let x = 250;
let y = 250;

let botonR = document.getElementById("botonRojo");
let botonN = document.getElementById("botonNegro");
let botonA = document.getElementById("botonAzul");
let botonV = document.getElementById("botonGreen");
let color = "blue"

botonR.addEventListener("click", () => color = colores.ROJO);
botonA.addEventListener("click", () => color = colores.AZUL);
botonN.addEventListener("click", () => color = colores.NEGRO);
botonV.addEventListener("click", () => color = colores.VERDE);


dibujarlinea(x-5, y, x+5, y);
dibujarlinea(x, y-5, x, y+5);


function dibujarlinea(xinicial, yinicial, xfinal, yfinal){
    papel.beginPath();
    papel.strokeStyle = color;
    papel.moveTo(xinicial, yinicial);
    papel.lineTo(xfinal, yfinal);
    papel.stroke();
    papel.closePath();
}


function dibujarTeclado(evento){
    let movimiento = 10;
    
    /*  if(evento.keyCode == teclas.LEFT){
    }
    if(evento.keyCode == teclas.UP){
    }
    if(evento.keyCode == teclas.RIGHT){
    }
    if(evento.keyCode == teclas.DOWN){
    } */
    
    switch(evento.keyCode){
        case teclas.LEFT:
            dibujarlinea(x, y, x - movimiento, y);
            x = x - movimiento;
        break;
        case teclas.UP:
            dibujarlinea(x, y, x, y - movimiento);
            y = y - movimiento;
        break;
        case teclas.RIGHT:
            dibujarlinea(x, y, x + movimiento, y);
            x = x + movimiento;
            break;
            case teclas.DOWN:
                dibujarlinea(x, y, x, y + movimiento);
            y = y + movimiento;
        break;
        default:
        break;
    }
}

//Ejercicio de Dibujar con el Mouse

cuadrito.addEventListener("mousedown", canvasInDown);
cuadrito.addEventListener("mouseup", canvasInUp);

function canvasInUp(i){
    let xmousef = i.offsetX;
    let ymousef = i.offsetY;
    drawLineMouse(xinicio, yinicio, xmousef, ymousef);
}

function canvasInDown(MouseEvent){
    xinicio = MouseEvent.offsetX;
    yinicio = MouseEvent.offsetY;
}


function drawLineMouse(xinicialmouse, yinicialmouse, xfinalmouse, yfinalmouse){
    papel.beginPath();
    papel.strokeStyle = color;
    papel.moveTo(xinicialmouse, yinicialmouse);
    papel.lineTo(xfinalmouse, yfinalmouse);
    papel.stroke();
    papel.closePath()
}
