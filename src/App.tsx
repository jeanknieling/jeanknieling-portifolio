import {
  Container,
  Header,
  Main,
  MyDescription,
  Technologies,
} from "./components";
import { useScrollContext } from "./providers";
import { GlobalStyle } from "./style/global";

const App = () => {
  const { handleOnWheel } = useScrollContext();

  return (
    <div className="App">
      <GlobalStyle />
      <Container>
        <Header />
        <Main onWheel={handleOnWheel}>
          <MyDescription />
          <Technologies />
        </Main>
      </Container>
    </div>
  );
};

export default App;
