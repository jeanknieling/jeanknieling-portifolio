import {
  ButtonLeadsToTop,
  Footer,
  Header,
  Main,
  MyDescription,
  MyProjects,
  Technologies,
} from "./components";
import { GlobalStyle } from "./style/global";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Main>
        <MyDescription />
        <Technologies />
        <MyProjects />
        <ButtonLeadsToTop />
      </Main>
      <Footer />
    </div>
  );
};

export default App;
