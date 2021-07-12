import Container from "../components/container/Container";

export function withContainer(Component) {
  return function (props) {
    return (
      <Container>
        <Component {...props} />
      </Container>
    );
  };
}
