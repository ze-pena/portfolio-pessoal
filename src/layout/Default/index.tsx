// Providers
import SettingsProvider from '../../context/Settings/provider';

// Componentes
import Header from '../../components/global/Header';

// Component data
import { headerData } from '../../data/header';

// Styling
import './styles.sass';

// Typing
// type Props = React.PropsWithChildren

// Component
function Default(/* { children }: Props */) {
  return (
    <SettingsProvider>
      <div className="default">
        <Header data={headerData} />
      </div>
    </SettingsProvider>
  );
}

export default Default;
