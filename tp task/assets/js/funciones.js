let task = [];

function agregarTarea() {
    let nuevaTarea = prompt("Ingrese Nueva Tarea");
    let soloLetras = /^[a-zA-Z\s]+$/;

    if (nuevaTarea !== null && nuevaTarea.trim() !== "" && soloLetras.test(nuevaTarea.trim())) {
        task.push(nuevaTarea.trim());
        alert("Tarea Nueva: \n" + task.join("\n"));
    } else {
        alert("La tarea ingresada no es válida. Por favor, ingrese una tarea real que contenga solo letras.");
    }
}

function listarTareas() {
    if (task.length === 0) {
        alert("No hay tareas");
    } else {
        alert("Listado de Tareas: \n" + task.join("\n"));
    }
}

function editarTarea() {
    if (task.length) {
        let opciones = parseInt(prompt("Ingrese el número de la tarea que desea editar (1 a " + task.length + "): ")) - 1;
        if (opciones >= 0 && opciones < task.length) {
            let nuevaTarea = prompt("Ingrese la nueva tarea");
            let soloLetras = /^[a-zA-Z\s]+$/;

            if (nuevaTarea !== null && nuevaTarea.trim() !== "" && soloLetras.test(nuevaTarea.trim())) {
                task[opciones] = nuevaTarea.trim();
                alert("Tarea editada: \n" + task.join("\n"));
            } else {
                alert("La tarea ingresada no es válida. Por favor, ingrese una tarea real que contenga solo letras.");
            }
        } else {
            alert("Número de tarea no válido.");
        }
    } else {
        alert("No hay tareas para editar.");
    }
}


while (true) {
    let opcionIngresada = prompt("Ingrese una de las opciones \n 1 Agregar Tarea \n 2 Listar Tareas \n 3 Editar Tarea \n 4 Eliminar Tarea \n 5 Salir");

    if (isNaN(opcionIngresada) || opcionIngresada === "") {
        alert("Entrada no válida. Ingrese un número entre 1 y 5.");
        continue;
    }

    let opcion = parseInt(opcionIngresada);

    switch(opcion) {
        case 1:
            agregarTarea();
            break;
        case 2:
            listarTareas();
            break;
        case 3:
            editarTarea();
            break;
        case 5:
            alert("Saliendo del programa");
            break;
        default:
            alert("Opción no válida");
    }

    if (opcion === 5) {
        break; 
    }
}
