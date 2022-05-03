import React, { useState, useEffect } from 'react'

export default function ObjectState() {
    const [carState, setCarState] = useState({
        started: false,
        countKm: 0,
    });

    const checkCarState = () =>{
        if(carState.started){
            return <span style={{color: 'green'}}>Encendido</span>
        }else{
            return <span style={{color: 'red'}}>Apagado</span>
        }
    
    }


    const countKmSum = (num) =>{
        if(carState.started){
            setCarState({
                ...carState,
                countKm: carState.countKm + num
            })
        }else{
            alert("El coche esta apagado");
        }
    }


  return (
    <div>
      <h1>El auto est encendido: {checkCarState()}</h1>
            <h1>Kilometros recorridos: {carState.countKm} km</h1>
            <button onClick={()=> {setCarState({...carState, started: !carState.started})}}>Enceder/Apagar</button>
            <button onClick={()=>{countKmSum(5)}}>Incrementar Kilometros</button>
    </div>
  )
}
