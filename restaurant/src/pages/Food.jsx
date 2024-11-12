import React from 'react'
import FoodCart from '../components/FoodCart'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

function Food() {


  return (
    <div className="max-w-screen-xl min-h-96 md:min-h-screen flex flex-col justify-center gap-8 mx-auto px-6 py-6 lg:py-0">

      <div className="Food_heading_content flex justify-between items-center">
       
       <div className="food_title">
       <h3 className="relative text-red-600 text-[14px] font-bold before:content-[''] before:inline-block before:bg-red-600 before:w-[8px] before:h-[8px] before:mr-2  before:align-middle">
        Crispy, Every Bite Taste
        </h3>
       <h2 className="font-heading text-4xl  mt-2 ">Popular Food Items</h2>
       </div>

       <div className="food_card_btn hidden space-x-4 lg:flex ">
      <button
        className="bg-white rounded-full shadow-md p-3"
      >
        <AiOutlineLeft className="text-gray-800" />
      </button>

      <button
        className=" bg-white rounded-full shadow-md p-3"
      >
        <AiOutlineRight className="text-red-600" />
      </button>
      </div>

      </div>

      <div className='food_card'>
       <FoodCart/>
      </div>

      <div className="food_card_btn lg:hidden space-x-4 flex items-center justify-center">
      <button
        className="bg-white rounded-full shadow-md p-3"
      >
        <AiOutlineLeft className="text-gray-800" />
      </button>

      <button
        className=" bg-white rounded-full shadow-md p-3"
      >
        <AiOutlineRight className="text-red-600" />
      </button>
      </div>


      
    </div>
  )
}

export default Food
