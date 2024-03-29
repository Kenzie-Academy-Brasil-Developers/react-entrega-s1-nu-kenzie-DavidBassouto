import "./style.css";
import CardVazio from "../CardVazio";
import Card from "../Card";
import Despesa from "../CardDespesa";

function List({ listTransactions, deleteTransaction }) {
  function filterTransaction(transactionType) {
    const filteredItens = listTransactions.filter(
      (item) => item.type === transactionType
    );
    console.log(filteredItens);
    return filteredItens.map((item, index) => (
      <Card item={item} key={index} deleteTransaction={deleteTransaction} />
    ));
  }
  return (
    <>
      {listTransactions.length === 0 ? (
        <CardVazio />
      ) : (
        <div className="extrato">
          <div className="extrato-cabecalho">
            <div className="extrato-cabecalho--descricao">
              <p>Resumo Financeiro</p>
            </div>

            <div className="extrato-cabecalho--categoria">
              <button>Todos</button>
              <button onClick={() => filterTransaction("Entrada")}>
                Entrada
              </button>
              <button onClick={() => filterTransaction("Despesas")}>
                Despesas
              </button>
            </div>
          </div>
          {listTransactions.map((item, index) =>
            item.type === "Entrada" ? (
              <Card
                item={item}
                key={index}
                deleteTransaction={deleteTransaction}
              />
            ) : (
              <Despesa
                item={item}
                key={index}
                deleteTransaction={deleteTransaction}
              />
            )
          )}
        </div>
      )}
    </>
  );
}

export default List;
