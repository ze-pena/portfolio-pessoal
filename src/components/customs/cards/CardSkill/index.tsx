// Styling
import './styles.sass';

// Typing
type Props = {
  label: string;
  value: string;
  tag: string;
};

// Component
function CardSkill(props: Props) {
  return (
    <li className={`card-skill --brand-${props.tag}`}>
      <img
        className="card-skill__icon"
        alt="Icone da habilidade"
        src={`https://cdn.simpleicons.org/${props.value}?viewbox=auto`}
      />

      <span className="card-skill__label">{props.label}</span>
    </li>
  );
}

export default CardSkill;
