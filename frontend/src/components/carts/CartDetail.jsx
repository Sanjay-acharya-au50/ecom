import React, { useContext } from "react";
import { CartContext } from "../../context/cart_context";

const CartDetail = ({ product }) => {
const {item, addToCart, removeToCart} = useContext(CartContext);


  return (
    <>

    <div className="flex justify-center items-center flex-col border border-black">

    <img src={product.img} className="h-[270px] w-[270px]"/>
      <p className="text-center">${product.price}</p>
      <p className="text-center">{product.cat}</p>
        <div className="p-3 border border-black flex justify-between items-center gap-3">
            <button onClick={()=> removeToCart(product.id)}>-</button>
            <input className="border text-center  block" type="text" value={item[product.id]}/>
            <button onClick={()=> addToCart(product.id)}>+</button>
        </div>
    </div>
   
    </>

  );
};

export default CartDetail;
