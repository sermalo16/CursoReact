import React, {useState} from 'react'
import { Form , Button} from "react-bootstrap";
import {isEmpty} from "lodash";
import firebase from "../../utils/firebase";
import "firebase/firestore";
import { ReactComponent as Send} from "../../assets/send.svg";


import "./AddTask.scss";

const db = firebase.firestore(firebase);

export default function AddTask(props) {
    const [task, setTask] = useState("");
    const {setReloadTasks} = props;

    const onSubmit= (e) => {
        e.preventDefault();
        if(!isEmpty(task)) {
          db.collection("tasks").add({
            name: task,
            completed: false,
          }).then(() =>{
            setTask("");
            setReloadTasks(true);
          });
        }

    }

  return (
    <Form onSubmit={onSubmit} className="add-task">
        <input type="text" placeholder="Nueva tarea......" onChange={(e) => setTask(e.target.value)} value={task}/>
        <Button type="submit" >
            <Send/>
        </Button>
    </Form>
  )
}
