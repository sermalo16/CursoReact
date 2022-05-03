import React, { useState, useEffect } from 'react';

export default function LayoutBasic(){

    const [started, setSarted] = useState(false);
    const [coutnKm, setCountKm] = useState(0);

    useEffect(() =>{
        document.title = `Coche ${started}`
        
    }, [started])

    const checkButton = () =>{
        if(started){
            return <span style={{color: 'green'}}>Encendido</span>
        }else{
            return <span style={{color: 'red'}}>Apagado</span>
        }
    
    }

    const countKmSum = (num) =>{
        if(started){
            setCountKm(coutnKm+num);
        }else{
            alert("El coche esta apagado");
        }
    }
    return (
        <div>
            <h1>El auto est encendido: {checkButton()}</h1>
            <h1>Kilometros recorridos: {coutnKm} km</h1>
            <button onClick={()=> {setSarted(!started)}}>Enceder/Apagar</button>
            <button onClick={()=>{countKmSum(5)}}>Incrementar Kilometros</button>
        </div>
    )
}