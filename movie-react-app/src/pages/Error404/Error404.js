import React from 'react';
import {Link} from "react-router-dom";

import "./Error404.scss";

export default function Error404() {
  return (
    <div className="error404">
      <h1>Error404</h1>
      <h2>Pagina no encontrada!!</h2>
      
      <a href='/'><h3>Volver al inicio</h3></a>
    </div>
  )
}
