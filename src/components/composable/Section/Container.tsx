import './Container.sass';

function Container({ children }: React.PropsWithChildren) {
  return <div className="container">{children}</div>;
}

export default Container;
