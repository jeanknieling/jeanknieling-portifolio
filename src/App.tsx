import { Avatar, HamburgerMenu, Header } from "./components";

const App = () => {
  return (
    <div className="App">
      <Header>
        <Avatar
          url="https://www.github.com/jeanknieling.png"
          alt="Foto de perfil"
        />
        <h2>Jean Knieling</h2>
        <li>Sobre</li>
        <li>Tecnologias</li>
        <li>Portifólio</li>
        <li>Contato</li>
      </Header>
    </div>
  );
};

export default App;
