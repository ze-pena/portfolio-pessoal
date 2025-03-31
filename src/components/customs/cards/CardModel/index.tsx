// Styling
import './styles.sass';

// Typing
type Props = {
  label: string;
};

// Component
function CardModel(props: Props) {
  return (
    <li className="card-model">
      <span className="card-model__label">{props.label}</span>
    </li>
  );
}

export default CardModel;
