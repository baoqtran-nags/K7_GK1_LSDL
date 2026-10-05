import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeType, FontSizeType } from '../types';

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  blueLightFilter: boolean;
  setBlueLightFilter: (active: boolean) => void;
  fontSize: FontSizeType;
  setFontSize: (size: FontSizeType) => void;
  isLight: boolean;
  isSepia: boolean;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = 'flashgeography_theme_mode';
const BLUE_LIGHT_STORAGE_KEY = 'flashgeography_blue_light';
const FONT_SIZE_STORAGE_KEY = 'flashgeography_font_size';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Default to 'light' (Eye-care Warm Light mode) as requested by user
  const [theme, setThemeState] = useState<ThemeType>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      if (saved === 'light' || saved === 'sepia' || saved === 'dark') {
        return saved;
      }
    }
    return 'light'; // Default to warm eye-care light
  });

  const [blueLightFilter, setBlueLightFilterState] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(BLUE_LIGHT_STORAGE_KEY) === 'true';
    }
    return true; // Default enabled for eye care
  });

  const [fontSize, setFontSizeState] = useState<FontSizeType>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(FONT_SIZE_STORAGE_KEY);
      if (saved === 'normal' || saved === 'large' || saved === 'xlarge') {
        return saved;
      }
    }
    return 'normal';
  });

  const setTheme = (newTheme: ThemeType) => {
    setThemeState(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    }
  };

  const setBlueLightFilter = (active: boolean) => {
    setBlueLightFilterState(active);
    if (typeof window !== 'undefined') {
      localStorage.setItem(BLUE_LIGHT_STORAGE_KEY, active ? 'true' : 'false');
    }
  };

  const setFontSize = (size: FontSizeType) => {
    setFontSizeState(size);
    if (typeof window !== 'undefined') {
      localStorage.setItem(FONT_SIZE_STORAGE_KEY, size);
    }
  };

  useEffect(() => {
    // Sync class on documentElement / body
    if (typeof document !== 'undefined') {
      document.documentElement.classList.remove('theme-light', 'theme-sepia', 'theme-dark');
      document.documentElement.classList.add(`theme-${theme}`);
      
      if (blueLightFilter) {
        document.body.classList.add('blue-light-filter-active');
      } else {
        document.body.classList.remove('blue-light-filter-active');
      }
    }
  }, [theme, blueLightFilter]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        blueLightFilter,
        setBlueLightFilter,
        fontSize,
        setFontSize,
        isLight: theme === 'light',
        isSepia: theme === 'sepia',
        isDark: theme === 'dark'
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
