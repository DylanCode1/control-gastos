import React from "react";
import "../styles/TotalGasto.css";

const TotalGasto = ({ gastos }) => {
  const total = gastos.reduce((acc, gasto) => acc + gasto.cantidad, 0);

  return (
    <div className="total-gasto">
      <h2>Total: ${total.toFixed(2)}</h2>
    </div>
  );
};

export default TotalGasto;