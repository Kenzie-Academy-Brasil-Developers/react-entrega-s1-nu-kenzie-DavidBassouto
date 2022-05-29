import { useState } from "react";
import "./reset.css";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";

function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 },
  ]);
  function handleTransactions(newTransaction) {
    setListTransactions([...listTransactions, newTransaction]);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src="./src/img/NuKenzie.svg" alt="" />
        <button>Início</button>
      </header>
      <main>
        <div className="container-form">
          <Form
            listTransactions={listTransactions}
            handleTransactions={handleTransactions}
          />
        </div>
        <TotalMoney listTransactions={listTransactions} />
        <List listTransactions={listTransactions} />
      </main>
    </div>
  );
}

export default App;
