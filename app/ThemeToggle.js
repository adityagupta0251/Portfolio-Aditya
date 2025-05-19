// components/ThemeToggle.js
"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(stored ? stored === "dark" : systemDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    setIsDark(!isDark);
  };

  return (
    <button onClick={toggleTheme} className="p-2 border rounded">
      {isDark ? "🌞 Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
