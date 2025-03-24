// Components
import Default from './layout/Default';
import ContentAbout from './components/contents/ContentAbout';

// Component data
import { aboutData } from './data/About';

// Context
import { useSettingsContext } from './context/Settings/context';

// Hooks
import { useTranslation } from './hooks/useTranslation';

// Component
function App() {
  const settingsContext = useSettingsContext();
  const about = useTranslation(aboutData, settingsContext.context.language);

  return (
    <Default>
      <ContentAbout data={about} />
    </Default>
  );
}

export default App;
