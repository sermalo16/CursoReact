import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import AddTask from "./components/AddTask";


import "./App.scss";


function App() {
  return (
    <Container fluid className="app">
      <div className="title">
        <h1>Agustin Navarro Galdon</h1>
      </div>

      <Row className="todo">
        <Col 
        className="todo-title"
        xs={{span: 10, offset: 3}}
        md={{span: 6, offset: 3}}>
          <h2>Today</h2>
        </Col>

        <Col
        className="todo-list"
        xs={{span: 10, offset: 3}}
        md={{span: 6, offset: 3}}>
          <p>Lista de tareas</p>
        </Col>

        <Col
        className="todo-input"
        xs={{span: 10, offset: 3}}
        md={{span: 6, offset: 3}}>
          <AddTask/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
