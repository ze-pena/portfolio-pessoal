// Styling
import './Wrapper.sass';

// Typing
interface Props extends React.PropsWithChildren {
  size: 'small' | 'medium' | 'large';
}

// Component
function Wrapper(props: Props) {
  return <div className={`section-wrapper --${props.size}`}>{props.children}</div>;
}

export default Wrapper;
