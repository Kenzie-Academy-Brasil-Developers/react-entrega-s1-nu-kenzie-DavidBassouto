import "./reset.css";
import Home from "./Pages/home";
import Dashboard from "./Pages/Dashboard";
import { useState } from "react";
import "./App.css";

function App() {
  const [login, setLogin] = useState(true);
  function handleLogin() {
    setLogin(!login);
  }
  return (
    <>
      {login ? (
        <Home handleLogin={handleLogin} />
      ) : (
        <Dashboard handleLogin={handleLogin} />
      )}
    </>
  );
}

export default App;
