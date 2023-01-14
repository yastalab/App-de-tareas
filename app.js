/* -------- DESAFIO 1 -------- */

const tareas = [
  {
    Titulo: "Realizar HTML",
    Estado: "Finalizado",
  },
  {
    Titulo: "Diseñar CSS",
    Estado: "En curso",
  },
  {
    Titulo: "Ejecutar JS",
    Estado: "En progreso",
  },
];

console.log(tareas);

/* -------- DESAFIO 2 -------- */

function agregarTareas (titulo, estado) {
    tareas.push ({Titulo: titulo, Estado: estado});
    return tareas
}
console.log (agregarTareas("Diseño UI/UX", "Pendiente"));

const mostrarTarea = (estado) => {
}

const progress = tareas.find ((obj) => {
console.log(obj)
tareas.Estado === "En curso"

})

console.log (progress ("En curso"))

// /* -------- DESAFIO 3 -------- */

const listarTareas = (estado) => {
const estadoMin = estado.toLowerCase()
    if (estadoMin === "en curso" || estadoMin === "en progreso" || estadoMin === "finalizado") {
        const listadoTareas = tareas.filter(tarea => tarea.Estado.toLowerCase() === estadoMin);
        return listadoTareas;

    } 
    return tareas;
    
}

console.log(listarTareas("En progreso"))

// /* -------- DESAFIO 4 -------- */

const variarDesafioDos = (titulo, estado) => {
  if (
    titulo === "Realizar HTML" ||
    titulo === "Diseñar CSS" ||
    titulo === "Ejecutar JS" ||
    titulo === "Diseño UI/UX"
  ) {
    return ("Ya existe")
  } else {
    
   tareas.push({ Titulo: titulo, Estado: estado });
    console.log(tareas);
  }
};

console.log(variarDesafioDos("Leer un libro", "Finalizado"));



/* -------- DESAFIO 5 -------- */

const filtrarTarea = (texto) => {
  if (texto != "") {
      filtrar = tareas.filter(tarea => tarea.Titulo.includes(texto));
      if (filtrar.length > 0) {
          return filtrar;
      }
      else {
          return "No Existe..."
      }
  } else {
      return "No Existe...";
  }
}

console.log(filtrarTarea("UI"));