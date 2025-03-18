// Componentes
import Header from '../../components/global/Header';

// Header data
import { menuData } from '../../data/menu';

// Styling
import './styles.sass';

// Typing
type Props = React.PropsWithChildren;

// Component
function Default({ children }: Props) {
  return (
    <div className="default">
      <header className="default__header">
        <Header menuList={menuData.menuList} />
      </header>

      <main className="default__main">{children}</main>
    </div>
  );
}

export default Default;
