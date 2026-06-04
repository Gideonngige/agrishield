import React from "react";

const RiskCard = ({ score, level, recommendation }) => {
  const getColor = () => {
    switch (level) {
      case "HIGH":
        return "bg-red-100 text-red-600";
      case "MEDIUM":
        return "bg-yellow-100 text-yellow-600";
      default:
        return "bg-green-100 text-green-600";
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Crop Risk Assessment</h2>

        <span
          className={`px-4 py-2 rounded-full font-semibold ${getColor()}`}
        >
          {level}
        </span>
      </div>

      <div className="mt-6">
        <p className="text-gray-500">Risk Score</p>

        <h1 className="text-5xl font-bold text-gray-800">
          {score}
          <span className="text-xl">%</span>
        </h1>
      </div>

      <div className="mt-5">
        <h3 className="font-semibold mb-2">Recommendation</h3>

        <p className="text-gray-600 leading-relaxed">
          {recommendation}
        </p>
      </div>
    </div>
  );
};

export default RiskCard;