// Styling
import './Container.sass';

// Typing
type Props = React.PropsWithChildren;

// Component
function Container(props: Props) {
  return <div className="section-container">{props.children}</div>;
}

export default Container;
