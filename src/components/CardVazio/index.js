import NoCard from "../../img/NoCard.svg"
function CardVazio(){
    return(
    <div className="extrato">

      <div className="extrato-cabecalho">
        <div className="extrato-cabecalho--descricao">
          <p>Você ainda nao possui nenhum lançamento</p>
        </div>

        <div className="extrato-cabecalho--categoria">
          <button>Todos</button>
          <button>Entrada</button>
          <button>Saída</button>
        </div>
      </div>
      <img src={NoCard} alt='' />
    </div>
    )
}
export default CardVazio