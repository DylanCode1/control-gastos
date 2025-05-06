import React, {useState} from "react";
import "../styles/Formulario.css";

const Formulario = ({ agregarGasto }) => {
  const [descripcion, setDescripcion] = useState("");
  const [cantidad, setCantidad] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!descripcion || !cantidad) return;
    agregarGasto({ descripcion, cantidad: parseFloat(cantidad) });
    setDescripcion("");
    setCantidad("");
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />
      <input
        type="number"
        placeholder="Cantidad"
        value={cantidad}
        onChange={(e) => setCantidad(e.target.value)}
      />
      <button type="submit">Agregar Gasto</button>
    </form>
  );
};

export default Formulario;