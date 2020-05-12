import React, { useContext, useState, useEffect } from "react";

import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const FormTarea = () => {
  //Extraer si un proyecto esta activo
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  //Extraer funcion de tarea
  const tareasContext = useContext(tareaContext);
  const {
    tareaseleccionada,
    errortarea,
    agregarTarea,
    validarTarea,
    obtenerTareas,
    editarTarea,
    limpiarSeleccionada,
  } = tareasContext;

  //Effect que detecta si hay una tarea seleccioada para edicion
  useEffect(() => {
    if (tareaseleccionada !== null) {
      guardarTarea(tareaseleccionada);
    } else {
      guardarTarea({
        nombre: "",
      });
    }
  }, [tareaseleccionada]);

  //State del form
  const [tarea, guardarTarea] = useState({
    nombre: "",
  });

  //Extraer el nombre de la tarea
  const { nombre } = tarea;

  //Si no hay proyecto seleccionado
  if (!proyecto) return null;

  //Array destructuring para extraer el proyecto seleccionado
  const [proyectoActual] = proyecto;

  //Leer los valores del form
  const handleChange = (e) => {
    guardarTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    });
  };

  //Agregar la nueva tarea al proyecto
  const onSubmitTarea = (e) => {
    e.preventDefault();

    //Validar
    if (nombre.trim() === "") {
      validarTarea();
      return;
    }

    //Revisa si es edicion o nueva tarea
    if (tareaseleccionada === null) {
      //Agregar la nueva tarea al state de tareas
      tarea.proyectoId = proyectoActual.id;
      tarea.estado = false;
      agregarTarea(tarea);
    } else {
      //Actualizar la tarea existente
      editarTarea(tarea);
      //Limpia la tarea seleccionada
      limpiarSeleccionada();
    }

    //Obtener y filtar las tareas del proyecto actual
    obtenerTareas(proyectoActual.id);

    //Reiniciar el form
    guardarTarea({
      nombre: "",
    });
  };

  return (
    <div className="formulario">
      <form onSubmit={onSubmitTarea}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Tarea"
            name="nombre"
            value={nombre}
            onChange={handleChange}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value={tareaseleccionada ? "Editar Tarea" : "Agregar Tarea"}
          />
        </div>
      </form>
      {errortarea ? (
        <p className="mensaje error">Debe indicar un nombre para la tarea</p>
      ) : null}
    </div>
  );
};

export default FormTarea;
