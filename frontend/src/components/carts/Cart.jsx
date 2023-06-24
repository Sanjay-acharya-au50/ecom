import React, { useContext } from "react";
import Navbar from "../../components/navbar/Navbar";
import Announcement from "../../components/announcement/Announcement";
import { popularProducts } from "../data";
import { CartContext } from "../../context/cart_context";
import CartDetail from "./CartDetail";

const Cart = () => {
  const { item , getTotal} = useContext(CartContext);
  const totalAmount = getTotal()
  console.log(totalAmount);
  return (
    <div>
      <Navbar />
      <Announcement />
      <p className="text-center">Your Bag</p>
      {popularProducts.map((product) => {
        if (item[product.id] !== 0) {
          return <CartDetail product={product} />;
        }
      })}
      <div className='text-[30px] text-bold p-2 border border-black text-center'>
        <p>Total Price: ${totalAmount}</p>
        <button className='bg-black text-white p-2 rounded' >Checkout</button>
      </div>

      {/* <div className="md:grid grid-cols-3 border border-black">
        <div className="col-span-2 border border-black">

          <div className="p-2 md:p-5 border border-black grid grid-cols-4 m-1">
            <div className="col-span-1 flex justify-center items-center border border-black ">
              <img
                src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png"
                className="md:h-[150px] md:w-[150px]"
              ></img>
            </div>
            <div className="col-span-2  border border-black flex justify-center  flex-col">
              <p className="p-2">Product : 09098760</p>
              <p className="p-2">Size : XL</p>
            </div>
            <div className="col-span-1  border border-black flex justify-center items-center flex-col">
              <div className="flex justify-center items-center border border-black p-2">
                <p className="text-xl md:text-2xl mr-2 md:mr-5">-</p>
                <p className="  text-xl md:text-2xl">2</p>
                <p className="text-xl md:text-2xl ml-2 md:ml-5">+</p>
              </div>
              <p className="text-center text-xl md:text-3xl ">$ 60</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 border border-black text-center">
          <div className="m-2 p-2 sticky top-[80px] h-[500px] border border-black">
            <p className="text-2xl md:text-3xl">ORDER SUMMARY</p>
            <div className="flex justify-between  items-center mt-10 mb-5 text-[20px] border border-black">
              <div className="border border-black text-left text-xl" >
                <div>Subtotal</div>
                <div>Estimated Shipping</div>
                <div>Shipping Discount</div>
                <div>Total</div>
              </div>
              <div className="border border-black text-end flex flex-col items-center" >
                <div>99</div>
                <div>88</div>
                <div>77</div>
                <div>100</div>
              </div>
            </div>
            <button className="bg-[black] text-white p-2 rounded w-full">Checkout Now</button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Cart;
// {    console.log("product id",product.id)
// console.log("item",item[product.id])}
