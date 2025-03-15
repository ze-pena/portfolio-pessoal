// Componentes
import Header from '../../components/global/Header';

// Header data
import { headerData } from '../../data/header';

// Styling
import './styles.sass';

// Typing
type Props = React.PropsWithChildren;

// Component
function Default({ children }: Props) {
  return (
    <div className="default">
      <header className="default__header">
        <Header data={headerData} />
      </header>

      <main className="default__main">{children}</main>
    </div>
  );
}

export default Default;
