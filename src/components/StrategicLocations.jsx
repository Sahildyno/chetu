import React from 'react';

// Reusable component for the four top cards
const TopFeatureBox = ({ title, description }) => {
  return (
    <div className="flex-1 max-w-xs p-6 m-2 border-2 border-teal-500 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg cursor-pointer">
      <h3 className="text-lg sm:text-xl font-semibold text-orange-600 mb-2">{title}</h3>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  );
};

// Reusable component for the "Accelerate Your Success" cards
const BenefitCard = ({ icon, headline, subhead, description }) => {
  return (
    <div className="flex flex-col items-center text-center max-w-xs p-4">
      <div className="mb-4 text-teal-500">{icon}</div>
      <p className="text-4xl font-bold text-orange-600">{headline}</p>
      <p className="text-xl font-semibold text-gray-800 mb-2">{subhead}</p>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

// Component for individual service offering in the "Custom Solutions" section
const CustomSolutionCard = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center p-2 text-center">
      {/* Icon Container with Hexagonal Border */}
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-3">
        {/* Outer hexagonal border */}
        <div className="absolute top-0 left-0 w-full h-full transform rotate-30">
          <div className="w-full h-full bg-transparent border-2 border-teal-500 clip-path-hexagon"></div>
        </div>
        {/* Inner hexagonal border (slightly smaller) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-8px)] h-[calc(100%-8px)] transform rotate-30">
          <div className="w-full h-full bg-white border border-teal-500 clip-path-hexagon flex items-center justify-center">
            <div className="transform -rotate-30">
              {icon}
            </div>
          </div>
        </div>
      </div>
      {/* Title Text with Orange Underline */}
      <div className="relative pt-2 pb-1">
        <p className="text-sm font-medium text-gray-700 uppercase tracking-wide px-2">
          {title}
        </p>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-0.5 bg-orange-600 rounded-full"></div>
      </div>
    </div>
  );
};

// Section component for the four top cards
const TopCardSection = () => {
  return (
    <div className="flex flex-wrap justify-center items-stretch py-10 px-4 bg-white">
      <TopFeatureBox
        title="Industry-Specific Teams"
        description="Technical teams experienced in your industry. Understanding your needs faster and adding value to your vision."
      />
      <TopFeatureBox
        title="Flexible Working Models"
        description="We offer onshore, nearshore, and offshore models delivering real-time collaboration."
      />
      <TopFeatureBox
        title="Trustworthy Partner"
        description="24-year-old US Corporation governed by local laws. 2800+ employees."
      />
      <TopFeatureBox
        title="Very Cost-Effective"
        description="For the value we bring, we are the most cost effective software solutions provider."
      />
    </div>
  );
};

// Section for "Accelerate Your Success"
const AccelerateSuccessSection = () => {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
        Accelerate Your Success
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        <BenefitCard
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625.75c-.244 0-.469.043-.681.121l9.749 9.75a8.253 8.253 0 0 0-9.068-9.871ZM2.75 12a9.75 9.75 0 0 1 1.077-4.885 9.749 9.749 0 0 1 6.816-4.992l-.004 14.992a9.75 9.75 0 0 1-7.889-5.115Zm6.072 1.378-.002-3.628L12 11.528l3.17-1.778.002 3.628L12 15.028l-3.172-1.65ZM8.253 12a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Z" clipRule="evenodd" />
            </svg>
          }
          headline="UP TO 75% SAVINGS"
          subhead="Development Cost Savings"
          description="Our one-stop-shop model offers on-premise and nearshore development options suited to meet your business needs."
        />
        <BenefitCard
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
              <path fillRule="evenodd" d="M3.75 12a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75Zm0-4.5a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75Zm.75-3a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H4.5ZM3.75 16.5a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75Zm.75 3a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H4.5Z" clipRule="evenodd" />
            </svg>
          }
          headline="50% FASTER"
          subhead="Accelerate Time to Market"
          description="Get to market faster and have an edge on the competition. You have complete scalability to ramp up, down, or change skills."
        />
        <BenefitCard
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
              <path d="M5.25 2.25h13.5a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V3a.75.75 0 0 1 .75-.75Zm13.5 1.5H5.25v1.5h13.5V3.75Zm.75 18a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V8.25h15V21.75Z" />
            </svg>
          }
          headline="30% TIME CUT"
          subhead="Development Time Reduced"
          description="Save time with our industry-specific expertise. We provide guidance in over 40+ industries and verticals, offering a deeper understanding."
        />
      </div>
    </div>
  );
};

