'use strict'

// SECCION DE LOS QUARY SELECTOR

const btn = document.querySelector('.js_btn');
const userFaceSelect = document.querySelector('.js_userFaceSelect');
const facediv = document.querySelector('.js_facediv');
const body = document.querySelector('body');

// SECCION DE LOS DATOS DE LA APLICACION




//SECCION FUNCIONES

function getRandomNumber(max) { 
    return Math.ceil(Math.random() * max); 
  }

const updateFace = () => {

    //Obtengo el valor de la página
    const newFace = userFaceSelect.value;

    //Pongo el value en el div
    if (newFace=== 'happy'){
        facediv.innerHTML = ':)';
    } 
    else {
        facediv.innerHTML = ':(';
    }  

};

const changeBackground = () => {
    //Generar un número aleatorio entre 0 y 100
    const dato = getRandomNumber (100);
    console.log(dato);

    const esPar = (dato %2)===0;

    if (esPar===true){
        body.classList.remove ('orange');
        body.classList.add ('yellow');

    }
    else {
        body.classList.remove ('yellow');
        body.classList.add ('orange');

    } 

;}


const handleClick  = (ev) => {
    updateFace ();
    changeBackground ();
}


//SECCION DE EVENTOS

btn.addEventListener('click', handleClick);
