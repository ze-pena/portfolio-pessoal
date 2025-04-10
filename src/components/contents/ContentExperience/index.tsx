// Components
import Section from '@components/composable/Section';
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
    <Section.Root id="experience">
      <Section.Name title={props.data.section.title} />

      <Section.Container>
        <ul className="content-experience">
          {props.data.experienceList.map((experienceItem, index) => (
            <CardExperience key={index} {...experienceItem} />
          ))}
        </ul>
      </Section.Container>
    </Section.Root>
  );
}

export default ContentExperience;
