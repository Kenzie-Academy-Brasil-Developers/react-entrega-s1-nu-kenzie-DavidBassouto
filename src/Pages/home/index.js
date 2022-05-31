import "./style.css";
import logo from "../../img/NuKenzieWhite.svg";
import dashHome from "../../img/dashHome.svg";
function Home({ handleLogin }) {
  return (
    <>
      <div className="container_home">
        <div className="div-container">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="container_home--containerinfo">
            <h1>Centralize o controle das suas finanças</h1>
            <p>de forma rápida e segura</p>
            <button onClick={handleLogin}>Iniciar</button>
          </div>
        </div>
        <div className="container__home--containerimg">
          <img src={dashHome} alt="" />
        </div>
      </div>
    </>
  );
}

export default Home;
