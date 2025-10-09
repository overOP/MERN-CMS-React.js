import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ title, subtitle, description, blog, id }) => {
  const navigate = useNavigate();
  const _id = blog?._id ?? id;

  const handleReadmore = (id) => {
    navigate(`/readmore/${id}`);
  };
  return (
    <div className="mx-auto w-full max-w-sm transition-transform duration-300 hover:scale-105">
      <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-gray-100">
        <h2 className="text-2xl font-semibold text-gray-900 mb-1">{title}</h2>
        <h4 className="text-sm text-gray-700 mb-3">{subtitle}</h4>
        <p className="text-gray-500 text-base mb-4 line-clamp-3">
          {description}
        </p>
        <button
          onClick={() => handleReadmore(_id)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors duration-200"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default Card;
