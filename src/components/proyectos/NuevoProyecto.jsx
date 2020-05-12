import React, { Fragment, useState, useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const NuevoProyecto = () => {
  //Obtener el state del formulario
  const proyectosContext = useContext(proyectoContext);
  const {
    formulario,
    mostrarFormulario,
    errorformulario,
    agregarProyecto,
    mostrarError,
  } = proyectosContext;

  //State para proyecto
  const [proyecto, guardarProyecto] = useState({
    nombre: "",
  });

  //Extraer nombre de proyecto
  const { nombre } = proyecto;

  //Lee los contenidos del input
  const onChangeProyecto = (e) => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  //Cuando el usuario envia un proyecto
  const onSubmitProyeto = (e) => {
    e.preventDefault();
    //Validar el proyecto
    if (nombre === "") {
      mostrarError();
      return;
    }

    //Agregar el state
    agregarProyecto(proyecto);

    //Reiniciar el form
    guardarProyecto({
      nombre: "",
    });
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={() => mostrarFormulario()}
      >
        Nuevo Proyecto
      </button>
      {formulario ? (
        <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProyeto}>
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Proyecto"
            name="nombre"
            onChange={onChangeProyecto}
            value={nombre}
          />
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Agregar proyecto"
          />
        </form>
      ) : null}

      {errorformulario ? (
        <p className="mensaje error">Indique un nombre para el proyecto</p>
      ) : null}
    </Fragment>
  );
};

export default NuevoProyecto;
