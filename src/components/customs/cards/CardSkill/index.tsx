// Styling
import './styles.sass';

// Typing
type Props = {
  label: string;
};

// Component
function CardSkill(props: Props) {
  return (
    <div className="card-skill">
      <div className={`card-skill__icon --${props.label}`} />
      <span className="card-skill__label">{props.label}</span>
    </div>
  );
}

export default CardSkill;