// Main component for "Custom Solutions"
const CustomSolutionsSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-teal-50 py-16 px-4 md:px-8 lg:px-16 overflow-hidden rounded-bl-[100px] rounded-br-[100px] sm:rounded-bl-[150px] sm:rounded-br-[150px]">
      <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-16 max-w-7xl mx-auto">
        {/* Left Text Block */}
        <div className="lg:w-1/4 xl:w-1/5 text-center lg:text-left mb-8 lg:mb-0 pt-10">
          <p className="text-xl font-bold text-orange-600 mb-1">Custom Solutions</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Offerings From Concept <br className="hidden sm:inline" /> to Code
          </h2>
        </div>
        {/* Right Grid of Services */}
        <div className="lg:w-3/4 xl:w-4/5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-8 gap-x-4">
          <CustomSolutionCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-teal-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 8.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM19.5 10.5a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0ZM12 10.5a7.5 7.5 0 0 1 7.5 7.5h-15A7.5 7.5 0 0 1 12 10.5Zm0 0V2.25m0 2.25c0 1.15-.17 2.277-.492 3.328M12 10.5c-.17 1.15-.25 2.3-.25 3.45m.25 3.45a.75.75 0 0 1 .75-.75h-.75V21m0-3.75a.75.75 0 0 0 .75-.75h-.75m.75.75H21c-1.5 0-2.836-.67-3.75-1.75M3 18.75c1.171 0 2.271.396 3.166 1.077m-3.166-1.077a48.241 48.241 0 0 1-.397-3.528A48.241 48.241 0 0 1 3 18.75Z" />
              </svg>
            }
            title="Application Development"
          />
          <CustomSolutionCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-teal-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.773 4.773Zm-2.92-1.169v4.675m4.675-4.675h4.675M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            }
            title="Application Support"
          />
          <CustomSolutionCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-teal-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.5l6-6 4 4 6-6m2 10.5H3m18 0c-1.5 0-3-.5-4.5-1.5V13c0-1.5-1.5-3-3-3H7c-1.5 0-3 1.5-3 3v.5c0 .5-.5 1-1 1" />
              </svg>
            }
            title="Business Intelligence And Reporting"
          />
          <CustomSolutionCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-teal-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5-4.5L7.5 12l2.25 2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
              </svg>
            }
            title="AI/ML And Data Science"
          />
          <CustomSolutionCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-teal-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3H9M12 18.75c-3.125 0-6.25-1.25-6.25-6v-1.5h12.5v1.5c0 4.75-3.125 6-6.25 6ZM10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
              </svg>
            }
            title="BPO And Non-Technical Processes"
          />
          <CustomSolutionCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-teal-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L13.5 21.75l1.5-4.5H3.75z" />
              </svg>
            }
            title="Cloud, Infrastructure And Cybersecurity"
          />
          <CustomSolutionCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-teal-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            }
            title="Quality Assurance"
          />
          <CustomSolutionCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-teal-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21H3m10.5-11.25h2.25c2.76 0 5.209 1.116 6.912 2.704v0.007c-.426.21-1.345.41-2.227.674a11.122 11.122 0 0 1-4.756 0 11.122 11.122 0 0 1-2.227-.674c-.882-.264-1.77-.464-2.227-.674L9 17.25zM15 17.25H9M15 17.25V4.75c0-1.657-1.343-3-3-3S9 3.093 9 4.75v12.5M12 4.75h-.007M9 17.25h-.007" />
              </svg>
            }
            title="Partner Product Support"
          />
        </div>
      </div>
    </div>
  );
};

