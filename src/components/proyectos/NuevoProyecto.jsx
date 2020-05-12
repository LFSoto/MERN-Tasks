import React, { Fragment, useState } from "react";

const NuevoProyecto = () => {
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

    //Agregar el state

    //Reiniciar el form
    if (nombre.trim() === "") {
    }
  };

  return (
    <Fragment>
      <button type="button" className="btn btn-block btn-primario">
        Nuevo Proyecto
      </button>
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
    </Fragment>
  );
};

export default NuevoProyecto;
