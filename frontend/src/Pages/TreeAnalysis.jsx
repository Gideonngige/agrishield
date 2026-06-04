import React, { useState } from "react";
import axios from "axios";
import { Upload, TreePine, CheckCircle2, AlertCircle, RefreshCw } from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { API_URL } from "../config/env";

const TreeAnalysis = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Keep track of the selected image URL so the user can preview it
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
    }
  };

  const handleSubmit = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      setLoading(true);
      const response = await axios.post(
        `${API_URL}/trees/analyze/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setResult(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    // 1. Flex layout stretches the screen height correctly to pin the footer down
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      
      {/* Full-width header stays clean at the top */}
      <Header />

      {/* 2. Main content container takes up the remaining vertical spacing safely */}
      <main className="flex-grow max-w-5xl w-full mx-auto px-6 py-12">
        
        {/* Page Titles */}
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-slate-800 tracking-tight">
            Tree Health Analysis
          </h1>
          <p className="text-slate-600 mt-2 text-lg">
            Upload drone captures or high-resolution farm images to assess canopy health and distribution.
          </p>
        </div>

        {/* Upload Zone */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
          <div className="max-w-xl mx-auto flex flex-col items-center text-center">
            
            {/* Styled Drag & Drop Box */}
            <label className="w-full flex flex-col items-center justify-center border-2 border-dashed border-slate-200 rounded-xl p-8 hover:border-emerald-500 cursor-pointer transition bg-slate-50/50">
              {previewUrl ? (
                <img 
                  src={previewUrl} 
                  alt="Farm preview" 
                  className="max-h-56 rounded-lg shadow-sm object-cover" 
                />
              ) : (
                <>
                  <Upload className="text-slate-400 mb-3" size={40} />
                  <span className="font-semibold text-slate-700">Click to upload an image</span>
                  <span className="text-xs text-slate-400 mt-1">PNG, JPG or JPEG up to 10MB</span>
                </>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden" // Hides the ugly native file picker button
              />
            </label>

            {file && (
              <p className="mt-3 text-sm font-medium text-slate-500">
                Selected: {file.name}
              </p>
            )}

            <button
              onClick={handleSubmit}
              disabled={loading || !file}
              className={`mt-6 w-full sm:w-auto px-8 py-4 rounded-xl font-semibold transition flex items-center justify-center gap-2 ${
                !file 
                  ? "bg-slate-200 text-slate-400 cursor-not-allowed" 
                  : "bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm"
              }`}
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Analyzing Canopy...
                </>
              ) : (
                <>
                  <TreePine size={20} />
                  Analyze Trees
                </>
              )}
            </button>
          </div>
        </div>

        {/* Results Area */}
        {result && (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 mt-8 animate-fadeIn">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <CheckCircle2 className="text-emerald-500" />
              Analysis Results
            </h2>

            {/* Results Grid Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Total Trees</p>
                <p className="text-3xl font-black text-slate-800 mt-2">{result.total_tree_count || 0}</p>
              </div>

              <div className="bg-emerald-50/50 p-5 rounded-xl border border-emerald-100/50">
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">Healthy Trees</p>
                <p className="text-3xl font-black text-emerald-700 mt-2">{result.tree_health?.healthy || 0}</p>
              </div>

              <div className="bg-amber-50/50 p-5 rounded-xl border border-amber-100/50">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">Needs Care</p>
                <p className="text-3xl font-black text-amber-700 mt-2">{result.tree_health?.needs_care || 0}</p>
              </div>

              <div className="bg-rose-50/50 p-5 rounded-xl border border-rose-100/50">
                <p className="text-xs font-semibold uppercase tracking-wider text-rose-600">Needs Swap</p>
                <p className="text-3xl font-black text-rose-700 mt-2">{result.tree_health?.needs_replacement || 0}</p>
              </div>
            </div>

            {/* Recommendations Sub-block */}
            {result.recommendations && result.recommendations.length > 0 && (
              <div className="mt-8 pt-8 border-t border-slate-100">
                <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <AlertCircle className="text-amber-500" size={20} />
                  AI Field Recommendations
                </h3>
                <ul className="space-y-3">
                  {result.recommendations.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                      <span className="inline-block w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Full-width footer sits correctly at the bottom edge */}
      <Footer />

    </div>
  );
};

export default TreeAnalysis;