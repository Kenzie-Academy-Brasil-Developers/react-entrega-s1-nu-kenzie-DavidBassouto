/*
Input para pegar o valor.
Input para pegar a descrição.
Select para escolher entre entrada e saída.
Button para enviar as informações captadas no formulário.
*/
import { useState } from "react";
import "./style.css";
function Form({ handleTransactions }) {
  const [valueDesc, setValueDesc] = useState("");
  const [valueValue, setValueValue] = useState("");
  const [valueType, setValueType] = useState("Entrada");

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
        onChange={(event) => setValueDesc(event.target.value)}
      ></input>
      <small>Ex:Compra de roupas</small>

      <div className="container-valor">
        <div className="container-valor--tipo">
          <label>Valor</label>
          <input
            type="number"
            className="valor"
            onChange={(event) => setValueValue(event.target.value)}
          ></input>
        </div>
        <div className="container-valor--tipo">
          <label>Tipo de Valor</label>
          <select onChange={(event) => setValueType(event.target.value)}>
            <option>Entrada</option>
            <option>Saída</option>
          </select>
        </div>
      </div>
      <button
        onClick={() => {
          const obj = {
            description: valueDesc,
            type: valueType,
            value: valueValue,
          };
          switch (obj.type) {
            case "Saída":
              obj.value = -valueValue;
              break;
            case "Entrada":
              obj.value = valueValue;
              break;
            default:
              break;
          }
          handleTransactions(obj);
        }}
      >
        Inserir Valor
      </button>
    </form>
  );
}

export default Form;
