"use client";

import React, { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const Dmtoggle = () => {
  const [darkMode, setDarkMode] = useState<boolean | null>(null);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    const initialDarkMode =
      storedDarkMode !== null
        ? JSON.parse(storedDarkMode)
        : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(initialDarkMode);
    document.documentElement.classList.toggle("dark", initialDarkMode);
  }, []);

  const toggleDarkMode = () => {
    if (darkMode !== null) {
      const newMode = !darkMode;
      setDarkMode(newMode);
      localStorage.setItem("darkMode", JSON.stringify(newMode));
      document.documentElement.classList.toggle("dark", newMode);
    }
  };

  return (
    <button
      className="absolute right-16 focus:outline-none transition-colors duration-500 ease-in-out transform hover:scale-110"
      onClick={toggleDarkMode}
    >
      {darkMode === null ? null : darkMode ? (
        <FiSun
          className="text-yellow-500 transition-colors duration-500"
          size={24}
        />
      ) : (
        <FiMoon
          className="text-gray-900 dark:text-gray-100 transition-colors duration-500"
          size={24}
        />
      )}
    </button>
  );
};

export default Dmtoggle;
