'use strick';

//CREAR VARIABLES
const playBtn = document.querySelector('.js_btn');
const userOptionSelect = document.querySelector('.js_select');
const resultText = document.querySelector('.js_jugar-text');

const jugadora = document.querySelector('.js_jugador');
const computadora = document.querySelector('.js_computadora');


//Marcadores
let userScore= 0;
let computerScore=0;


//SECCION DE FUNCIONES
function getRandomNumber(max) { 
    return Math.ceil(Math.random() * max); 
}




//SECCION EVENTOS

playBtn.addEventListener('click', (ev) => {
    ev.preventDefault();
    

    //generar un número random

    const randomNumber = getRandomNumber (9);
    console.log (randomNumber);

    //Registrar lo que la computadora ha generado
   let computerMove = '';

   if (randomNumber >= 1 && randomNumber <= 3) {
    computerMove = 'piedra';
    } else if (randomNumber >= 4 && randomNumber <= 6) {
    computerMove = 'papel';
    } else if (randomNumber >= 7 && randomNumber <= 9) {
    computerMove = 'tijera';
    }


    //Registrar lo que la usuaria ha escogido

    const userMove =userOptionSelect.value;

    //Comparar la jugada de la computadora y la jugada de la usuaria
    console.log (userMove);

    if (userMove === computerMove) {
        //EMPATE!!
        resultText.innerHTML = 'Empate';
    }
    else if ( 
            (userMove === 'Tijera' && computerMove === 'papel') ||
            (userMove=== 'papel' && computerMove === 'piedra') ||
            (userMove === 'piedra' && computerMove=== 'Tijera')){
        //Usuaria Gana
        resultText.innerHTML = 'Has ganado';

    }
    else {
        //Computadora gana

        resultText.innerHTML ='Has perdido';
    }

    //Decir quien ha ganado o si han empatado


});

// CÓDIGO QUE SE EJECUTA AL CARGAR LA PÁGINA

    jugadora.innerHTML = `Usuaria: 0`;
    computadora.innerHTML = `Computadora:0`;
