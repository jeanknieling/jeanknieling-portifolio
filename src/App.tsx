import { Container, Header, Main, MyDescription, Technologies } from "./components";
import { GlobalStyle } from "./style/global";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle/>
      <Container>
        <Header />
        <Main>
          <MyDescription />
          <Technologies/>
        </Main>
      </Container>
    </div>
  );
};

export default App;
