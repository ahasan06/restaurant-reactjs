import React from 'react'
import burger from '../images/burger.png'

function FoodCart() {
  return (
    <div className='h-[300px]  bg-white flex flex-col items-center justify-center gap-8'>
      <aside className="relative"> 
        <img src={burger} alt="food-image" />
        <div
          className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 h-[4px] w-1/3 bg-[#BD1F17]"
        ></div>
      </aside>
        <div className="card_body flex flex-col items-center gap-1 text-center">
        <h2 className='font-heading text-2xl'>Vegetables Burger</h2>
        <p className='text-[14px] text-[#0A1425] '>Barbecue Italian cuisine pizza</p>
        </div>
    </div>
  )
}

export default FoodCart

