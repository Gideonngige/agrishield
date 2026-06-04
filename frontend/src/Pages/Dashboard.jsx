import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "../components/Header";
import Footer from "../components/Footer";

import WeatherCard from "../components/WeatherCard";
import RiskCard from "../components/RiskCard";

import { API_URL } from "../config/env";

import {
  Thermometer,
  CloudRain,
  Wind,
  Droplets,
  Brain,
  ShieldCheck,
} from "lucide-react";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/weather/?lat=-0.0467&lon=37.6556`
      );

      setData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-slate-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto"></div>

          <h2 className="mt-4 text-xl font-semibold text-gray-700">
            Loading Farm Intelligence...
          </h2>
        </div>
      </div>
    );
  }

  const weather = data?.weather || {};
  const risk = data?.risk || {};

  return (
    <div className="bg-slate-50 min-h-screen">

      <Header />

      {/* HERO */}

      <section className="bg-gradient-to-r from-green-700 to-emerald-500 text-white">

        <div className="max-w-7xl mx-auto px-6 py-20">

          <h1 className="text-5xl font-bold">
            Farm Intelligence Dashboard
          </h1>

          <p className="mt-4 text-lg text-green-100 max-w-2xl">
            Monitor weather conditions, assess crop risks,
            and receive AI-powered recommendations to
            maximize productivity and reduce losses.
          </p>

        </div>

      </section>

      {/* MAIN CONTENT */}

      <section className="max-w-7xl mx-auto px-6 py-12">

        {/* WEATHER CARDS */}

        <div className="mb-12">

          <div className="flex items-center gap-3 mb-6">

            <CloudRain className="text-green-600" />

            <h2 className="text-2xl font-bold">
              Current Weather Conditions
            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6">
  <WeatherCard
    title="Temperature"
    value={weather.temperature || "--"}
    unit="°C"
    icon={Thermometer}
  />

  <WeatherCard
    title="Humidity"
    value={weather.humidity || "--"}
    unit="%"
    icon={Droplets}
  />

  <WeatherCard
    title="Rain Chance"
    value={weather.rain_probability || "--"}
    unit="%"
    icon={CloudRain}
  />

  <WeatherCard
    title="Wind Speed"
    value={weather.wind_speed || "--"}
    unit="km/h"
    icon={Wind}
  />
</div>

<div className="mt-12">

  <h2 className="text-2xl font-bold mb-6">
    24 Hour Forecast
  </h2>

  <div className="grid md:grid-cols-4 gap-4">

    {weather.forecast?.slice(0, 8).map((item, index) => (
      <div
        key={index}
        className="bg-white rounded-xl p-4 shadow-sm"
      >
        <p className="font-medium">
          {item.time.split("T")[1]}
        </p>

        <img
          src={item.icon}
          alt=""
          className="w-12 h-12"
        />

        <p className="text-lg font-bold">
          {item.temperature}°C
        </p>

        <p className="text-sm text-gray-500">
          Rain {item.precipitation_probability}%
        </p>
      </div>
    ))}

  </div>

</div>

        </div>

        {/* RISK + AI SECTION */}

        <div className="grid lg:grid-cols-2 gap-8">

          {/* RISK CARD */}

          <div>

            <div className="flex items-center gap-3 mb-6">

              <ShieldCheck className="text-amber-500" />

              <h2 className="text-2xl font-bold">
                Crop Risk Assessment
              </h2>

            </div>

            <RiskCard
              score={risk.score}
              level={risk.level}
              recommendation={
                risk.recommendation ||
                "Weather conditions are favorable."
              }
            />

          </div>

          {/* AI SUMMARY */}

          <div>

            <div className="flex items-center gap-3 mb-6">

              <Brain className="text-purple-600" />

              <h2 className="text-2xl font-bold">
                AI Weather Insights
              </h2>

            </div>

            <div className="bg-white rounded-2xl shadow-md p-8 h-full">

              <div className="bg-purple-100 w-14 h-14 rounded-xl flex items-center justify-center mb-5">

                <Brain
                  size={28}
                  className="text-purple-700"
                />

              </div>

              <h3 className="text-xl font-semibold mb-4">
                Smart Recommendations
              </h3>

              <p className="text-gray-600 leading-relaxed">

                {weather.ai_summary ||
                  "No AI insights available at the moment."}

              </p>

            </div>

          </div>

        </div>

        {/* FARM STATUS */}

        <div className="mt-12">

          <div className="bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-3xl p-10">

            <h2 className="text-3xl font-bold mb-3">
              Farm Health Overview
            </h2>

            <p className="text-green-100 max-w-3xl">

              Based on current weather patterns and
              environmental conditions, AgriShield AI
              continuously evaluates your farm's risk
              exposure and provides actionable insights
              to support better agricultural decisions.

            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">

              <div className="bg-white/10 rounded-2xl p-5">

                <h3 className="text-sm text-green-100">
                  Risk Level
                </h3>

                <p className="text-3xl font-bold mt-2">
                  {risk.level || "LOW"}
                </p>

              </div>

              <div className="bg-white/10 rounded-2xl p-5">

                <h3 className="text-sm text-green-100">
                  Risk Score
                </h3>

                <p className="text-3xl font-bold mt-2">
                  {risk.score || 0}%
                </p>

              </div>

              <div className="bg-white/10 rounded-2xl p-5">

                <h3 className="text-sm text-green-100">
                  Forecast Days
                </h3>

                <p className="text-3xl font-bold mt-2">
                  7 Days
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
};

export default Dashboard;