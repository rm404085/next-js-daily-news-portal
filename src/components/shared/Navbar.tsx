"use client";

import { useContext } from "react";
import Link from "next/link";
import { ThemeContext } from "@/context/themeContex";

const Navbar = () => {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw new Error("Navbar must be used inside ThemeProvider");
  }

  const { isDarkMode, toggleTheme } = theme;

  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white dark:bg-gray-900">
      <div className="text-xl font-bold">
        <Link href="/">Next News</Link>
      </div>

      <div className="flex items-center gap-4">
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>

        {/* Toggle Button */}
        <button
          onClick={toggleTheme}
          className="px-3 py-1 rounded-md border border-gray-400 dark:border-gray-600"
        >
          {isDarkMode ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
