import React, { useState } from 'react';
import { Jumbotron, Button, Form, Col, Spinner, Alert, Modal} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import ListarMoedas from './listar-moedas';
import './App.css';

function Conversor() {

  const [valor, setValor] = useState('1');
  const [moedaDe, setMoedaDe] = useState('BRL');
  const [moedaPara, setMoedaPara] = useState('USD');
  const [exibirSpinner, setExibirSpinner] = useState(false);


  function handleValor(event) {
    setValor(event.target.value.replace(/\D/g, ''));
  };

  function handleMoedaDe(event) {
    setMoedaDe(event.target.value);
  };

  function handleMoedaPara(event) {
    setMoedaPara(event.target.value);
  };

  function converter(event){ 
    event.preventDefault()

  }

  return (
    <div>
    <h1>Conversor de Moedas</h1>
    <Alert variant="danger" show={false}>
      Erro obtendo dados de conversão, tente novamente
    </Alert>
    <Jumbotron>
       <Form onSubmit={converter} noValidate>
         <Form.Row>
           <Col sm='3'>
            <Form.Control 
              placeholder="0"
              value={valor}
              onChange={handleValor}
              required/>
           </Col>
           <Col sm='3'>
            <Form.Control as="select"
              value={moedaDe}
              onChange={handleMoedaDe}>
              <ListarMoedas />
            </Form.Control>
           </Col>
           <Col sm='1' className="text-center" style={{paddingTop: "5px"}}>
            <FontAwesomeIcon icon={faAngleDoubleRight}/>
           </Col>
           <Col sm='3'>
            <Form.Control as="select"
            value={moedaPara}
            onChange={handleMoedaPara}>
            <ListarMoedas />
            </Form.Control>
           </Col>
            <Button variant="success" type="submitt">
              <spam className={exibirSpinner ? null : 'hidden'}> 
              <Spinner animation="border" size="sm" />
              </spam>
              <spam className={exibirSpinner ? 'hidden' : null}>
              Converter
              </spam>
            </Button>
           <Col sm='2'>
           </Col>
         </Form.Row>
       </Form>

       <Modal show={false}>
          <Modal.Header closeButton>
            <Modal.Title>Conversão</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Resultado da conversão aqui...
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success">
              Nova conversão
            </Button>
          </Modal.Footer>
       </Modal>
    </Jumbotron>
    </div>
  );
}

export default Conversor;
