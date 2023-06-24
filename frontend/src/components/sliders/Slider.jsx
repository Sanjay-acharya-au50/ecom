import React from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import {sliderItems} from '../../components/data'
import { useState } from "react";
import './sliders.css'

const Slider = () => {

const [data, setData] = useState(0);


// left swipe cart
const handleLeft = () => {

  // const newLeft = data === 0;
  // const left = newLeft ?  sliderItems.length-1 : data -1;
  // setData(left);
  // if left side is zero and i will make it as sliderItem.length -1 otherwise i wiil make minus (-) with current index (data)
  setData(data == 0 ?  sliderItems.length-1 : data-1);

  };

// right swipe cart
const handleRight = () => {
  // const firstRight = data === sliderItems-1;
  // const right = firstRight ? 0 : data + 1;
  // setData(right);

  // if data equals to sliderItems.length-1 i ll make it as 0 otherwise i ll make current index + 1 (data+1)
  setData(data == sliderItems.length-1 ? 0 : data+1)
}


  // console.log(sliderItems);
  return (
    <div className="w-full h-[700px] border border-black mt-1 flex justify-center items-center "
    >
      <button onClick={handleLeft} className="text-4xl">
        <AiFillCaretLeft />
      </button>

      <div className="p-2 text-center md:text-start md:h-[500px]  md:w-[90%] border border-black flex flex-col md:flex-row justify-around items-center shadow-2xl"
      
      >
      <img src={sliderItems[data].img} className='h-[350px] md:h-[400] w-[250px] md:w-[240px]' alt='lod'/> 
        <div>
        <p className="cardContent text-3xl font-bold">{sliderItems[data].title}</p>
        <p className="cardContent font-bold">{sliderItems[data].desc}</p>

        </div>

      </div>
      <button onClick={handleRight} className="text-4xl">
        <AiFillCaretRight />
      </button>
    </div>
  );
};

export default Slider;
