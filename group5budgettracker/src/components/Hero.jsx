import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, TrendingUp, Shield, Zap } from 'lucide-react';
import { useTheme } from '@mui/material/styles';
import { useState } from "react";

const Hero = () => {

  const [showDemo, setShowDemo] = useState(false);
  
const theme = useTheme();
const isDark = theme.palette.mode === 'dark';

  return (
    <>
    <section className="relative bg-primary-700 overflow-hidden">
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              Take Control of Your
              <span className="block text-accent-600 from-accent-300 to-accent-500 bg-clip-text">
                Finances
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              Effortlessly manage your budget and take strides toward achieving financial freedom
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/register">
                <button className="group bg-white text-primary-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-[1.02] flex items-center justify-center">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              
              <button
  onClick={() => setShowDemo(true)}
  className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center justify-center"
>
  <Play className="mr-2 h-5 w-5" />
  Watch Demo
</button>

            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-8 text-white/70">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span className="text-sm font-medium">Bank-level Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5" />
                <span className="text-sm font-medium">Real-time Sync</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5" />
                <span className="text-sm font-medium">Smart Insights</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              {/* Mock app interface */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="bg-primary-500 p-6">
                  <div className="flex items-center justify-between text-white">
                    <h3 className="font-semibold text-lg">Monthly Overview</h3>
                    <div className="text-right">
                      <p className="text-sm opacity-90">Total Balance</p>
                      <p className="text-2xl font-bold">$12,847</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="font-medium text-gray-700">Income</span>
                    </div>
                    <span className="font-semibold text-green-600">+$4,200</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <span className="font-medium text-gray-700">Expenses</span>
                    </div>
                    <span className="font-semibold text-red-600">-$2,847</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      <span className="font-medium text-gray-700">Savings</span>
                    </div>
                    <span className="font-semibold text-blue-600">+$1,353</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {showDemo && (
  <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg max-w-3xl w-full overflow-hidden relative">
      {/* Close button */}
      <button
        className="absolute top-2 right-2 text-gray-600 dark:text-white hover:text-red-500 text-xl font-bold"
        onClick={() => setShowDemo(false)}
      >
        &times;
      </button>

      <video
        src="/demo-video-placeholder.mp4"
        controls
        autoPlay
        className="w-full h-auto rounded-b-xl"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
)}
</>
  );
};

export default Hero;