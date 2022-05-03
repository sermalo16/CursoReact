import React from 'react';

export default function Formulario(){
    return (
        <form>
            <FormInput/>
            <br/>
            <FormButtonSend/>
        </form>
    )
}

function FormInput(){
    return "soy un input";
}

function FormButtonSend(){
    return "soy un botton";
}