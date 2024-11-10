/* eslint-disable react/prop-types */
import React from 'react';

function AboutCard({ icon, title, description }) {
  return (
    <div className="about_card flex items-center gap-4">
      <div className="card_header shadow-lg w-20 h-20 flex items-center justify-center rounded-full">
        <img src={icon} alt="icon" className="" />
      </div>
      <div className="card_body">
        <h2 className="font-heading text-2xl">{title}</h2>
        <p className='text-[#0A1425] leading-[26px]'>{description}</p>
      </div>
    </div>
  );
}

export default AboutCard;
