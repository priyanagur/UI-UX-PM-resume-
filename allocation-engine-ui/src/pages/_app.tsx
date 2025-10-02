// src/pages/_app.tsx

import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { allocationEngineTheme } from '../theme'; 
// ⭐️ Import the layout component ⭐️
import AppLayout from '../components/AppLayout'; 
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={allocationEngineTheme}>
      <CssBaseline /> 
      
      {/* ⭐️ Wrap the active page component ⭐️ */}
      <AppLayout> 
        <Component {...pageProps} />
      </AppLayout>

    </ThemeProvider>
  );
}