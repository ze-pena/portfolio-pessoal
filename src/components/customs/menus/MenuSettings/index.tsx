// Dependencies
import { useState, useMemo } from 'react';

// Context
import { useSettingsContext } from '../../../../context/Settings/context';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faLanguage } from '@fortawesome/free-solid-svg-icons';

// Styling
import './styles.sass';

// Typing
type Scheme = 'Light' | 'Dark' | 'Claro' | 'Escuro';

type Language = 'pt-BR' | 'en-US';

type Settings = {
  schemeList: Array<Scheme>;
  languageList: Array<Language>;
};

type Props = {
  menuSettings: Settings;
};

// Component
function MenuSettings(props: Props) {
  const settingsContext = useSettingsContext();
  const [showMenu, setShowMenu] = useState<boolean | null>(null);

  const menuState = useMemo(() => {
    if (showMenu === null) return '--neutral';
    return showMenu ? '--visible' : '--invisible';
  }, [showMenu]);

  const settingsScheme = useMemo(() => {
    const { schemeList } = props.menuSettings;
    const { scheme } = settingsContext.context;
    return schemeList[scheme === 'light' ? 0 : 1];
  }, [props.menuSettings, settingsContext.context]);

  const clickScheme = () => {
    const { context, setContext } = settingsContext;
    setContext(state => ({ ...state, scheme: context.scheme === 'light' ? 'dark' : 'light' }));
  };

  const clickLanguage = () => setShowMenu(state => !state);

  const selectLanguage = (language: Language) => {
    const { setContext } = settingsContext;
    setContext(state => ({ ...state, language }));
    setShowMenu(false);
  };

  return (
    <menu className="menu-settings">
      <li className="menu-settings__item">
        <button type="button" className="menu-settings__item__button" onClick={clickScheme}>
          <div className="menu-settings__item__button__icon --scheme">
            <FontAwesomeIcon icon={faLightbulb} />
          </div>
          <span className="menu-settings__item__button__label">{settingsScheme}</span>
        </button>
      </li>

      <li className="menu-settings__item">
        <button type="button" className={`menu-settings__item__button ${menuState}`} onClick={clickLanguage}>
          <div className="menu-settings__item__button__icon --language">
            <FontAwesomeIcon icon={faLanguage} />
          </div>
          <span className="menu-settings__item__button__label">{settingsContext.context.language}</span>
        </button>

        <ul className={`menu-settings__item__list ${menuState}`}>
          {props.menuSettings.languageList.map((languageItem, index) => (
            <li className="menu-settings__item__list__item" key={index} onClick={() => selectLanguage(languageItem)}>
              {languageItem}
            </li>
          ))}
        </ul>
      </li>
    </menu>
  );
}

export default MenuSettings;
