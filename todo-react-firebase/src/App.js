import React, { useState, useEffect} from 'react';
import {Container, Row, Col, Spinner} from "react-bootstrap";
import {map, size} from "lodash";
import firebase from "./utils/firebase";
import "firebase/firestore";
import AddTask from "./components/AddTask";
import Task from "./components/Task";
import "./App.scss";


const db = firebase.firestore(firebase);

function App() {
  const [tasks, setTasks] = useState([]);
  const [reloadTasks, setReloadTasks] = useState(false);


  useEffect(() =>{
    db.collection("tasks").orderBy("completed").get().then((response) => {
      const arrayTasks = [];
      map(response.docs, (tasks) =>{
        const data = tasks.data();
        data.id = tasks.id;
        arrayTasks.push(data);
      });
      setTasks(arrayTasks);
    });
    setReloadTasks(false);
  }, [reloadTasks])


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

          {!tasks ? (
            <div className="loading">
              <Spinner animation="border"/>
              <span>Cargando.......</span>
            </div>
          ) : size(tasks) === 0 ?(
            <h3>No hay tareas</h3>
          ): (
            map(tasks, (task, index)=> <Task key={index} task={task} setReloadTasks={setReloadTasks}/>)
          )}



         {/* {map(tasks, (task, index)=> (
            <Task key={index} task={task}/>
         ))} */}


        </Col>

        <Col
        className="todo-input"
        xs={{span: 10, offset: 3}}
        md={{span: 6, offset: 3}}>
          <AddTask setReloadTasks={setReloadTasks}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
