// Dependencias
import { useMemo } from 'react';

// Components
import MenuList from '@components/customs/menus/MenuList';
import MenuSettings from '@components/customs/menus/MenuSettings';

// Context
import { useSettingsContext } from '@context/Settings/context';

// Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';

// Styling
import './styles.sass';

// Typing
import { HeaderData } from '@data/Header';

type Props = {
  data: HeaderData;
  position: 'fixed' | 'sticky';
};

// Component
function Header(props: Props) {
  const settingsContext = useSettingsContext();

  const buttonState = useMemo(() => {
    const {
      context: { aside },
    } = settingsContext;
    return aside === 'menu' ? 'close' : 'open';
  }, [settingsContext]);

  const clickMenu = (): void => {
    const { setContext } = settingsContext;
    setContext(state => ({ ...state, aside: state.aside !== 'menu' ? 'menu' : 'none' }));
  };

  return (
    <header className={`header --${props.position}`}>
      <div className="header__content">
        <div className="header__content__actions">
          <button type="button" className={`header__content__actions__button --${buttonState}`} onClick={clickMenu}>
            <FontAwesomeIcon icon={buttonState === 'open' ? faBars : faClose} />
          </button>
        </div>

        <div className="header__content__menu">
          <nav className="header__content__menu__list">
            <MenuList menuList={props.data.menuList} orientation="horizontal" />
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
