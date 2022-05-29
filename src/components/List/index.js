import Card from "../Card";
import "./style.css";

function List({ listTransactions }) {
  return (
    <div className="extrato">
      <div className="extrato-cabecalho">
        <div className="extrato-cabecalho--descricao">
          <p>Resumo Financeiro</p>
        </div>
        <div className="extrato-cabecalho--categoria">
          <button>Todos</button>
          <button>Entrada</button>
          <button>Saída</button>
        </div>
      </div>
      {listTransactions.map((item, index) => (
          <Card item={item} key={index}/>
      ))}
    </div>
  );
}

export default List;
