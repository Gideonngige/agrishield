import React from "react";
import { Link } from "react-router-dom";

import {
  CloudRain,
  TreePine,
  ShieldCheck,
  Brain,
} from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-slate-50 min-h-screen">

      <Header />

      {/* HERO */}

      <section className="relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-emerald-500"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-28 text-center text-white">

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">

            Smart Farming

            <span className="block text-yellow-300">
              Powered by AI
            </span>

          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-green-50">

            Get weather forecasts, crop risk
            assessments, AI-powered
            recommendations and tree health
            analysis to improve farm
            productivity.

          </p>

          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">

            <Link
              to="/dashboard"
              className="bg-white text-green-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100"
            >
              View Dashboard
            </Link>

            <Link
              to="/tree-analysis"
              className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold hover:bg-yellow-300"
            >
              Analyze Trees
            </Link>

          </div>

        </div>

      </section>

      {/* FEATURES */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            <h2 className="text-4xl font-bold">
              Features
            </h2>

            <p className="text-gray-600 mt-3">
              Everything a modern farmer
              needs in one platform.
            </p>

          </div>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white p-8 rounded-2xl shadow-sm">

              <CloudRain
                className="text-sky-500"
                size={42}
              />

              <h3 className="font-bold mt-4">
                Weather Forecasts
              </h3>

              <p className="text-gray-600 mt-2">
                Accurate weather insights
                powered by WeatherAI.
              </p>

            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">

              <ShieldCheck
                className="text-amber-500"
                size={42}
              />

              <h3 className="font-bold mt-4">
                Crop Risk Analysis
              </h3>

              <p className="text-gray-600 mt-2">
                Understand weather risks
                before they affect crops.
              </p>

            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">

              <Brain
                className="text-purple-500"
                size={42}
              />

              <h3 className="font-bold mt-4">
                AI Recommendations
              </h3>

              <p className="text-gray-600 mt-2">
                Smart recommendations for
                planting and irrigation.
              </p>

            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">

              <TreePine
                className="text-green-600"
                size={42}
              />

              <h3 className="font-bold mt-4">
                Tree Analytics
              </h3>

              <p className="text-gray-600 mt-2">
                Analyze tree health from
                uploaded farm images.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* WHY */}

      <section className="bg-green-50 py-24">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold">

            Why AgriShield AI?

          </h2>

          <p className="mt-6 text-gray-700 text-lg">

            AgriShield AI combines weather
            intelligence and computer vision
            to help farmers make informed
            decisions that improve yields and
            reduce losses.

          </p>

        </div>

      </section>

      <Footer />

    </div>
  );
};

export default Home;