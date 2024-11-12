import React from 'react'

function FoodCart({ name, description, imageUrl }) {
  console.log("image",imageUrl);
  
  return (
    <div className='h-[300px]  bg-white flex flex-col items-center justify-center gap-8'>
      <aside className="relative"> 
        <img src={imageUrl} alt="food-image" className='object-contain w-[130px] h-[110px] ' />
        <div
          className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 h-[4px] w-1/3 bg-[#BD1F17]"
        ></div>
      </aside>
        <div className="card_body flex flex-col items-center gap-1 text-center">
        <h2 className='font-heading text-2xl'>{name}</h2>
        <p className='text-[14px] text-[#0A1425] px-4'>{description}</p>
        </div>
    </div>
  )
}

export default FoodCart

