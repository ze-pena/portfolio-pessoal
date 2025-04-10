import './Name.sass';

interface Props {
  title: string;
}

function Name(props: Props) {
  return (
    <div className="name">
      <div className="name__container">
        <h1 className="name__container__title">{props.title}</h1>
      </div>
    </div>
  );
}

export default Name;
