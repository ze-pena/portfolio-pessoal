import './Name.sass';

interface Props {
  title: string;
  subtitle?: string;
}

function Name(props: Props) {
  return (
    <div className="name">
      <div className="name__container">
        <h1 className="name__container__title">{props.title}</h1>
        <span className={`name__container__subtitle --${props.subtitle ? 'visible' : 'invisible'}`}>
          {props.subtitle}
        </span>
      </div>
    </div>
  );
}

export default Name;
