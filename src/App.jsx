import React, { useState } from "react";
import Formulario from "./components/Formulario";
import ListaGastos from "./components/ListaGastos";
import TotalGasto from "./components/TotalGasto";
import "./styles/App.css";

const App = () => {
  const [gastos, setGastos] = useState([]);

  const agregarGasto = (gasto) => {
    setGastos([...gastos, gasto]);
  };

  return (
    <div className="app">
      <h1>Control de Gastos</h1>
      <Formulario agregarGasto={agregarGasto} />
      <ListaGastos gastos={gastos} />
      <TotalGasto gastos={gastos} />
    </div>
  );
};

export default App;