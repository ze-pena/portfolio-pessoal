// Componentes
import Header from '../../components/Elements/Header';

// Component data
import { navigation } from '../../data/navigation';

// Styling
import './styles.sass';

// Typing
// type Props = React.PropsWithChildren

// Component
function Default(/* { children }: Props */) {
  return (
    <div className="default">
      <Header data={navigation} />
    </div>
  );
}

export default Default;
