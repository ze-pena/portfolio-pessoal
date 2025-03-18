// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faLocationDot, faCakeCandles } from '@fortawesome/free-solid-svg-icons';

// Styling
import './styles.sass';

// Typing
type InfoType = 'country' | 'local' | 'age';

type Props = {
  label: string;
  type: InfoType;
};

// Component
function InfoCard(props: Props) {
  return (
    <div className="info-card">
      {props.type && (
        <div className="info-card__icon">
          {props.type === 'country' && <FontAwesomeIcon icon={faFlag} />}
          {props.type === 'local' && <FontAwesomeIcon icon={faLocationDot} />}
          {props.type === 'age' && <FontAwesomeIcon icon={faCakeCandles} />}
        </div>
      )}

      <div className="info-card__label">{props.label}</div>
    </div>
  );
}

export default InfoCard;
