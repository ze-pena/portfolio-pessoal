// Dependencias
import { useRef } from 'react';

// Componentes
import Header from '@components/global/Header';
import Aside from '@components/global/Aside';

// Hook
import { useObserver } from '@hooks/useObserver';

// Context
import { useSettingsContext } from '@context/Settings/context';

// Hooks
import { useTranslation } from '@hooks/useTranslation';

// Component data
import { headerData } from '@data/Header';

// Styling
import './styles.sass';

// Component
function Default({ children }: React.PropsWithChildren) {
  const settingsContext = useSettingsContext();
  const header = useTranslation(headerData, settingsContext.context.language);
  const startRef = useRef<HTMLDivElement | null>(null);
  const isObserved = useObserver(startRef);

  return (
    <div className="default">
      <div id="start" className="default__start-point" ref={startRef} />

      <Header data={header} position={isObserved ? 'fixed' : 'sticky'} />

      <div className="default__wrapper">
        <Aside data={header} tabOpen={settingsContext.context.aside} />

        <main className="default__wrapper__main">{children}</main>
      </div>
    </div>
  );
}

export default Default;
