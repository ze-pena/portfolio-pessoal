// Dependencies
import { createContext, useContext } from 'react';

// Typing
type ContextType = {
  scheme: 'light' | 'dark';
  language: 'pt-BR' | 'en-US';
};

type ProviderType = {
  context: ContextType;
  setContext: React.Dispatch<React.SetStateAction<ContextType>>;
};

// Mock
export const providerData: ProviderType = {
  context: { scheme: 'light', language: 'pt-BR' },
  setContext: () => {},
};

// Context
export const SettingsContext = createContext<ProviderType>(providerData);
export const useSettingsContext = (): ProviderType => useContext<ProviderType>(SettingsContext);
