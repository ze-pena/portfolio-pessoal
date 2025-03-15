// Styling
import './styles.sass';

// Typing
interface Props {
  data: { label: string; link: string }[];
}

// Component
function Header({ data }: Props) {
  return (
    <nav className="header">
      <menu className="header__menu">
        {data.map((item, index) => (
          <li key={index} className="header__menu__item">
            <a href={item.link}>{item.label}</a>
          </li>
        ))}
      </menu>
    </nav>
  );
}

export default Header;
