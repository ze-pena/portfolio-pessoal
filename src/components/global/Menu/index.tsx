// Styling
import './styles.sass';

// Typing
type NavigationItem = {
  link: string;
  label: string;
};

type Props = { menuList: NavigationItem[] };

// Component
function Menu(props: Props) {
  return (
    <div className="menu">
      <menu className="menu__list">
        {props.menuList.map((navigationItem, index) => (
          <li key={index} className="menu__list__item">
            <a href={navigationItem.link}>{navigationItem.label}</a>
          </li>
        ))}
      </menu>
    </div>
  );
}

export default Menu;
