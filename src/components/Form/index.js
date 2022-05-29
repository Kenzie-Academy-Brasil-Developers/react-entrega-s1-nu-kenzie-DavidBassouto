/*
Input para pegar o valor.
Input para pegar a descrição.
Select para escolher entre entrada e saída.
Button para enviar as informações captadas no formulário.
*/
import "./style.css";
function Form({ listTransactions, handleTransactions }) {
  const [description, type, value] = listTransactions;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label>Descrição</label>
      <input
        type="text"
        className="descricao"
        placeholder="Digite aqui sua descrição"
        onChange={(event) => handleTransactions(event.target.value)}
      ></input>
      <small>Ex:Compra de roupas</small>

      <div className="container-valor">
      <div className='container-valor--tipo'>
          <label>Valor</label>
          <input
            type="number"
            className="valor"
            onChange={(event) => handleTransactions(event.target.value)}
          ></input>
        </div>
        <div className='container-valor--tipo'>
          <label>Tipo de Valor</label>
          <select onChange={(event) => handleTransactions(event.target.value)}>
            <option>Entrada</option>
            <option>Saída</option>
          </select>
        </div>
      </div>
      <button
            onClick={() => handleTransactions(description, type, value)}
            type="submit"
          >
            Inserir Valor
          </button>
    </form>
  );
}

export default Form;
