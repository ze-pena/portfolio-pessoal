// Styling
import './styles.sass';

// Typing
type Option = {
  label: string;
  link: string;
};

type Props = {
  menuList: Array<Option>;
};

// Component
function MenuList(props: Props) {
  return (
    <menu className="menu-list">
      {props.menuList.map((menuItem, index) => (
        <li key={index} className="menu-list__item">
          <a href={menuItem.link}>{menuItem.label}</a>
        </li>
      ))}
    </menu>
  );
}

export default MenuList;
