// Components
import CardModel from '@components/customs/cards/CardModel';
import CardSkill from '@components/customs/cards/CardSkill';

// Assets
import logoAlfa from '@assets/images/logos/logo_alfa.png';
import logoHiplatform from '@assets/images/logos/logo_hiplatform.webp';
import logoProcon from '@assets/images/logos/logo_procon.png';

const cardLogoList = [logoAlfa, logoHiplatform, logoProcon];

// Styling
import './styles.sass';

// Typing
type Skill = { label: string; value: string; tag: string; color: string };

type Props = {
  company: 'alfa' | 'hiplatform' | 'procon';
  name: string;
  role: string;
  interval: string;
  description: string;
  model: 'presencial' | 'hibrido' | 'remoto';
  skillList: Array<Skill>;
};

enum CardLogo {
  'alfa',
  'hiplatform',
  'procon',
}

// Component
function CardExperience(props: Props) {
  return (
    <li className="card-experience">
      <div className="card-experience__logo">
        <img src={cardLogoList[CardLogo[props.company]]} alt="Logotipo da empresa" />
      </div>

      <div className="card-experience__content">
        <div className="card-experience__content__header">
          <div className="card-experience__content__header__company">
            <h3>{props.name}</h3>
            <span>{props.role}</span>
          </div>

          <div className="card-experience__content__header__interval">
            <span>{props.interval}</span>
          </div>
        </div>

        <div className="card-experience__content__logo">
          <img src={cardLogoList[CardLogo[props.company]]} alt="Logotipo da empresa" />
        </div>

        <div className="card-experience__content__body">
          <ul className="card-experience__content__body__model-list">
            <CardModel label={props.model} />
          </ul>

          <ul className="card-experience__content__body__skill-list">
            {props.skillList.map((skillItem, index) => (
              <CardSkill key={index} {...skillItem} />
            ))}
          </ul>

          <div className="card-experience__content__body__description">
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default CardExperience;
