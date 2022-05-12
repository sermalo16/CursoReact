import React, {useEffect, useState} from 'react';
import TopMenu from "./Components/TopMenu";
import Products from "./Components/Products";
import useFetch from "./hooks/useFetch";
import  {urlApiProducts, STORAGE_PRODUCT_CART} from "./utils/constants";
import { ToastContainer, toast} from "react-toastify";

function App() {
  const products = useFetch(urlApiProducts, null);
  const [ productsCart, setProductsCart] = useState([]);


  useEffect(() => {
    getProductsCart();
  }, []);


  const getProductsCart = () => {
    const idsProducts = localStorage.getItem(STORAGE_PRODUCT_CART);

    if(idsProducts){
      const idsProductsSplit = idsProducts.split(",");
      setProductsCart(idsProductsSplit);
    }else{
      setProductsCart([]);
    }
  };

  const addProductCart = (id, name) =>{
    const idsProducts= productsCart;
    idsProducts.push(id);
    setProductsCart(idsProducts);

    localStorage.setItem(STORAGE_PRODUCT_CART, productsCart);
    getProductsCart();
    toast.success(`${name} agregado al carrito correctamente`);
  }

  return (
    <div className="App">
      <TopMenu productsCart={productsCart} getProductsCart={getProductsCart} products={products} />
      <Products products={products} addProductCart={addProductCart}/>
      <ToastContainer
      position="bottom-left"
      autoClose={5000}
      hideProgressBar
      newestOnTop
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover={false}
      />
      
    </div>
  );
}

export default App;
