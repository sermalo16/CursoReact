import React, {useState} from 'react'
import {Button} from 'react-bootstrap';
import { ReactComponent as CartEmpty} from "../../assets/images/cart-empty.svg";

import "./Cart.scss";

export default function Cart() {
  return (
    <>
    <Button variant="link" className="cart"><CartEmpty/></Button>
    <div className="cart-content">
        Todos miss productos
    </div>
    </>
  )
}