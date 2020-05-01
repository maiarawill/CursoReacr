import React from 'react';
import { Jumbotron, Button, Form, Col, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

function Conversor() {
  return (
    <div>
    <Jumbotron>
       <Form>
         <Form.Row>
           <Col sm='3'>
            <Form.Control 
              placeholder="0"
              value={1}
              required/>
           </Col>
           <Col sm='3'>
            <Form.Control as="select">
            </Form.Control>
           </Col>
           <Col sm='1' className="text-center" style={{paddingTop: "5px"}}>
            <FontAwesomeIcon icon={faAngleDoubleRight}/>
           </Col>
           <Col sm='3'>
            <Form.Control as="select">
            </Form.Control>
           </Col>
            <Button variant="success" type="submitt">
              Converter
            </Button>
           <Col sm='2'>
           </Col>
         </Form.Row>
       </Form>
    </Jumbotron>
    </div>
  );
}

export default Conversor;
