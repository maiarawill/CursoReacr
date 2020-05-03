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

  return (
    <div>
      <Menu />
      <Produtos />
      <Checkout />
    </div>
  );
}

export default Ecommerce;
