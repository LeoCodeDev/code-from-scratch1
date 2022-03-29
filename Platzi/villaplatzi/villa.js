let vp = document.getElementById("villaplatzi");
let papel = vp.getContext("2d");

const teclas      = {LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40};
const fondo       = {URL: "tile.png", LOADOK: false};
const wolf        = {URL: "lobo.png", LOADOK: false, X: 0, Y: 0};
const cow         = {URL: "vaca.png", LOADOK: false, X: [], Y: []};
const pig         = {URL: "cerdo.png", LOADOK: false, X: [], Y: []};
const chiken      = {URL: "pollo.png", LOADOK: false, X: [], Y: []};


fondo.image       = new Image();
fondo.image.src   = fondo.URL;
fondo.image.addEventListener("load", loadcanvas);

wolf.image        = new Image();
wolf.image.src    = wolf.URL;
wolf.image.addEventListener("load", loadWolf);

cow.image         = new Image();
cow.image.src     = cow.URL;
cow.image.addEventListener("load", loadCow);

pig.image         = new Image();
pig.image.src     = pig.URL;
pig.image.addEventListener("load", loadPig);

chiken.image      = new Image();
chiken.image.src  = chiken.URL;
chiken.image.addEventListener("load", loadChiken);

function loadcanvas(){
    fondo.LOADOK = true;
    draw();
}

function loadWolf(){
    wolf.LOADOK = true;
    draw();
}

function loadCow(){
    cow.LOADOK = true;
    draw();
}

function loadPig(){
    pig.LOADOK = true;
    draw();
}

function loadChiken(){
    chiken.LOADOK = true;
    draw();
}


function draw(){
    if(fondo.LOADOK){
        papel.drawImage(fondo.image, 0, 0);
    }
    if(cow.LOADOK){
        for(let v=0; v < cantidadc ; v++){
            let x = (aleatorio (0, 7)*60);
            let y = (aleatorio (0, 7)*60);
            cow.X[v] = x;
            cow.Y[v] = y;
            papel.drawImage(cow.image, x, y);
            console.log(cantidadc);
        }
    }
    if(pig.LOADOK){
        for(let p = 0; p < cantidadp ; p++){
            let x = (aleatorio (0, 7)*60);
            let y = (aleatorio (0, 7)*60);
            pig.X[p] = x;
            pig.Y[p] = y;
            papel.drawImage(pig.image, x, y);
            console.log(cantidadp);
        }
    }
    if(chiken.LOADOK){
        for(let ck = 0; ck < cantidadck ; ck++){
            let x = (aleatorio (0, 7)*60);
            let y = (aleatorio (0, 7)*60);
            chiken.X[ck] = x;
            chiken.Y[ck] = y;
            papel.drawImage(chiken.image, x, y);
            console.log(cantidadck);
        }
    }
    if(wolf.LOADOK){
        papel.drawImage(wolf.image, 150, 200);
    }
}

function reDraw(){
    if(fondo.LOADOK){
        papel.drawImage(fondo.image, 0 , 0);
    }
    if(cow.LOADOK){
        for(v = 0; v < cantidadc; v++){
            papel.drawImage(cow.image, cow.X[v], cow.Y[v]);
        }
    }
    if(pig.LOADOK){
        for(p = 0; p < cantidadc; p++){
            papel.drawImage(pig.image, pig.X[p], pig.Y[p]);
        }
    }
    if(chiken.LOADOK){
        for(ck = 0; ck < cantidadc; ck++){
            papel.drawImage(chiken.image, chiken.X[ck], chiken.Y[ck]);
        }
    }
}

function moveWolf(X,Y){
    papel.drawImage(wolf.image,X,Y);
}

document.addEventListener("keydown", movement);

function movement(k){
    let moveW    = 48;
    switch(k.keyCode){
        case teclas.LEFT:
            reDraw();
            moveWolf(wolf.X, wolf.Y);
            wolf.X = wolf.X - moveW;
            console.log(k);
        break;
        case teclas.UP:
            reDraw();
            moveWolf(wolf.X, wolf.Y);
            wolf.Y = wolf.Y - moveW;
        break;
        case teclas.RIGHT:
            reDraw();
            moveWolf(wolf.X, wolf.Y);
            wolf.X = wolf.X + moveW;
            break;
        case teclas.DOWN:
            reDraw();
            moveWolf(wolf.X, wolf.Y);
            wolf.Y = wolf.Y + moveW;
        break;
        default:
        break;
    }
}

let cantidadc = aleatorio(5, 25);
let cantidadp = aleatorio(5, 25);
let cantidadck = aleatorio(5, 25);
/* let z;

for( let i=0; i<10; i++){
    z = aleatorio(10, 20);
    document.write(z + ", ");

}*/

function aleatorio(min, maxi){
    let resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}