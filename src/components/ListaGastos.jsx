import React from "react";
import "../styles/ListaGastos.css";

const ListaGastos = ({ gastos }) => {
  return (
    <ul className="lista-gastos">
      {gastos.map((gasto, index) => (
        <li key={index}>
          {gasto.descripcion} - ${gasto.cantidad.toFixed(2)}
        </li>
      ))}
    </ul>
  );
};

export default ListaGastos;