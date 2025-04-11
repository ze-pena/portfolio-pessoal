// Components
import CardModel from '@components/customs/cards/CardModel';
import CardSkill from '@components/customs/cards/CardSkill';

// Assets
import logoUnicid from '@assets/images/logos/logo_unicid.png';

const cardLogoList = [logoUnicid];

// Styling
import './styles.sass';

// Typing
type Skill = { label: string; value: string; tag: string; color: string };

type Props = {
  college: 'unicid';
  name: string;
  course: string;
  interval: string;
  description: string;
  model: 'presencial' | 'hibrido' | 'remoto';
  skillList: Array<Skill>;
};

enum CardLogo {
  'unicid',
}

// Component
function CardAcademic(props: Props) {
  return (
    <li className="card-academic">
      <div className="card-academic__logo">
        <img src={cardLogoList[CardLogo[props.college]]} alt="Logotipo da insituição de ensino" />
      </div>

      <div className="card-academic__content">
        <div className="card-academic__content__header">
          <div className="card-academic__content__header__company">
            <h3>{props.name}</h3>
            <span>{props.course}</span>
          </div>

          <div className="card-academic__content__header__interval">
            <span>{props.interval}</span>
          </div>
        </div>

        <div className="card-academic__content__logo">
          <img src={cardLogoList[CardLogo[props.college]]} alt="Logotipo da insituição de ensino" />
        </div>

        <div className="card-academic__content__body">
          <ul className="card-academic__content__body__model-list">
            <CardModel label={props.model} />
          </ul>

          <ul className="card-academic__content__body__skill-list">
            {props.skillList.map((skillItem, index) => (
              <CardSkill key={index} {...skillItem} />
            ))}
          </ul>

          <div className="card-academic__content__body__description">
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default CardAcademic;
