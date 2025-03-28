// Components
import Default from './layout/Default';
import ContentAbout from './components/contents/ContentAbout';
import ContentExperience from './components/contents/ContentExperience';

// Component data
import { aboutData } from './data/About';
import { experienceData } from './data/Experience';

// Context
import { useSettingsContext } from './context/Settings/context';

// Hooks
import { useTranslation } from './hooks/useTranslation';

// Component
function App() {
  const settingsContext = useSettingsContext();
  const about = useTranslation(aboutData, settingsContext.context.language);
  const experience = useTranslation(experienceData, settingsContext.context.language);

  return (
    <Default>
      <ContentAbout data={about} />
      <ContentExperience data={experience} />
    </Default>
  );
}

export default App;
