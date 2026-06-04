import React from "react";

const WeatherCard = ({ title, value, unit, icon: Icon }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100 hover:shadow-md transition-all duration-200">
      <div className="flex items-center justify-between">
        <div>
          {/* Subtle gray text for the label */}
          <h3 className="text-slate-500 text-sm font-medium tracking-wide uppercase">
            {title}
          </h3>
          {/* Large, bold dark text for the metric */}
          <div className="mt-2 flex items-baseline">
            <span className="text-3xl font-extrabold text-slate-800">
              {value}
            </span>
            {/* Unit colored in a soft green brand tone */}
            <span className="text-lg font-semibold text-emerald-600 ml-1">
              {unit}
            </span>
          </div>
        </div>

        {/* Dynamic Icon Container using a soft sky-blue brand tint */}
        <div className="p-3 bg-sky-50 text-sky-500 rounded-xl">
          {Icon && <Icon size={24} strokeWidth={2.5} />}
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;