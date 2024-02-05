export function Navegacao(props) {
    return <div className="navegacao">
           <input type="radio" name="opcao-pagina" id="pagina-0" onClick={() => props.atualizarPagSelecionada(0)} defaultChecked/>
           <label htmlFor="pagina-0">Burger</label>
           <input type="radio" name="opcao-pagina" id="pagina-1"  onClick={() =>  props.atualizarPagSelecionada(1)}  />
           <label htmlFor="pagina-1">Combos</label>
           <input type="radio" name="opcao-pagina" id="pagina-2"  onClick={() =>  props.atualizarPagSelecionada(2)} />
           <label htmlFor="pagina-2">Porções</label>
           <input type="radio" name="opcao-pagina" id="pagina-3"  onClick={() =>  props.atualizarPagSelecionada(3)} />
           <label htmlFor="pagina-3">Bebidas</label>
    </div>
}