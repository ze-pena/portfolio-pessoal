// Components
import Section from '@components/composable/Section';
import CardAcademic from '@components/customs/cards/CardAcademic';

// Styling
import './styles.sass';

// Typing
import { AcademicData } from '@data/Academic';

type Props = {
  data: AcademicData;
};

// Component
function ContentExperience(props: Props) {
  return (
    <Section.Root id="academic">
      <Section.Name title={props.data.section.title} />

      <Section.Container>
        <ul className="content-academic">
          {props.data.academicList.map((academicItem, index) => (
            <CardAcademic key={index} {...academicItem} />
          ))}
        </ul>
      </Section.Container>
    </Section.Root>
  );
}

export default ContentExperience;
