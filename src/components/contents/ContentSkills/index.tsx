// Components`
import Section from '@components/composable/Section';
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
    <Section.Root id="skills" position="last">
      <Section.Name title={props.data.section.title} />

      <Section.Container>
        <ul className="content-skills">
          {props.data.categoryList.map((categoryItem, index) => (
            <CardCategory key={index} {...categoryItem} />
          ))}
        </ul>
      </Section.Container>
    </Section.Root>
  );
}

export default ContentSkills;
