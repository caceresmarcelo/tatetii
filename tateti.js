const x = "X";
const o = "O";
let estadojuego ="P1";



const cuadrados = document.querySelectorAll(".cuadrado");

cuadrados.forEach((cuadrado,i)=> {
   cuadrado.addEventListener("click", () => {
      if(estadojuego === "PAUSA") return;
      cuadrado.innerText =x;
      cuadrado.innerText=estadojuego === "P1" ? x : o;
      estadojuego = estadojuego === "P1" ? "P2": "P1";
      const posicionGanadora =  revisarsihayganador();
      if(typeof posicionGanadora === Object){
          ganar(posicionGanadora);
          return

      }

      if(posicionGanadora === "empate"){
        console.log("EMPATE")
      }

    })

})


function revisarsihayganador(){
 const tablero = Array.from(cuadrados).map(cuadrado =>cuadrado.textContent);
 console.log(tablero)


// revisar horizontales
for(let i = 0; i <= 9; i += 3) {
    if( tablero[i] &&
        tablero[i] === tablero[i+1] &&
        tablero[i] === tablero[i+2] ){
          return ganar ([i,i+1,i+2]);
  }
}
//verticales
for(let i = 0; i <= 3; i ++) {
     if( tablero[i] &&
         tablero[i] === tablero[i+3] &&
          tablero[i] === tablero[i+6] ){
           return ganar ([i,i+3,i+6]);
  }

}

//revisaroblicuas
if( tablero[0] &&
    tablero[0] === tablero[4] &&
    tablero[0] === tablero[8] ){
       return ganar([0,4,8]);
  }

  if( tablero[2] &&
      tablero[2] === tablero[4] &&
      tablero[2] === tablero[6] ){
         return ganar ([2,4,6]);
  }

  if(tablero.includes("")) return false;
  return "empate";
 
}


function ganar(posicionGanadora){
  console.log("ganador",posicionGanadora);
  estadojuego ="PAUSA";
  posicionGanadora.forEach(posicion => {
      cuadrados[posicion].classList.toggle("ganador",true);
  })

}