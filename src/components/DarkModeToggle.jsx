import { useEffect, useState } from "react";
import React from 'react';


const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  // On mount, check current body class or system preference
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const hasDarkClass = document.body.classList.contains("dark");
    setIsDark(hasDarkClass || prefersDark);
  }, []);

  // Update body class when isDark changes
  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button
      className="dark-mode-toggle"
      onClick={() => setIsDark(!isDark)}
      aria-label="Toggle dark mode"
    >
      {isDark ? "🌙" : "☀️"}
    </button>
  );
};

export default DarkModeToggle;
