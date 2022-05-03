import React from "react";
import PropTypes from "prop-types";

export default function Saludar(props) {
  const {data : {nombre, apellido,edad, cuidad}} = props;
  return (
    <div>
      <p className="nombre">lorem Ips</p>
      <button >Saludar</button>
    </div>
  );
}

Saludar.prototype ={
  userInfo: PropTypes.string.isRequired, // Protypes es para hacer validaciones
  saludarFn: PropTypes.func
}
