import React, { useState, createContext, useContext, ReactNode } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme, Theme } from '@mui/material/styles';

// ライトテーマ
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5', // 背景色を指定
      paper: '#ffffff',
    },
  },
});

// ダークテーマ
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
    background: {
      default: '#303030', // 背景色を指定
      paper: '#424242',
    },
  },
});

// コンテキストの作成
const ThemeContext = createContext({ toggleTheme: () => {} });

const ThemeProviderWrapper = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme.palette.mode === 'light' ? darkTheme : lightTheme));
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div style={{ minHeight: '100vh', backgroundColor: theme.palette.background.default }}>
          {children}
        </div>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => useContext(ThemeContext);

export { ThemeProviderWrapper, useThemeContext };
