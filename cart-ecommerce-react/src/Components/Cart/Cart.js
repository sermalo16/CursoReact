import React, {useState, useEffect} from 'react'
import {Button} from 'react-bootstrap';
import { ReactComponent as CartEmpty} from "../../assets/images/cart-empty.svg";
import { ReactComponent as CartFull} from "../../assets/images/cart-full.svg";
import { ReactComponent as CloseCart} from "../../assets/images/close.svg";
import {ReactComponent as Garbage} from "../../assets/images/garbage.svg";
import {STORAGE_PRODUCT_CART, BASE_PATH} from "../../utils/constants";
import {removeArrayDuplicates, countDuplicatesItemArray, removeItemArray} from "../../utils/arrayFunc";

import "./Cart.scss";

export default function Cart(props) {
    const [cartOpen, setCartOpen] = useState(false);
    const {productsCart, getProductsCart, products}= props;
    const widthCartContent = cartOpen ? 400 : 0;
    const [singleProductCart, setSingleProductCart] = useState([]);
    const [cartTotalPrice, setCartTotalPrice] = useState(0);


    useEffect(() => {
        const allProductsId = removeArrayDuplicates(productsCart);
        setSingleProductCart(allProductsId);
    }, [productsCart]);

    useEffect(() => {
        const productData= [];
        let totalPrice = 0;

        const allProductsId = removeArrayDuplicates(productsCart);
        allProductsId.forEach(productID=>{
            const quantity = countDuplicatesItemArray(productID, productsCart);
            const productValue = {
                id: productID,
                quantity: quantity,
            };
            productData.push(productValue);
        });
        
        if(!products.loading && products.result){
            products.result.forEach(product => {
                productData.forEach(item => {
                    if(product.id == item.id) {
                        const totalValue = product.price * item.quantity;
                        totalPrice = totalPrice + totalValue;
                    }
                })
            })
        }

        setCartTotalPrice(totalPrice);
    },[productsCart, products]);


    const openCart = () =>{
        setCartOpen(true);
        document.body.style.overflow= "hidden";
    };

    const closeCart = () => {
        setCartOpen(false);
        document.body.style.overflow= "scroll";
    };

    const emptyCart = () => {
        localStorage.removeItem(STORAGE_PRODUCT_CART);
        getProductsCart();
    }

    const inreaseQuantity = (id) =>{
        const arrayItemCart = productsCart;
        arrayItemCart.push(id);
        localStorage.setItem(STORAGE_PRODUCT_CART,arrayItemCart);
        getProductsCart();
    }

    const decreaseQuantity = (id) =>{
        const arrayItemCart = productsCart;
        const result =removeItemArray(arrayItemCart, id.toString());
        localStorage.setItem(STORAGE_PRODUCT_CART,result);
        getProductsCart();
    }


  return (
    <>
    <Button variant="link" className="cart">
        {productsCart.length >0 ? (
            <CartFull onClick={openCart}/>
        ):(
            <CartEmpty onClick={openCart}/>
        )}
        
    </Button>
    <div className="cart-content" style={{width: widthCartContent}}>
        <CartContentHeader closeCart={closeCart} emptyCart={emptyCart}/>
        <div className="cart-content-products">
        {singleProductCart.map((idProductsCart, index) => (
            <CartContentProduct 
            key={index} 
            products={products} 
            productsCart={productsCart} 
            idProductsCart={idProductsCart} 
            inreaseQuantity={inreaseQuantity}
            decreaseQuantity={decreaseQuantity}/>
        ))}
        </div>
        <CartContentFooter cartTotalPrice={cartTotalPrice}/>
        
    </div>
    </>
  )
}

function CartContentHeader(props){
    const {closeCart, emptyCart} = props;

    return(
        <div className="cart-content-header">
            <div>
                <CloseCart onClick={closeCart}/>
                <h2>Carrito</h2>
            </div>
            <Button variant="link" onClick={emptyCart} >
                Vaciar
                <Garbage/>
            </Button>
        </div>
    )
}

function CartContentProduct(props){
    const {products: {loading, result}, productsCart, idProductsCart, inreaseQuantity,decreaseQuantity} = props;

    if(!loading && result){
        return result.map((product, index) => {
            if(idProductsCart == product.id){
                //console.log(productsCart);
                const quantity = countDuplicatesItemArray(product.id, productsCart);
                return (
                    <RenderProduct key={index} product={product} quantity={quantity} inreaseQuantity={inreaseQuantity} decreaseQuantity={decreaseQuantity}/>
                )
            }
        })
    }else{
        return null;
    }
}

function RenderProduct(props){
    const { product, quantity, inreaseQuantity, decreaseQuantity  }= props;


    return (
        <div className="cart-content-product">
            <img src={`${BASE_PATH}/${product.image}`} alt={product.name}/>
            <div className="cart-content-product-info">
                <div>
                    <h3>{product.name.substr(0, 25)}....</h3>
                    <p>L. {product.price.toFixed(2)} / ud.</p>
                </div>
                <div>
                <p> En el carrito: {quantity} ud.</p>
                <div>
                    <button onClick={()=>inreaseQuantity(product.id)}>+</button>
                    <button onClick={()=>decreaseQuantity(product.id)}>-</button>
                </div>
            </div>
                
            </div>
            
        </div>
    );
}

function CartContentFooter(props){
    const {cartTotalPrice} = props;

    return(
        <div className="cart-content-footer">
            <div>
                <p>Total aproximado: </p>
                <p>L. {cartTotalPrice.toFixed(2)}</p>
            </div>
            <Button>Pagar</Button>
        </div>
    )
}