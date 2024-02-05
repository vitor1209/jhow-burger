import { useState } from "react";
import fundoimg from "../img/cardapio-plano-de-fundo.jpg";
import '../css/cardapio.css';
import { Navegacao } from "./Navegacao.jsx";
import { ItemCardapio } from "./ItemCardapio.jsx";  
import { burguer, combos, porcao, bebida } from "../js/cardapio.js";
import { Header } from "./header.jsx";
import { Titulo } from "./Titulo.jsx";

export function App() { 
  const pag_menu = [burguer, combos, porcao, bebida]
  const [pag_selecionada, atualizarPagSelecionada] = useState(0);

  return <>
  <Header/>
    <img src={fundoimg} className="img_fundo" />
    <div className="sobrepor"></div>
    <Titulo/>
    <Navegacao atualizarPagSelecionada={atualizarPagSelecionada}/>
    <div className="menu">
      {pag_menu[pag_selecionada].map(item => <ItemCardapio nome={item.nome} descricao={item.descricao} preco= {item.preco} imagem={item.imagem}/>)}
    </div>
  </>
}
