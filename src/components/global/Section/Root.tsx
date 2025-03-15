// Styling
import './Root.sass';

// Typing
type Props = React.PropsWithChildren;

// Component
function Root({ children }: Props) {
  return <section className="section-root">{children}</section>;
}

export default Root;
