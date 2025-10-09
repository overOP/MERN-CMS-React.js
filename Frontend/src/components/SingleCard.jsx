
import React from "react";

const SingleCard = ({ title, subtitle, description }) => {

  return (
    <div className="mx-auto w-full max-w-sm transition-transform duration-300 hover:scale-105">
      <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-gray-100">
        <h2 className="text-2xl font-semibold text-gray-900 mb-1">{title}</h2>
        <h4 className="text-sm text-gray-700 mb-3">{subtitle}</h4>
        <p className="text-gray-500 text-base mb-4 line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SingleCard;
