import React from 'react';
import {render} from '@testing-library/react';
import Itens from './Itens';

describe('Teste do componente de Itens', () =>{
    it ('deve renderizar o carrinho vazio', () => {
        const { getByTestId } = render(<Itens produtos={[]}/>);
        expect (getByTestId('itens')).toHaveTextContent('Carrinho vazio...')
    });

    it('deve renderizar o carrinhon com um produto', () => {
        const produtos = [{ nome: 'Aprenda React', preco: 'R$59,99', quantidade: 1}];
        const { getByTestId } = render(<Itens produtos={produtos}/>);
        expect( getByTestId(produtos[0].nome)).toHaveTextContent('Aprenda React - 1 x R$59,99')
    });

    it('deve renderizar o carrinho com multiplos produtos', () =>{
        const produtos = [
            {nome: 'Aprenda React', preco: 'R$59,99', quantidade: 1},
            {nome: 'Aprenda Java', preco: 'R$30,00', quantidade: 2}];
        const {getByTestId} = render(<Itens produtos={produtos}/>);
        expect( getByTestId(produtos[0].nome)).toHaveTextContent('Aprenda React - 1 x R$59,99');
        expect( getByTestId(produtos[1].nome)).toHaveTextContent('Aprenda Java - 2 x R$30,00')
    })
});