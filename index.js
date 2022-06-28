 /*CUPOS para inscripcion*/
/* 
let cupoMax = parseInt(prompt("ingrese cupo maximo para anotarse"));

for (let i = 0; i < cupoMax; i++) {
    let nombre = prompt("Ingrese  su nombre");
    let mensaje = `Usted ${nombre} esta inscripto `;
    alert(mensaje)   
}
alert("No hay mas cupo disponible"); 

 */



//Se desea hacer un sorteo entre 3 participantes//

let A = 0;
let B = 0;
let C = 0;

do {

    A= 0;
    B= 0;
    C= 0;

  for (let i = 0; i < 6; i++) {
    
    let votos = prompt("ingrese a quien desea votar Maximo(M), German(G) o Seba(S) ").toLowerCase();

    if (votos == "m"){

        A++;

    }

    else if  (votos == "g") {

         B++;

    }

    else if (votos === "s"){
     C++;}

    else {

        alert("no eligio una opcion correcta"); i--}

  }  

  alert(`los votos de Maximo son ${A}, los votos de German son ${B} y seba ${C}`)



  if (A>B && A>C){

    alert("El ganador es Maximo");
    

}

else if (B>A && B>C) {

    alert("El ganador es German")
    

}

else if (C>B && C>A) {alert("El ganador es seba")
}

else  alert("EMPATE se debe repetir la votacion")
   

}

while(A===B && A===C || B===A && C<=A || C===A && B<=A || B===C && A<=C );





//Si elige el numero 7 es ganador//

/*  let nombre = prompt("Ingrese su nombre").toLocaleUpperCase();
let numero = parseInt(prompt("Ingrese un numero"))

for (let i = 0; i < 10 ; i++) {
   
while (numero != 7) {
    alert(`el numero ${numero} no es ganador`);
    numero = prompt("ingrese otro numero")
    
    }
    
    document.write(`${nombre}  has acertado!!!`);
    break;
}


let destino = prompt("ingrese a donde desea ir desde Mar del Plata");

switch(destino)
    case "buenos aires":
        console.log("son 415 km y 4.13 horas");
        break;

        case "cordoba":
        console.log("son 1151 km y 11.37 horas");
        break;

        case "mendoza":
        console.log("son 1372 km y 15.39 horas");
        break;
        
        
        default: 
        console.log("no se dispone de esa informacion");
}  */


