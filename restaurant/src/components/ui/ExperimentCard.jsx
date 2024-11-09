import React from 'react';

function ExperimentCard({ value, label ,className ="" }) {
  return (
    <div className={`about_card flex items-center gap-4 ${className}`}>
      <div className="relative flex items-center justify-center w-28 h-28">
        <svg className="absolute w-full h-full">
          <circle
            cx="50%"
            cy="50%"
            r="35"
            fill="none"
            stroke="#e6e6e6" // light gray background circle
            strokeWidth="6"
          />
          <circle
            cx="50%"
            cy="50%"
            r="35"
            fill="none"
            stroke="#FFC107" // yellow progress circle
            strokeWidth="6"
            strokeDasharray="200"
            strokeDashoffset="40" // adjust this to control the progress percentage
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute text-xl font-bold">{value}</span>
      </div>
      <div className="card_body">
        <p className="text-lg font-semibold">{label}</p>
      </div>
    </div>
  );
}

export default ExperimentCard;
