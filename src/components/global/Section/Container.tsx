// Styling
import './Container.sass';

// Typing
type Props = React.PropsWithChildren;

// Component
function Container({ children }: Props) {
  return (
    <div className="section-container">
      <div className="section-container__content">{children}</div>
    </div>
  );
}

export default Container;
