// Styling
import './Root.sass';

// Typing
interface Props extends React.PropsWithChildren {
  position: 'first' | 'middle' | 'last';
}

// Component
function Root(props: Props) {
  return <div className={`section-root --${props.position}`}>{props.children}</div>;
}

export default Root;
