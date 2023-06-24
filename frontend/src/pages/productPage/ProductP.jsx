import  {useParams} from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Announcement from "../../components/announcement/Announcement";
import Footer from '../../components/footer/Footer'
import { useState,useEffect, useContext } from "react";
import {popularProducts} from '../../components/data'
import Shop from "./Shop";
import { Link } from "react-router-dom";
import {CartContext} from '../../context/cart_context'

const ProductP = () => {
const {id} = useParams()
const {addToCart} = useContext(CartContext)
// console.log(id);
  const [fetchProduct, setProduct] = useState(popularProducts);
  const [single, setSingle] = useState([]);
  // console.log("single",single);

  const [incDec, setIncDec] = useState(1)
  useEffect(()=>{
    setSingle(fetchProduct[id-1]);
  },[])

  // console.log(single);

  const handleQuantity = (val) => {
    if( val == "dec"){

      incDec > 1 && setIncDec(incDec - 1)
    }else{
      setIncDec(incDec +1)

    }
  }



  return (
    <div>
      <Navbar />
      <Announcement/>
      <Shop data={single}/>
      <div className="md:h-[800px] m-2 border border-black md:flex justify-center items-center">
        <div className="">
          <div className="h-full md:grid grid-cols-2 border sm:flex flex-col justify-center items-center border-black">
            <div className="grid-span-1 border border-black items-center">
              <img
                src={single.img}
                className="sm:h-[300px] md:h-[400px] sm:w-[300px] md:w-[400px]"
              ></img>
            </div>

            <div className="grid-span-1 border border-black">
              <p className="text-[23px] md:text-3xl font-bold p-3 sm:text-center md:text-start">AUTUMN SHIRT</p>

              <p className="p-3 md:text-[21px] text-[15px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, quo!
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, minima. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Eos ad laboriosam aliquid ipsum illum quos.
              </p>

              <p className="p-3 text-3xl md:text-4xl">$ 60</p>
              <div className="p-3 flex  items-center text-[15px]">


              <p className="mr-5 text-[15px] md:text-[20px]">Size</p>
                <select >
              <option > sm </option>
              <option > lg </option>
              <option > xl </option>
                </select>

            </div>

                <div className="flex p-3 border border-black md:justify-start sm:justify-center items-center">
              
                <div className="flex justify-center items-center border border-black p-2">

                <button onClick={()=> handleQuantity("dec")} className="mr-10 text-2xl md:text-3xl">-</button>
                <p className="  text-2xl">{incDec}</p>
                <button onClick={()=> handleQuantity("inc")} className="ml-10 text-2xl md:text-3xl">+</button>


                </div>

                <div className="flex justify-center items-center border border-black m-2  text-[18px] md:text-[20px]">
                
                <button  className="p-[11px]" onClick={()=>addToCart(single.id)}>Add to Cart</button>

                </div>



                </div>


            </div>
          </div>
        </div>
      </div>

        <Footer/>
    </div>
  );
};

export default ProductP;

{/* <Link to='/cart'>

</Link> */}
