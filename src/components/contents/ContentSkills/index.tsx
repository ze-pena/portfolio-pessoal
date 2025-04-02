// Components
import CardCategory from '@components/customs/cards/CardCategory';

// Styling
import './styles.sass';

// Typing
import { SkillData } from '@data/Skills';

type Props = {
  data: SkillData;
};

// Component
function ContentSkills(props: Props) {
  return (
    <section className="content-skills" id="skills">
      <div className="content-skills__container">
        <div className="content-skills__container__title">
          <h2>{props.data.section.title}</h2>
        </div>

        <div className="content-skills__container__content">
          <ul className="content-skills__container__content__experience">
            {props.data.categoryList.map((categoryItem, index) => (
              <CardCategory key={index} {...categoryItem} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ContentSkills;
