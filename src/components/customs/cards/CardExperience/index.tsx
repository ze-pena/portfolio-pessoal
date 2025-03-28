// Components
import CardModel from '../CardModel';

// Assets
import logoAlfa from '../../../../assets/images/logos/logo_alfa.png';
import logoHiplatform from '../../../../assets/images/logos/logo_hiplatform.webp';
import logoProcon from '../../../../assets/images/logos/logo_procon.png';

// Styling
import './styles.sass';
import CardSkill from '../CardSkill';

// Typing
type Skill = { label: string; value: string; tag: string };

type Props = {
  company: 'alfa' | 'hiplatform' | 'procon';
  name: string;
  role: string;
  interval: string;
  description: string;
  model: 'presencial' | 'hibrido' | 'remoto';
  skillList: Array<Skill>;
};

// Component
function CardExperience(props: Props) {
  return (
    <li className="card-experience">
      <div className="card-experience__logo">
        {props.company === 'alfa' && <img src={logoAlfa} alt="Logotipo da empresa" />}
        {props.company === 'hiplatform' && <img src={logoHiplatform} alt="Logotipo da empresa" />}
        {props.company === 'procon' && <img src={logoProcon} alt="Logotipo da empresa" />}
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
