let imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";
imagenes["Aullador"] = "lobo.png";

class Pakiman{
    constructor(n, v, a){
        this.imagen = new Image();
        this.nombre = n;
        this.vida = v;
        this.ataque = a;
        this.imagen.src = imagenes[this.nombre];
    }
    hablar(){
        alert(this.nombre);
    }
    mostrar(){
        document.body.appendChild(this.imagen);
        document.write("<br><p><strong>" + this.nombre + "</strong><br>");
        document.write("Vida: " + this.vida + "<br>");
        document.write("Ataque: " + this.ataque + "</p><hr>");
    }
}

let cauchin = new Pakiman("Cauchin", 100, 30);
let pokacho = new Pakiman("Pokacho", 80, 50);
let tocinauro = new Pakiman("Tocinauro", 120, 40);
let aullador = new Pakiman("Aullador", 150, 90);

let consulta = document.getElementById("nombrePakiman");
pokacho.mostrar();
cauchin.mostrar();
tocinauro.mostrar();
