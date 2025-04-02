// Components
import MenuList from '@components/customs/menus/MenuList';
import MenuSettings from '@components/customs/menus/MenuSettings';

// Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// Styling
import './styles.sass';

// Typing
import { HeaderData } from '@data/Header';

type Props = {
  data: HeaderData;
};

// Component
function Header(props: Props) {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__content__actions">
          <button type="button" className="header__content__actions__button">
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

        <div className="header__content__menu">
          <nav className="header__content__menu__list">
            <MenuList menuList={props.data.menuList} />
          </nav>

          <div className="header__content__menu__settings">
            <MenuSettings menuSettings={props.data.menuSettings} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
