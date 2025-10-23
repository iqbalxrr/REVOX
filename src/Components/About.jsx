import React from 'react';
import { ShieldCheck, Target, Users } from 'lucide-react';

// Data structure for the features/pillars
const features = [
  {
    icon: ShieldCheck,
    title: "Unbiased Reviews",
    description: "Our expert team meticulously evaluates every product and service to ensure you receive honest, impartial, and data-driven insights.",
    color: "text-blue-600",
  },
  {
    icon: Target,
    title: "Clear Mission",
    description: "We aim to build a trustworthy platform where consumers can share experiences and confidently navigate the market for electronics, books, and more.",
    color: "text-indigo-600",
  },
  {
    icon: Users,
    title: "Community & Transparency",
    description: "We are committed to full transparency in our processes and fostering a vibrant community of informed and engaged consumers.",
    color: "text-purple-600",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header/Hero Section */}
      <div className="bg-white shadow-md border-b border-gray-100 py-16 sm:py-36">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
              Welcome to <span className="text-indigo-600">Revox</span>
            </h1>
            <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
              Your trusted partner for honest, insightful, and data-driven reviews on products and services across all categories.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content & Pillars */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-16">

        {/* Core Story Section */}
        <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-xl transition duration-300 hover:shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Block */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b-2 border-indigo-200 pb-2 inline-block">
                Our Foundation
              </h2>
              <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                ReviewMate was founded on a simple principle: **trust**. In today's overwhelming market, making the right choice can be challenging. We exist to simplify that process. Our commitment is to carefully evaluate each item, providing you with **unbiased opinions** so you can spend less time researching and more time enjoying your purchase.
              </p>
              <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                We cover everything from the latest **electronics** and must-read **books** to the best local **restaurants** and essential **services**. We aim to be the first and last place you check before making any buying decision.
              </p>
            </div>
            {/* Visual Placeholder for a more professional look */}
            <div className="hidden md:block">
               <div className="p-8 bg-indigo-500 rounded-2xl h-full shadow-lg flex items-center justify-center min-h-[300px]">
                    <div className="text-white text-center">
                        <Target className="w-16 h-16 mx-auto mb-4 stroke-1" />
                        <h3 className="text-2xl font-semibold">Focused on Quality</h3>
                        <p className="mt-2 text-indigo-100">Every review is a promise of clarity and integrity.</p>
                    </div>
                </div>
            </div>
          </div>
        </div>

        {/* Separator and Pillars Header */}
        <div className="text-center my-16">
            <h3 className="text-3xl font-extrabold text-gray-800">Our Core Pillars</h3>
            <p className="text-gray-500 mt-2">The principles that guide every action we take.</p>
        </div>

        {/* Feature Grid Section (Pillars) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
            >
              <div className={`${feature.color} mb-4`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action / Conclusion */}
        <div className="mt-20 text-center bg-indigo-50 p-10 rounded-xl border border-indigo-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-indigo-800 mb-4">
                Join the ReviewMate Community
            </h2>
            <p className="text-lg text-indigo-700 max-w-2xl mx-auto mb-6">
                We believe in the power of collective knowledge. Become a part of our growing community of informed consumers and help shape the future of reviewing.
            </p>
            {/* Mock button to make it actionable */}
            <button className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105 text-lg tracking-wider">
                Start Exploring Reviews
            </button>
        </div>

      </div>
      {/* Footer Placeholder */}
      
    </div>
  );
};

export default About;
