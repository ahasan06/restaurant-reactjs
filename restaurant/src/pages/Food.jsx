import React from 'react'
import FoodCart from '../components/FoodCart'
import { useRef } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';

import burger from '../images/burger.png';
import pizza from '../images/pizza 1.png';
import fries from '../images/french-fries 1.png';
import chicken from '../images/fried-shrimp-prawn-cake-white-plate 1.png';
import tagliatellePasta from '../images/tagliatelle-pasta.jpg'
function Food() {

  const foodItems = [
    { name: "Vegetables Burger", description: "Barbecue Italian cuisine pizza", imageUrl: burger },
    { name: "Special Pizza", description: "Barbecue Italian cuisine pizza", imageUrl: pizza },
    { name: "Special French Fries", description: "Barbecue Italian cuisine", imageUrl: fries },
    { name: "Cuisine Chicken", description: "Japanese Cuisine Chicken", imageUrl: chicken },
    { name: "Tagliatelle Pasta", description: "Delicious Italian pasta with fresh tomatoes ", imageUrl: tagliatellePasta },
  ];

  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      console.log("swiperRef : ",swiperRef.current);
      swiperRef.current.slidePrev();
    }
  };

  const hadnleNext = () => {
    if (swiperRef.current) {
      console.log("swiperRef : ",swiperRef.current);
      swiperRef.current.slideNext();
    }
  };

  return (


    <div className=" max-w-[1373px] min-h-96 lg:min-h-[710px] flex flex-col justify-center gap-8 lg:gap-14 mx-auto px-6 py-6 lg:py-0">

      <div className="Food_heading_content flex justify-between items-center ">

        <div className="food_title">
           <h3 className="relative text-red-600 text-[14px] md:text-lg font-bold before:content-[''] before:inline-block before:bg-red-600 before:w-[8px] before:h-[8px] before:mr-2  before:align-middle">
            Crispy, Every Bite Taste
          </h3>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mt-2 ">Popular Food Items</h2>
        </div>

        <div className="food_card_btn hidden space-x-4 lg:flex ">
          <button
           onClick={handlePrev}
            className="bg-white rounded-full shadow-md p-3 hover:bg-gray-700 hover:text-white transition ease-in"
          >
            <AiOutlineLeft className="" />
          </button>

          <button
              onClick={hadnleNext}
              className=" bg-white rounded-full shadow-md p-3 hover:bg-gray-700 text-red-600 hover:text-white transition ease-in"
        >
          <AiOutlineRight className="" />
        </button>
        </div>

      </div>

      <div className='food_card'>
        <Swiper
         onSwiper={(swiper) => (swiperRef.current = swiper)}
         spaceBetween={30}
         loop={true} 
         autoplay={{ delay: 1000, disableOnInteraction: false }} // Faster autoplay
         modules={[Navigation, Autoplay]}
         breakpoints={{
           320: { slidesPerView: 1 },
           768: { slidesPerView: 2 },
           1024: { slidesPerView: 3 },
           1440: { slidesPerView: 4 },
         }}
        >
          {
            foodItems.map((item, index) => (
              <SwiperSlide key={index}>
                <FoodCart
                  name={item.name}
                  description={item.description}
                  imageUrl={item.imageUrl}
                />
              </SwiperSlide>
            ))
          }

        </Swiper>
      </div>

      <div className="food_card_btn lg:hidden space-x-4 flex items-center justify-center">
        <button
        onClick={handlePrev}
             className=" bg-white rounded-full shadow-md p-3 hover:bg-gray-700  hover:text-white transition ease-in"
        >
          <AiOutlineLeft className="text-gray-800 hover:text-white" />
        </button>

        <button
              onClick={hadnleNext}
              className=" bg-white rounded-full shadow-md p-3 hover:bg-gray-700 text-red-600 hover:text-white transition ease-in"
        >
          <AiOutlineRight className="text-red-600 hover:text-white" />
        </button>
      </div>



    </div>
  )
}

export default Food
