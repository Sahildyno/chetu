import { useState } from "react";
import { ChevronDown, Search, Menu, X } from "lucide-react";

export default function Navbar() {
  const [language, setLanguage] = useState("ENG");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    "INDUSTRIES",
    "SOLUTIONS",
    "SERVICES",
    "ON-DEMAND DEVELOPERS",
    "PORTFOLIO",
    "COMPANY",
    "BLOG",
  ];

  return (
    <nav className="w-full shadow-sm border-b bg-white fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2">
        {/* Left Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-3xl font-bold text-teal-700">Chetu</span>
          <span className="text-xs text-gray-600 hidden sm:inline">
            World-Class Software Solutions
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 font-semibold text-sm">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="flex items-center hover:text-teal-700"
            >
              {item} {item !== "BLOG" && <ChevronDown size={16} className="ml-1" />}
            </button>
          ))}
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

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden ml-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <ul className="flex flex-col p-4 space-y-2">
            {menuItems.map((item, index) => (
              <li key={index} className="flex items-center justify-between">
                <span className="font-semibold">{item}</span>
                {item !== "BLOG" && <ChevronDown size={16} />}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
