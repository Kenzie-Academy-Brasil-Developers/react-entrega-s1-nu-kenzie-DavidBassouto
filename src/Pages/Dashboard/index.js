import { useState } from "react";


import Form from "../../components/Form";
import TotalMoney from "../../components/TotalMoney";
import logo from "../../img/NuKenzie.svg";
import List from "../../components/List";

function Dashboard({ handleLogin }) {
  const [listTransactions, setListTransactions] = useState([]);
  function handleTransactions(newTransaction) {
    setListTransactions([...listTransactions, newTransaction]);
  }
  function deleteTransaction(thisTransaction) {
    const item = listTransactions.filter((item) => item !== thisTransaction);
    setListTransactions(item);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="" />
        <button onClick={handleLogin}>Início</button>
      </header>
      <main>
        <div className="container-form-total">
          <div className="container-form">
            <Form
              listTransactions={listTransactions}
              handleTransactions={handleTransactions}
            />
          </div>
          <TotalMoney listTransactions={listTransactions} />
        </div>
        <div className="container-list">
          <List
            listTransactions={listTransactions}
            deleteTransaction={deleteTransaction}
          />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