// Main component for "Trusted By Leading Brands"
const TrustedBrandsSection = () => {
  const brandLogos = [
    { name: 'Johnson&Johnson', src: 'https://www.chetu.com/img/logos/15.jpg', className: 'h-15 sm:h-15' }, // Placeholder for actual logo
    { name: 'Siemens', src: 'https://www.chetu.com/img/logos/26.png', className: 'h-15 sm:h-15' },
    { name: 'Dollar General', src: 'https://www.chetu.com/img/logos/dollar-general.png', className: 'h-15 sm:h-15' },
    { name: 'Roomstogo', src: 'https://www.chetu.com/img/logos/rooms-to-go.png', className: 'h-15 sm:h-15' },
    { name: 'DirectTV', src: 'https://www.chetu.com/img/logos/directv.png', className: 'h-15 sm:h-15' },
    { name: 'Live Nation', src: 'https://www.chetu.com/img/logos/1.jpg', className: 'h-15 sm:h-15' },
    { name: 'Uniguest', src: 'https://www.chetu.com/img/logos/uniguest.png', className: 'h-15 sm:h-15' },
    { name: 'Marriott', src: 'https://www.chetu.com/img/logos/marriott_hotels.png', className: 'h-15 sm:h-15' },
    { name: 'Memorial Healthcare', src: 'https://www.chetu.com/img/logos/11.jpg', className: 'h-15 sm:h-15' },
    { name: 'Petco', src: 'https://www.chetu.com/img/logos/4.jpg', className: 'h-15 sm:h-15' },
    { name: 'Yum!', src: 'https://www.chetu.com/img/logos/yum.png', className: 'h-15 sm:h-15' },
  ];

  return (
    <div className="bg-white py-16 px-4 md:px-8 lg:px-16 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12">Trusted By Leading Brands</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
        {brandLogos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center h-16 w-32 md:h-20 md:w-40">
            <img src={logo.src} alt={logo.name} className={`max-w-full max-h-full object-contain ${logo.className}`} />
          </div>
        ))}
      </div>
      <p className="mt-8 text-lg text-gray-600">
        <span className="font-semibold text-orange-600">and more...</span>
      </p>
    </div>
  );
};

// New Component: Global Stats Card
const StatCard = ({ number, title }) => {
  return (
    <div className="flex flex-col items-start px-4 sm:px-6 py-4">
      <p className="text-3xl sm:text-4xl font-bold text-gray-800 mb-1">{number}</p>
      <div className="w-16 h-1 bg-teal-500 mb-2"></div> {/* Underline */}
      <p className="text-sm text-gray-600">{title}</p>
    </div>
  );
};

// New Section: Global Solutions, Local Services
const GlobalSolutionsSection = () => {
  return (
    <div className="bg-blue-50 py-16 px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12">
      {/* Left side: Stats */}
      <div className="lg:w-1/2">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center lg:text-left">Global Solutions, Local Services</h2>
        <div className="grid grid-cols-2 gap-y-8">
          <StatCard number="13" title="Strategic locations" />
          <StatCard number="2800+" title="Dedicated Developers" />
          <StatCard number="20000+" title="Custom Apps" />
          <StatCard number="40+" title="Specialized Industries" />
          <StatCard number="7000+" title="Global Customers" />
          <StatCard number="150+" title="Development Awards" />
        </div>
      </div>

      {/* Right side: World Map */}
      <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
        <img
          src="https://www.chetu.com/img/home-page-new/map-new-updated.jpg" // Placeholder for your actual map image
          alt="World Map showing global presence"
          className="w-full max-w-md lg:max-w-lg h-auto rounded-lg shadow-xl"
        />
        {/* Placeholder for the US mini-map, if it's a separate image/component */}
        <div className="absolute bottom-4 left-4 w-1/3 sm:w-1/4 md:w-1/5 bg-white p-2 rounded-lg shadow-md border border-gray-200">
          <p className="text-xs font-semibold mb-1">US Locations</p>
          <img
            src="https://placehold.co/150x100/F4F4F4/000000?text=US+Map" // Placeholder for your US mini-map
            alt="US map with locations"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};


// Reusable scroll-to-top button
const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="bg-teal-500 text-white p-3 rounded-full shadow-lg transition-colors duration-300 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
};

// Component for the bottom wave and button
const BottomWaveSection = () => {
  return (
    <div className="relative h-24 bg-gradient-to-r from-blue-100 to-teal-100 flex items-center justify-end pr-8">
      <ScrollToTopButton />
    </div>
  );
};

// Main App component
const App = () => {
  return (
    <div className="font-sans antialiased">
      <TopCardSection />
      <AccelerateSuccessSection />
      <CustomSolutionsSection />
      <TrustedBrandsSection />
      <GlobalSolutionsSection /> {/* NEW SECTION ADDED HERE */}
      <BottomWaveSection />
    </div>
  );
};

export default App;