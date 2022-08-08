import { Container, Header, MyDescription } from "./components";
import { GlobalStyle } from "./style/global";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Container>
        <Header />
        <MyDescription/>
      </Container>
    </div>
  );
};

export default App;
