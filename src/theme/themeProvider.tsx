import { createContext, ReactNode, useEffect, useState } from 'react';
import { ColorScheme } from './types';
import { ThemeMode } from './mode';
import Storage from './storage';
import { Themes } from './themes';

type ThemeContextType = {
  mode: ThemeMode;
  setTheme: (mode: ThemeMode) => Promise<void>;
  colors: ColorScheme;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setThemeMode] = useState(ThemeMode.LIGHT);

  useEffect(() => {
    const loadThemeFromStorage = async () => {
      const storedMode = await Storage.getThemeMode();
      if (storedMode) {
        setThemeMode(storedMode);
      }
    };
    loadThemeFromStorage();
  }, []);

  const setTheme = async (mode: ThemeMode) => {
    setThemeMode(mode);
    await Storage.setThemeMode(mode);
  };

  return (
    <ThemeContext.Provider value={{ mode, setTheme, colors: Themes[mode] }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
