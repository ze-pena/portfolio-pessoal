// Componentes
import ElementHeader from '../../components/Elements/ElementHeader';

// Component data
import { header } from '../../data/header';

// Styling
import './styles.sass';

// Typing
// type Props = React.PropsWithChildren

// Component
function Default(/* { children }: Props */) {
  return (
    <div className="default">
      <ElementHeader data={header} />
    </div>
  );
}

export default Default;
