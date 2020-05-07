import React, { useState }from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import Produtos from './components/Produtos/Produtos';
import Checkout from './components/Checkout/Checkout';


function Ecommerce() {

  const [carrinho, SetCarrinho] = useState({produtos: []});
  const [exibirProdutos, setExibirProdutos] = useState(true);
  const [exibirCheckout, setExibirCheckout] = useState(false);
  const [total, setTotal] = useState('0,00');

  function adicionarProduto(produto){
    const objCarrinho = Object.assign({}, carrinho);
    let novoProduto = true;
    objCarrinho.produtos.forEach((prod, indice) => {
      if(prod.nome === produto.nome){
        objCarrinho.produtos [indice].quantidade ++;
        novoProduto = false;
      }
    });

    if(novoProduto){
      objCarrinho.produtos.push({
        nome:produto.nome, preco: produto.preco, quantidade: 1
      });
    }
    
    SetCarrinho(objCarrinho);
  }

  function handleExibirProdutos(){
    setExibirCheckout(false);
    setExibirProdutos(true);
  }

  function handleExibirCheckout(total) {
    setExibirCheckout(true);
    setExibirProdutos(false);
    setTotal(total)
  }

  function handleLimparCarrinho() {
    SetCarrinho({produtos: []});
  }

  return (
    <div>
      <Menu
        produtos={carrinho.produtos}
        handleExibirProdutos={handleExibirProdutos}
        handleExibirCheckout={handleExibirCheckout}/>
      <Produtos 
        visivel={exibirProdutos}
        adicionarProduto={adicionarProduto}/>
      <Checkout 
      visivel={exibirCheckout}
      handleExibirProdutos={handleExibirProdutos}
      total={total}
      produtos={carrinho}
      handleLimparCarrinho={handleLimparCarrinho}/>
    </div>
  );
}

export default Ecommerce;
