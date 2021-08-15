import { NavigationBar } from "components";
import { Container, Content } from './style';

const Layout = ({children}) => {
  return (
    <Container>
        <NavigationBar />
        <Content>
            {children}
        </Content>
    </Container>
  );
}

export { Layout };
