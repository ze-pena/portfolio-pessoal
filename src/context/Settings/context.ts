// Dependencies
import { createContext, useContext } from 'react';

// Typing
type ContextType = {
  scheme: 'light' | 'dark';
  language: 'pt-BR' | 'en-US';
  aside: 'menu' | 'context' | 'none';
};

type ProviderType = {
  context: ContextType;
  setContext: React.Dispatch<React.SetStateAction<ContextType>>;
};

// Mock
export const providerData: ProviderType = {
  context: { scheme: 'light', language: 'pt-BR', aside: 'none' },
  setContext: () => {},
};

// Context
export const SettingsContext = createContext<ProviderType>(providerData);
export const useSettingsContext = (): ProviderType => useContext<ProviderType>(SettingsContext);
