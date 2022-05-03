import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Saludar from "./components/Saludar/Saludar";
import LayoutBasic from "./components/LayoutBasic";
import ObjectState from "./components/ObjectState";

function App() {

  /*const saludarFn = (name) => {
    console.log("hola serfio" + name);
  };*/

  /*const saludarFn = (nombre, edad) => {
    console.log("hola " + nombre + ", tiene " + edad + " anos.");
    console.log(`hola ${nombre} , tiene ${edad} anos.`);
  };*/

  /*const data = {
    nombre: "sergio",
    apellido: "Morel Lopez", 
    edad: 25,
    ciudad: "SPS"
  }*/

  return (
    <LayoutBasic/>
  );
}

export default App;
