import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const Proyecto = ({ proyecto }) => {
  //Obtener el state del formulario
  const proyectosContext = useContext(proyectoContext);
  const { proyectoSeleccionado } = proyectosContext;

  //Obtener del context de tarea
  const tareasContext = useContext(tareaContext);
  const { obtenerTareas } = tareasContext;

  //Funcion para agregar el proyecto actual
  const seleccionarProyecto = (id) => {
    //Fijar el proyecto actual
    proyectoSeleccionado(id);
    //Filtra las tareas segun el id
    obtenerTareas(id);
  };

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => seleccionarProyecto(proyecto.id)}
      >
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;
