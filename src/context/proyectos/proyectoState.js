import React, { useReducer } from "react";

import { v4 as uuidv4 } from "uuid";

import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";

import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTOS,
  VALIDAR_FORMULARIO,
  PROYECTO_SELECCIONADO,
  ELIMINAR_PROYECTO,
} from "../../types/index";

//State inicial del CRUD del proyecto
const ProyectoState = (props) => {
  const proyectos = [
    { id: 1, nombre: "Tienda Virtual" },
    { id: 2, nombre: "Internet" },
    { id: 3, nombre: "Diseno sitio web" },
  ];

  const initialState = {
    proyectos: [],
    formulario: false,
    errorformulario: false,
    proyecto: null,
  };

  //Dispatch para ejecutar las acciones del CRUD
  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  //Serie de funciones para el CRUD
  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO,
    });
  };

  //Obtener los proyectos
  const obtenerProyectos = () => {
    dispatch({ type: OBTENER_PROYECTOS, payload: proyectos });
  };

  //Agregar nuevo proyecto
  const agregarProyecto = (proyecto) => {
    proyecto.id = uuidv4();

    //Insertar el proyecto al state con un dispatch
    dispatch({
      type: AGREGAR_PROYECTOS,
      payload: proyecto,
    });
  };

  //Valida el formulario por errorres
  const mostrarError = () => {
    dispatch({
      type: VALIDAR_FORMULARIO,
    });
  };

  //Seleccionar el proyecto al que le usuario le da click
  const proyectoSeleccionado = (proyectoId) => {
    dispatch({
      type: PROYECTO_SELECCIONADO,
      payload: proyectoId,
    });
  };

  //Elimina un proyecto
  const eliminarProyecto = (proyectoId) => {
    dispatch({
      type: ELIMINAR_PROYECTO,
      payload: proyectoId,
    });
  };

  return (
    <proyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        errorformulario: state.errorformulario,
        proyecto: state.proyecto,
        mostrarFormulario,
        obtenerProyectos,
        agregarProyecto,
        mostrarError,
        proyectoSeleccionado,
        eliminarProyecto,
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
