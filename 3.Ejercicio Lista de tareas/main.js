'use strict'

//SECCION DE VARIABLES
const taskAreaInput = document.querySelector('.js_task-area');
const addBtn = document.querySelector('.js_addbtn');
const taskUl = document.querySelector('.js_task-ul');

const addTask = document.querySelector('.js_task-area');
const taskList = document.querySelector('.js_task-list');

//ARRAYS

const tascVks = [
    { name: "Recoger setas en el campo", completed: true, id: 1 },
    { name: "Comprar pilas", completed: true, id: 2 },
    { name: "Poner una lavadora de blancos", completed: true, id: 3 },
    {
      name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
      completed: false,
      id: 4,
    },
];



//SECCION DE FUNCIONES --> Se añaden instrucciones  (Instr.1, instr.2,... se añaden tambien condicionales si se necesitam etc...)
//las funciones sirven para agrupar código y hacerlo todo más sencillo. Hace que el código esté mejor estructurado
// FUNCIÓN PARA MOSTRAR TAREAS
const renderTasks = () => {
    // Limpiar el listado antes de renderizar
    taskUl.innerHTML = '';
  
    // Recorrer las tareas y generar el HTML
    for (const task of tascVks) {
      const taskHTML = `
        <li class= "task-list">
          
          <input class="js_task-input task" type="checkbox" ${task.completed ? 'checked' : ''}>
           <label class="js_tasks task">${task.name}</label> 
        </li>

        
      `;
      taskUl.innerHTML += taskHTML;
    }
  };
  


const handleClick = (ev) => {
    ev.preventDefault();
    //Recoger nombre de la tarea--> Escribir la tarea en el Input
    const taskArea=taskAreaInput.value;
    console.log('funciona');

    //montamos el obj
    taskUl.innerHTML+=`<li class="task-list">
    <input class="js_task-input task" type="checkbox" id="task">
    <label >${taskArea}</label> 
    </li>`   
}


// SECCION DE EVENTOS

    //generar evento click para agregar una tarea
    addBtn.addEventListener('click', handleClick);




    // Registrar la tarea para agregarla a la lista


    //generar un evento click para buscar la tarea y que aparezca solo la tarea cuando se busca el nombre

    //Reiniciar página cuando se rgistra solo el nombre

    //Tachar tarea cuando se selccione el input del checkbox



// CÓDIGO QUE SE EJECUTA AL CARGAR LA PÁGINA

renderTasks();
