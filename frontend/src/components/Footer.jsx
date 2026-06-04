import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-8">

          <div>
            <h2 className="text-xl font-bold mb-3">
              AgriShield AI
            </h2>

            <p className="text-green-100">
              Helping farmers make smarter
              decisions through weather
              intelligence and tree health
              analytics.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">
              Features
            </h3>

            <ul className="space-y-2 text-green-100">
              <li>Weather Forecasting</li>
              <li>Crop Risk Analysis</li>
              <li>Tree Health Monitoring</li>
              <li>AI Insights</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">
              Powered By
            </h3>

            <p className="text-green-100">
              WeatherAI API
            </p>

            <p className="text-green-100 mt-2">
              React + Django
            </p>
          </div>

        </div>

        <div className="border-t border-green-800 mt-8 pt-6 text-center text-green-200">
          © {new Date().getFullYear()} AgriShield AI
        </div>

      </div>

    </footer>
  );
};

export default Footer;