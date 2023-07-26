import { useState } from "react";

import Mensaje from "./Mensaje";
import cerrar from "../img/cerrar.svg";

const Modal = (props) => {
  const { setModal, animarModal, setAnimarModal, guardarGasto } = props;
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [categoria, setCategoria] = useState("");
  const [mensaje, setMensaje] = useState("");
  const ocultarModal = () => {
    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if ([nombre, cantidad, categoria].includes("")) {
      setMensaje("Todos los campos son obligatorios");
      setTimeout(() => {
        setMensaje("");
      }, 3000);
      return;
    }
    guardarGasto({ nombre, cantidad, categoria });
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={cerrar} alt="cerrar modal" onClick={ocultarModal} />
      </div>
      <div>
        <form
          className={`formulario ${animarModal ? "animar" : "cerrar"}`}
          onSubmit={handleSubmit}
        >
          <legend>Nuevo Gasto</legend>
          {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
          <div className="campo">
            <label htmlFor="nombre">Nombre Gasto</label>
            <input
              id="nombre"
              type="text"
              placeholder="Añade el nombre del gasto"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="campo">
            <label htmlFor="cantidad">Cantidad</label>
            <input
              id="cantidad"
              type="number"
              placeholder="Añade la cantidad del gasto"
              value={cantidad}
              onChange={(e) => setCantidad(Number(e.target.value))}
            />
          </div>
          <div className="campo">
            <label htmlFor="categoria">Categoría</label>
            <select
              id="categoria"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            >
              <option value="">-- Seleccione</option>
              <option value="ahorro">Ahorro</option>
              <option value="comida">Comida</option>
              <option value="hogar">Hogar</option>
              <option value="entretenimiento">Entretenimiento</option>
              <option value="salud">Salud</option>
              <option value="suscripciones">Suscripciones</option>
              <option value="varios">Varios</option>
            </select>
          </div>
          <div>
            <input type="submit" value="Añadir Gasto" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
