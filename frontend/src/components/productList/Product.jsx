import React, {useState} from "react";
import { popularProducts } from "../data";
import Image from "../Image";

const Product = () => {

  const [item, setItem] = useState(popularProducts);
  // console.log(item);

  const productFilter = (e) => {
    console.log("e:", e);
    const copyProduct = popularProducts.filter((elem)=>{
      return elem.cat === e;
    });
    console.log("copyPr :", copyProduct);
    setItem(copyProduct)
    }

  
  

  return (
    <div className="p-2 md:p-20 border flex justify-center flex-col border-black w-full ">
      <div className="h-[100px] border border-black mt-3 flex justify-around items-center">
        <button onClick={(e)=>{setItem(popularProducts)}}  className="h-[80px] w-[200px] border border-black m-2 rounded-3xl flex justify-center items-center shadow-2xl">All</button>
        <button onClick={(e)=>{productFilter("Men")}}  className="h-[80px] w-[200px] sm:border border-black m-2 rounded-3xl flex justify-center items-center shadow-2xl">Men</button>
        <button onClick={(e)=>{productFilter("Women")}}  className="h-[80px] w-[200px] border border-black m-2 rounded-3xl flex justify-center items-center shadow-2xl">Women</button>
        <button onClick={(e)=>{productFilter("Kid")}}  className="h-[80px] w-[200px] border border-black m-2 rounded-3xl flex justify-center items-center shadow-2xl">Kid</button>
      </div>

      <div className="p-2 border border-black m-2 sm:flex justify-center items-center flex-col md:grid grid-cols-3">
        {item.map((item, id) => {
          return (

              <div 
                className=" sm:border border-black m-2 shadow-2xl flex justify-center items-center"
               key={id}>
                  <Image data={item}/>
              </div>

          );
        })}
      </div>
    </div>
  );
};

export default Product;
