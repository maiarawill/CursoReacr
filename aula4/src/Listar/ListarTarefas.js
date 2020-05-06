import React, { useState, useEffect } from 'react';
import { A } from 'hookrouter';
import { Table, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ItensListaTarefas from './Itens/ItensListaTarefas';
import Paginacao from './Paginacao/Paginacao';
import Ordenacao from './Ordenacao/ordenacao'

function ListarTarefas() {

  const ITENS_POR_PAG = 3;

  const [tarefas, setTarefas] = useState([]);
  const [carregarTarefas, setCarregarTarefas] = useState(true);
  const [totalItens, setTotalItens] =useState(0);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [ordenarAsc, setOrdenarAsc] = useState(false);
  const [ordenarDesc, setOrdenarDesc] = useState(false);


    useEffect(() => {
    function obterTarefas() {
      const tarefasDb = localStorage['tarefas'];
      let listarTarefas = tarefasDb ? JSON.parse(tarefasDb) : [];
      if(ordenarAsc){
        listarTarefas.sort((t1, t2) =>(t1.nome.toLowerCase() > t2.nome.toLowerCase() ? 1 : -1));
      }else if(ordenarDesc){
        listarTarefas.sort((t1, t2) =>(t1.nome.toLowerCase() < t2.nome.toLowerCase() ? 1 : -1));
      }
      setTotalItens(listarTarefas.length);
      setTarefas(listarTarefas.splice((paginaAtual - 1) * ITENS_POR_PAG, ITENS_POR_PAG));};
      
    if(carregarTarefas) {
      obterTarefas();
      setCarregarTarefas(false);}
    }, [carregarTarefas, paginaAtual, ordenarDesc, ordenarAsc]);

    function handleMudarPagina(pagina){
      setPaginaAtual(pagina);
      setCarregarTarefas(true);
    }

    function handleOrdernar(event){
      event.preventDefault();
      if (!ordenarAsc && !ordenarDesc) {
        setOrdenarAsc(true);
        setOrdenarDesc(false);
      } else if(setOrdenarAsc){
        setOrdenarAsc(false);
        setOrdenarDesc(true);
      }else {
        setOrdenarAsc(false);
        setOrdenarDesc(false);
      }
      setCarregarTarefas(true);
    }

    return (
        <div className="text-center">
      <h3>Tarefas a fazer</h3>
      <Table striped bordered hover responsive data-testid="tabela">
        <thead>
          <tr>
            <th>
              <a href="/" onClick={handleOrdernar}>Tarefa
              &nbsp;
              <Ordenacao
              ordenarAsc={ordenarAsc}
              ordenarDesc={ordenarDesc}/>
              </a>
            </th>
            <th>
              <A href="/cadastrar"
                className="btn btn-success btn-sm"
                data-testid="btn-nova-tarefa">
                <FontAwesomeIcon icon={faPlus} />
                &nbsp;
                Nova tarefa
              </A>
            </th>
        </tr>
        </thead>
        <tbody>
          <ItensListaTarefas 
          tarefas={tarefas}
          recarregarTarefas={setCarregarTarefas}/>
        </tbody>
      </Table>
      <Paginacao
      totalItens={totalItens}
      itensPorPagina={ITENS_POR_PAG}
      paginaAtual={paginaAtual}
      mudarPagina={handleMudarPagina} />
      </div>
    );

}

export default ListarTarefas;