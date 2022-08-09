import { Container, Header, MyDescription } from "./components";
import { GlobalStyle } from "./style/global";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Container>
        <Header />
        <main>
          <MyDescription />
        </main>
      </Container>
    </div>
  );
};

export default App;
