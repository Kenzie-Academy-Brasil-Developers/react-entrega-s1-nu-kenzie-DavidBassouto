import "./style.css";
import trash from "../../img/trash.svg";

function Despesa({ item, index, deleteTransaction }) {
    return (
      <div className="card" id={index}>
        <div className="card-color-gray"></div>
        <div className="card-head">
          <h2>{item.description}</h2>
          <p>{item.type}</p>
        </div>
        <div className="card-preco">
          <span>R${item.value}</span>
        </div>
        <div>
          <button className="btn-trash" onClick={() => deleteTransaction(item)}>
            <img src={trash} alt="" />
          </button>
        </div>
      </div>
    );
  }
  
  export default Despesa;