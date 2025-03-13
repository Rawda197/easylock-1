// components/Sidebar.js
"use client";

import React from "react";

const Sidebar = ({ sections, handleSectionChange }) => {
  return (
    <div className="bg-blue-900 text-white w-full sm:w-60 h-screen p-4">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => handleSectionChange(section.id)}
          className="w-full py-2 mb-2 bg-white text-blue-900 rounded hover:bg-blue-700 hover:text-white transition-all duration-300"
        >
          {section.name}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
