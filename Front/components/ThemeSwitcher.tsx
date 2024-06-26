"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";


export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();


  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return null;
  }


  return (
  <button
    className={`rounded-md hover:scale-110 active:scale-100 duration-200`}
    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
  >
    {theme === "light" ? <MoonIcon className="h-5 w-5"/> : <SunIcon className="h-5 w-5 text-white"/>}
  </button>
  );
};