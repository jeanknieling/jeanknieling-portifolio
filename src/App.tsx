import { Container, Header, MyDescription, Technologies } from "./components";
import { GlobalStyle } from "./style/global";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Container>
        <Header />
        <main>
          <MyDescription />
          <Technologies/>
        </main>
      </Container>
    </div>
  );
};

export default App;
