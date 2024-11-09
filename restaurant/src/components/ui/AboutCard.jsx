/* eslint-disable react/prop-types */
import React from 'react';

function AboutCard({ icon, title, description }) {
  return (
    <div className="about_card flex items-center gap-4">
      <div className="card_header shadow-lg  w-24 h-24 flex items-center justify-center rounded-full">
        <img src={icon} alt="icon" className="" />
      </div>
      <div className="card_body">
        <h2 className="font-heading text-3xl">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default AboutCard;
