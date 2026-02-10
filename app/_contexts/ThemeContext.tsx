"use client";

// This is a Theme System That Provide Themes To Pages

import {
  createContext,
  useContext,
  useState,
  useMemo,
  ReactNode,
  useEffect,
} from "react";
import { Themes, type ThemeColors } from "../_ui/Themes";
import { Interface } from "readline";


const getPrefersTheme = () :ThemeMode | null => {
  if (typeof window === undefined) return null;
  const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
  return prefersDark ? 'dark' : 'light'
}

type ThemeMode = keyof ThemeColors; // light or dark

type ColorsThemeType = ThemeColors[ThemeMode]; // background, border, text, elc...

// Thist Interface Reflect to Return Type Of Them Context
interface ThemeContextType {
  theme: ThemeMode;
  colors: ColorsThemeType;
  toggleTheme: () => void;
  setTheme: (t: ThemeMode) => void;
  mounted: boolean;
}

// Create Theme Context Useing createContext
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Type of Propeities of Provider
type TypeProviderProps = {
  children: ReactNode;
  initialTheme?: ThemeMode;
};

// Theme Provider
export const ThemeProvider = ({
  children,
  initialTheme = "light",
}: TypeProviderProps) => {
  // This State Store Theme


  
  const savedThem = localStorage.getItem("theme") as ThemeMode | null;
  const prefered = getPrefersTheme();
  const defautlTheme = savedThem ?? prefered;



  const [theme, setTheme] = useState<ThemeMode>(defautlTheme || initialTheme);

  const colors = Themes[theme]; // All colors In Theme

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  // End useEffect

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);



  // This Function Toggle The Theme
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));


  // This Value That Will be Returned Form Theme Provider
  const value = useMemo(
    () => ({theme, toggleTheme, setTheme, mounted: true, colors}),
    [theme, colors],
  );

  // Return Theme Provider And set The Children Inside it
  return (
    <ThemeContext.Provider value={value}>
      <div
        style={{ backgroundColor: colors.background, color: colors.text }}
        className="w-full min-h-screen"
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// This Function Check if There is An Theme Context And Return it if True and Throw an Error Otherwaies
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must use in ThemeProvider");
  return ctx;
}
