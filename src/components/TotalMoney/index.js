import "./style.css";
function TotalMoney({ listTransactions }) {
  const total = listTransactions.reduce((valorAnterior, acc) => {
    return Number(acc.value) + Number(valorAnterior);
  }, 0);

  return (
    <div className="container-saldo">
      <div className='continer-saldo__tipo'>
        <p className='valor-total'> Valor Total: </p>
        <p className='preco'>R${total}</p>
      </div>
        <small>O valor se refere ao saldo</small>
    </div>
  );
}

export default TotalMoney;
