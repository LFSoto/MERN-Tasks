import React, { useReducer } from "react";
import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";

//State inicial del CRUD del proyecto
const proyectoState = (props) => {
  const initialState = {
    nuevoProyecto: false,
  };

  //Dispatch para ejecutar las acciones del CRUD
  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  //Serie de funciones para el CRUD

  return (
    <proyectoContext.Provider value={{ nuevo: state.nuevoProyecto }}>
      {props.children}
    </proyectoContext.Provider>
  );
};
