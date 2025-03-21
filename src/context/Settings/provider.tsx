// Dependencies
import { useState } from 'react';
import { providerData, SettingsContext } from './context';

// Provider
export default function SettingsProvider({ children }: React.PropsWithChildren) {
  const [context, setContext] = useState(providerData.context);
  return <SettingsContext.Provider value={{ context, setContext }}>{children}</SettingsContext.Provider>;
}
