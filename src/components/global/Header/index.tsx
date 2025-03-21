// Components
import MenuList from '../../customs/menus/MenuList';
import MenuSettings from '../../customs/menus/MenuSettings';

// Context
import { useSettingsContext } from '../../../context/Settings/context';

// Hooks
import { useTranslation } from '../../../hooks/useTranslation';

// Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// Styling
import './styles.sass';

// Typing
import { HeaderData } from '../../../data/Header';

type Props = {
  data: Array<HeaderData>;
};

// Component
function Header(props: Props) {
  const settingsContext = useSettingsContext();
  const headerData = useTranslation(props.data, settingsContext.context.language);

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
            <MenuList menuList={headerData.menuList} />
          </nav>

          <div className="header__content__menu__settings">
            <MenuSettings menuSettings={headerData.menuSettings} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
