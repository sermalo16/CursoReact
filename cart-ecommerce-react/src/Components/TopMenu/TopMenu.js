import React from 'react';
import { Container, Navbar, Nav } from "react-bootstrap";
import Cart from "../Cart";
import { ReactComponent as Logo} from "../../assets/images/logo.svg";


import "./TopMenu.scss";

export default function TopMenu(props) {
    const {productsCart, getProductsCart, products} = props;

  return (
      <Navbar bg="dark" variant="dark" className="top-menu">
          <Container>
              {/* Logo */}
            <BrandNav/>


            {/*<MenuNav/>*/}
            

            {/* Carrit */}
            <Cart productsCart={productsCart} getProductsCart={getProductsCart} products={products}/>
          </Container>
      </Navbar>
  )
}


function BrandNav(){
    return(
        <>
        <Navbar.Brand>
            <Logo/>
            <h2>La casa de los helados</h2>
        </Navbar.Brand>
        </>
    );
}


function MenuNav(){
    return(
        <Nav className="mr-auto">
            <Nav.Link href="#">Aperitivos</Nav.Link>
            <Nav.Link href="#">helados</Nav.Link>
            <Nav.Link href="#">Mascotas</Nav.Link>
        </Nav>
    )
}