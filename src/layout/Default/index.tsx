// Componentes
import Header from '../../components/global/Header';

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

  return (
    <div className="default">
      <div className="default__header">
        <Header data={header} />
      </div>

      <div className="default__main">
        <main className="default__main__content">{children}</main>
      </div>
    </div>
  );
}

export default Default;
