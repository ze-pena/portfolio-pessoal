import './Root.sass';

interface Props extends React.PropsWithChildren {
  id: string;
  position?: 'first' | 'middle' | 'last';
}

function Root(props: Props) {
  return (
    <section id={props.id} className={`root --${props.position ? props.position : 'middle'}`}>
      {props.children}
    </section>
  );
}

export default Root;
