// Components
import CardSkill from '@components/customs/cards/CardSkill';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faPalette,
  faLayerGroup,
  faGlobe,
  faMagnifyingGlass,
  faGear,
  faArrowsSplitUpAndLeft,
} from '@fortawesome/free-solid-svg-icons';

const categoryIconList = [faCode, faPalette, faLayerGroup, faGlobe, faMagnifyingGlass, faGear, faArrowsSplitUpAndLeft];

// Styling
import './styles.sass';

// Typing
type Skill = {
  label: string;
  value: string;
  tag: string;
  color: string;
};

type Props = {
  category: 'programming' | 'front-end' | 'frameworks' | 'back-end' | 'testing' | 'devops' | 'agile';
  description: string;
  skillList: Array<Skill>;
};

enum Category {
  'programming',
  'front-end',
  'frameworks',
  'back-end',
  'testing',
  'devops',
  'agile',
}

// Component
function CardCategory(props: Props) {
  return (
    <li className={`card-category --category-${props.category}`}>
      <div className="card-category__title">
        <div className="card-category__title__icon">
          {<FontAwesomeIcon icon={categoryIconList[Category[props.category]]} />}
        </div>

        <h3 className="card-category__title__text">{props.category}</h3>
      </div>

      <span className="card-category__description">{props.description}</span>

      <ul className="card-category__skills">
        {props.skillList.map((skillItem, index) => (
          <CardSkill key={index} {...skillItem} />
        ))}
      </ul>
    </li>
  );
}

export default CardCategory;
