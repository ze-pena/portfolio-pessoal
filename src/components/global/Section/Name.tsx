// Styling
import './Name.sass';

// Typing
type Props = React.PropsWithChildren;

// Component
function Name({ children }: Props) {
  return <h2 className="section-name">{children}</h2>;
}

export default Name;
