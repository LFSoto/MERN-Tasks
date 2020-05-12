import React, { Fragment, useContext } from "react";
import Tarea from "./Tarea";

import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

import { CSSTransition, TransitionGroup } from "react-transition-group";

const ListadoTareas = () => {
  //Obtener el state del formulario
  const proyectosContext = useContext(proyectoContext);
  const { proyecto, eliminarProyecto } = proyectosContext;

  //Obtener tareas del context
  const tareasContext = useContext(tareaContext);
  const { tareasproyecto } = tareasContext;

  //Si no hay proyecto seleccionado
  if (!proyecto) return <h2>Seleccione un proyecto</h2>;

  //Array destructuring para extraer el proyecto seleccionado
  const [proyectoActual] = proyecto;

  return (
    <Fragment>
      <h2>Proyecto: {proyectoActual.nombre}</h2>
      <ul className="listado-tareas">
        {tareasproyecto.length === 0 ? (
          <li className="tarea">No hay tareas</li>
        ) : (
          <TransitionGroup>
            {tareasproyecto.map((tarea) => (
              <CSSTransition key={tarea.id} timeout={200} classNames="tarea">
                <Tarea tarea={tarea} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </ul>
      <button
        type="button"
        className="btn btn-eliminar"
        onClick={() => eliminarProyecto(proyectoActual.id)}
      >
        Eliminar Proyecto &times;
      </button>
    </Fragment>
  );
};

export default ListadoTareas;
