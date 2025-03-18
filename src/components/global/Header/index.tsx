// Componentes
import About from '../../About';
import Menu from '../Menu';

// Styling
import './styles.sass';

// Typing
interface Props {
  menuList: { label: string; link: string }[];
}

// Component
function Header(props: Props) {
  return (
    <div className="header">
      <div className="header__content">
        <About />
      </div>

      <div className="header__navigation">
        <Menu menuList={props.menuList} />
      </div>
    </div>
  );
}

export default Header;
