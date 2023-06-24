import React, {useState}from 'react'

import {sliderItems as slides} from './data'



// const slides = [
//     {
//       id: 1,
//       img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//       title: "SUMMER SALE",
//       desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
//       bg: "f5fafd",
//     },
//     {
//       id: 2,
//       img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",

//       title: "AUTUMN COLLECTION",
//       desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
//       bg: "fcf1ed",
//     },
//     {
//       id: 3,
//       img: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",

//       title: "LOUNGEWEAR LOVE",
//       desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
//       bg: "fbf0f4",
//     },
//   ];





const Cards = () => {

    const [currentSlide, setCurrentSlide] = useState(0);


    // const slides = ['Slide 1', 'Slide 2', 'Slide 3']; // Example slide data
    // const slideToShow = slides[currentSlide];
  

    // const goToPrevSlide = () => {
    //   setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    // };
  
    // const goToNextSlide = () => {
    //   setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    // };

    const prevSlide = () => {
        const firstSlide = currentSlide === 0;
        const newIndex = firstSlide ? slides.length - 1 : currentSlide -1;
        setCurrentSlide(newIndex)
    }
    const nextSlide = () => {
        const lastSlide = currentSlide === slides.length -1;
        const newIndex = lastSlide ? 0 : currentSlide + 1;
        setCurrentSlide(newIndex)
    }
  

  return (
    <div>


    <div className='flex'>
    <div className='h-[200px] w-[200px] border border-black' >

{/* //    style={{backgroundImage: `url(${slides[currentSlide].img})`} */}

        <img src={slides[currentSlide].img} className='h-full w-full' alt='lod'/> 
        <p>{slides[currentSlide].title}</p>
    </div>


    </div>

    <button className='bg-[gray] p-5 m-4' onClick={prevSlide}>left</button>
    <button className='bg-[gray] p-5 m-4' onClick={nextSlide}>right</button>


    </div>
  )
}

export default Cards