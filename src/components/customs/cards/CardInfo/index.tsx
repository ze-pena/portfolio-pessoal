// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCakeCandles } from '@fortawesome/free-solid-svg-icons';

// Styling
import './styles.sass';

// Typing
type Props = {
  label: string;
  type: 'local' | 'age';
};

// Component
function InfoCard(props: Props) {
  return (
    <div className="card-info">
      <div className="card-info__icon">
        {props.type === 'local' && <FontAwesomeIcon icon={faLocationDot} />}
        {props.type === 'age' && <FontAwesomeIcon icon={faCakeCandles} />}
      </div>

      <div className="card-info__label">{props.label}</div>
    </div>
  );
}

export default InfoCard;
