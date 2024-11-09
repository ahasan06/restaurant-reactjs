/* eslint-disable react/prop-types */
import React from 'react';

function Button({ label, onClick, type = "button", className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`uppercase font-sans h-[44px] w-[157px] font-bold px-4 py-2  transition ${className}`}
    >
      {label}
    </button>
  );
}

export default Button;
