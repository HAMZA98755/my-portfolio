'use client'

// This is a Theme System That Provide Themes To Pages

import {createContext, useContext, useState, useMemo, ReactNode, useEffect} from 'react'
import {Themes, type ThemeColors} from '../ui/Themes'
import { Interface } from 'readline';

type ThemeMode = keyof ThemeColors; // light or dark

type ColorsThemeType = ThemeColors[ThemeMode]; // background, border, text, elc...


// Thist Interface Reflect to Return Type Of Them Context
interface ThemeContextType {
  theme: ThemeMode;
  colors: ColorsThemeType;
  toggleTheme: () => void;
  setTheme: (t: ThemeMode) => void
  mounted: boolean
};


// Create Theme Context Useing createContext 
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);


// Type of Propeities of Provider 
type TypeProviderProps = {
  children: ReactNode;
  initialTheme?: ThemeMode;
}


// Theme Provider 
export const ThemeProvider = ({children, initialTheme = 'light'}: TypeProviderProps) => {
    const [theme, setTheme] = useState<ThemeMode>(initialTheme); // This State Store Theme
    const [mounted, setMounted] = useState(false); // This State Determain if The Component Mounted or Not

    const colors = Themes[theme];  // All colors In Theme

    // This useEffect Will Excute Just One Time When The Page Rundered
    useEffect(
        () => {
          setMounted(true);
          // Get Theme from Local Storage 
          const savedTheme = localStorage.getItem('theme') as ThemeMode | null;
          // Check if There is an Theme;
          if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
            setTheme(savedTheme); // if Ther Save it
          } else {
            // if Ther is't Theme Get it From Prefers Browser
            const prefersDark = window.matchMedia('prefers-color-schame: dark').matches;
          }
        }
    ,[])
    // End useEffect


    // This useEffect Will Excute Whene Change Theme or  Mounted(Whene The Page Runderd)
    useEffect(() => {
      // Check if The Page Mounted To Except Errors
      if (!mounted || typeof document === undefined) return;
        // Store The New Theme in Local Storage
        window.localStorage.setItem('theme', theme);
    }, [mounted, theme]);
    // End useEffect
    
    // This Function Toggle The Theme
    const toggleTheme = () => setTheme((prev) => prev === 'light' ? 'dark' : 'light');

    // This Value That Will be Returned Form Theme Provider
    const value = useMemo (
      () => ({theme, toggleTheme, setTheme, mounted, colors}),
      [theme, mounted, colors]
    );


    // Return Theme Provider And set The Children Inside it
    return (
    <ThemeContext.Provider value ={value}>
      <div
          style={{ backgroundColor: colors.background, color: colors.text }}
          className="w-full min-h-screen"
        >
            {children}
      </div>
    </ThemeContext.Provider>
    )
}

// This Function Check if There is An Theme Context And Return it if True and Throw an Error Otherwaies
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must use in ThemeProvider');
  return ctx;
}