import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";

export default function Navbar() {
  const [language, setLanguage] = useState("ENG");

  return (
    <nav className="w-full shadow-sm border-b bg-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2">
        {/* Left Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-3xl font-bold text-teal-700">Chetu</span>
          <span className="text-xs text-gray-600">
            World-Class Software Solutions
          </span>
        </div>

        {/* Middle Menu */}
        <div className="hidden md:flex items-center space-x-6 font-semibold text-sm">
          <button className="flex items-center hover:text-teal-700">
            INDUSTRIES <ChevronDown size={16} className="ml-1" />
          </button>
          <button className="flex items-center hover:text-teal-700">
            SOLUTIONS <ChevronDown size={16} className="ml-1" />
          </button>
          <button className="flex items-center hover:text-teal-700">
            SERVICES <ChevronDown size={16} className="ml-1" />
          </button>
          <button className="flex items-center hover:text-teal-700">
            ON-DEMAND DEVELOPERS <ChevronDown size={16} className="ml-1" />
          </button>
          <button className="flex items-center hover:text-teal-700">
            PORTFOLIO <ChevronDown size={16} className="ml-1" />
          </button>
          <button className="flex items-center hover:text-teal-700">
            COMPANY <ChevronDown size={16} className="ml-1" />
          </button>
          <button className="hover:text-teal-700">BLOG</button>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4 text-sm">
          <p className="hidden lg:block">
            Let&apos;s Talk ! 🇺🇸 <span className="font-semibold">954 342 5676</span>{" "}
            🇬🇧 <span className="font-semibold">+44 137 243 2466</span>
          </p>

          {/* Language Dropdown */}
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="border text-sm px-2 py-1 rounded"
          >
            <option>ENG</option>
            <option>FR</option>
            <option>ES</option>
          </select>

          {/* Contact Button */}
          <button className="bg-teal-700 text-white px-4 py-2 rounded-md font-semibold hover:bg-teal-800">
            CONTACT US
          </button>

          {/* Search Icon */}
          <Search className="cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}
