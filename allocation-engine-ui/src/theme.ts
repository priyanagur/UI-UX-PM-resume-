import { createTheme } from '@mui/material/styles';

export const allocationEngineTheme = createTheme({
  palette: {
    mode: 'light', // Start with a light mode
    primary: {
      main: '#7D392D', // Indigo: A common, professional brand color
    },
    secondary: {
      main: '#063328', // Amber: For accents and notifications
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Use a clean, system-safe font
    h1: { fontSize: '2.5rem', fontWeight: 700 },
    // ... define other typography styles
  },
  components: {
    // Set a default elevation for Paper elements for a modern feel
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        },
      },
    },
  },
});