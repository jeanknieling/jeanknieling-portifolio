import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ButtonLeadsToTop,
  EmailContactSection,
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
      <ToastContainer
        position="top-center"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        toastStyle={{
          backgroundColor: "rgba(0,0,0,1)",
          borderRadius: "8px",
        }}
      />
      <Header />
      <Main>
        <MyDescription />
        <Technologies />
        <MyProjects />
        <ButtonLeadsToTop />
        <EmailContactSection />
      </Main>
      <Footer />
    </div>
  );
};

export default App;
