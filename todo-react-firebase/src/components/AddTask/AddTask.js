import React, {useState} from 'react'
import { Form , Button} from "react-bootstrap";
import {isEmpty} from "lodash";
import firebase from "../../utils/firebase";
import "firebase/firestore";
import { ReactComponent as Send} from "../../assets/send.svg";


import "./AddTask.scss";

const db = firebase.firestore(firebase);

export default function AddTask() {
    const [task, setTask] = useState("");

    const onSubmit= (e) => {
        e.preventDefault();
        if(!isEmpty(task)) {

        }

    }

    console.log(task);
  return (
    <Form onSubmit={onSubmit} className="add-task">
        <input type="text" placeholder="Nueva tarea......" onChange={(e) => setTask(e.target.value)}/>
        <Button type="submit" >
            <Send/>
        </Button>
    </Form>
  )
}
