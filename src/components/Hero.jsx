import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-blue-900 text-white min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent opacity-75"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center">
        {/* Left: Text and Buttons */}
        <div className="md:w-1/2 text-left space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Drive Innovation with a <br />
            <span className="text-cyan-400">
              World-Class Software <br />
              Development Company
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Custom Software Solutions & Support Services for Every Industry
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300">
              GET STARTED NOW
            </button>
            <button className="bg-transparent border border-white hover:border-gray-300 text-white font-semibold py-3 px-6 rounded-full transition duration-300">
              HIRE DEVELOPERS ON DEMAND
            </button>
          </div>
        </div>

        {/* Right: Placeholder Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80"
            alt="Laptop with team"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Logos Section */}
      <div className="absolute bottom-8 left-6 flex flex-wrap items-center gap-4 z-10">
        <img
          src="https://www.chetu.com/img/home-page-new/inc-5000-logo.jpg"
          alt="Inc. 5000"
          className="h-10"
        />
        <img
          src="https://www.chetu.com/img/home-page-new/aicpa-logo-with-out-stroke.png"
          alt="AICPA"
          className="h-10"
        />
        <img
          src="https://www.chetu.com/img/home-page-new/chetu-25th-anniversary-logo-black.png"
          alt="2021"
          className="h-10"
        />
      </div>
    </section>
  );
};

export default HeroSection;
