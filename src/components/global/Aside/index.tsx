// Dependencias
import { useEffect } from 'react';

// Hooks
import { useStyleState } from '@hooks/useStyleState';

// Styling
import MenuList from '@components/customs/menus/MenuList';
import './styles.sass';

// Typing
import { HeaderData } from '@data/Header';
import MenuSettings from '@components/customs/menus/MenuSettings';

type Props = {
  data: HeaderData;
  tabOpen: 'menu' | 'context' | 'none';
};

type StyleState = 'open' | 'close' | 'default';

// Component
function Aside(props: Props) {
  const menu = useStyleState<StyleState>({ on: 'open', off: 'close', default: 'default' }, 150);

  useEffect(() => {
    // Toggles menu style state on
    if (props.tabOpen === 'menu' && menu.styleState === 'default') {
      menu.updateStyleState();
    }

    // Toggles menu style state off
    if (props.tabOpen === 'none' && menu.styleState === 'open') {
      menu.updateStyleState();
    }

    // Toggles context style state on
    /* if (props.tabOpen === 'context' && context.styleState === 'default') {
      menu.updateStyleState();
    } */

    // Toggles context style state off
    /* if (props.tabOpen === 'none' && context.styleState === 'open') {
      menu.updateStyleState();
    } */
  }, [props, menu]);

  return (
    <aside className={`aside --${props.tabOpen !== 'none' ? 'visible' : 'invisible'}`}>
      <div className={`aside__tab --menu --${menu.styleState}`}>
        <div className="aside__tab__menu">
          <div className="aside__tab__menu__settings">
            <MenuSettings menuSettings={props.data.menuSettings} />
          </div>

          <div className="aside__tab__menu__list">
            <MenuList menuList={props.data.menuList} orientation="vertical" />
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Aside;
