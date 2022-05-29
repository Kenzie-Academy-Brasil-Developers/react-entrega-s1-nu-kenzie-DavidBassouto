import "./style.css";
function Card({ item, index }) {
  return (
    <div className="card" id={index}>
      <div className="card-head">
        <h2>{item.description}</h2>
        <p>{item.type}</p>
      </div>
      <div className="card-preco">
        <span>{item.value}</span>
      </div>
      <div>
        <button>X</button>
      </div>
    </div>
  );
}

export default Card;
