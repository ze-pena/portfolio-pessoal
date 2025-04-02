// Dependencies
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Components
import App from './App.tsx';

// Providers
import SettingsProvider from '@context/Settings/provider';

// Styling
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SettingsProvider>
      <App />
    </SettingsProvider>
  </StrictMode>
);
