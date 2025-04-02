// Components
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
    <section className="content-academic" id="academic">
      <div className="content-academic__container">
        <div className="content-academic__container__title">
          <h2>{props.data.section.title}</h2>
        </div>

        <div className="content-academic__container__content">
          <ul className="content-academic__container__content__experience">
            {props.data.academicList.map((academicItem, index) => (
              <CardAcademic key={index} {...academicItem} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ContentExperience;
