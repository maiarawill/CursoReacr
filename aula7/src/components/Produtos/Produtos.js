import React, { useState } from 'react';
import ListarProdutos from './ListarProdutos';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap';

function Produtos(props) {

    const [exibirMsg, setExibirMsg] = useState(false);
    const [produto, setProduto] = setState('');

    function visivel() {
        return props.visivel ? null : 'hidden';
    }

    function exibirMensagem(produto){
        setExibirMsg(true);
        setProduto(produto);
        setTimeout(() => {
            setExibirMsg(false)
        }, 3000);
    }

    return(
        <div className={visivel()}>
            <Alert
                variant="success"
                style={{margin: '10px'}}
                show={exibirMsg}>
                <b>{produto}</b> adicionado com sucesso ao carrinho
            </Alert>
            <ListarProdutos 
            exibirMensagem={exibirMensagem}
            adicionarProduto={adicionarProduto}/>
        </div>
    );
}

Produtos.propTypes = {
    visivel: PropTypes.bool.isRequired,
    adicionarProduto: PropTypes.func.isRequired
}

export default Produtos;