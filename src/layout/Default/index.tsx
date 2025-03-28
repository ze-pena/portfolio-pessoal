// Dependencias
import { useRef } from 'react';

// Componentes
import Header from '../../components/global/Header';

// Hook
import { useObserver } from '../../hooks/useObserver';

// Context
import { useSettingsContext } from '../../context/Settings/context';

// Hooks
import { useTranslation } from '../../hooks/useTranslation';

// Component data
import { headerData } from '../../data/Header';

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
      <div className="default__start-point" ref={startRef} />

      <nav className={`default__header --${!isObserved ? 'sticking' : 'fixed'}`}>
        <Header data={header} />
      </nav>

      <div className="default__main">
        <main className="default__main__content">{children}</main>
      </div>
    </div>
  );
}

export default Default;
