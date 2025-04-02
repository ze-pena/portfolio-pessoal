// Components
import CardExperience from '@components/customs/cards/CardExperience';

// Styling
import './styles.sass';

// Typing
import { ExperienceData } from '@data/Experience';

type Props = {
  data: ExperienceData;
};

// Component
function ContentExperience(props: Props) {
  return (
    <section className="content-experience" id="experience">
      <div className="content-experience__container">
        <div className="content-experience__container__title">
          <h2>{props.data.section.title}</h2>
        </div>

        <div className="content-experience__container__content">
          <ul className="content-experience__container__content__experience">
            {props.data.experienceList.map((experienceItem, index) => (
              <CardExperience key={index} {...experienceItem} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ContentExperience;
