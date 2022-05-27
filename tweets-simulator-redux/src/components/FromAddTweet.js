import React, { useState}  from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useDispatch, useSelector} from "react-redux";
import { validationFormAddTweetAction } from "../actions/validationAction";
import { addTweetAction } from "../actions/tweetAction";
import {openCloseAddTweetModalActions} from "../actions/modalsActions"
import {v4} from "uuid";
import moment from "moment";

export default function FormAddTweet(){
    const [ formValue, setFormValue] = useState({
        name: "",
        tweet: ""
    });

    // inicializacion del dispatch y ejecucion de las acciones
    const dispatch = useDispatch();
    const errorForm = state => dispatch(validationFormAddTweetAction(state));
    const addTweet = state => dispatch(addTweetAction(state));
    const closeModal = state => dispatch(openCloseAddTweetModalActions(state));

    //obtener estad de la validacion del formulario
    const errorFormValue = useSelector(state => state.validation.errorFormAddTweet);


    const onChange = e =>{
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = e=>{
        e.preventDefault();

        const {name, tweet} = formValue;

        if(!name || !tweet){
            errorForm(true);
        }else{
            errorForm(false);
            addTweet({
                id: v4(),
                name,
                tweet,
                date: moment()
            });
            closeModal(false);
        }
    }

    return (
        <Form className="m-3" onChange={onChange} onSubmit={onSubmit}>
            <Form.Group className="text-center">
                <h1>Nuevo Tweet</h1>
            </Form.Group>

            <Form.Group>
                <Form.Control type="text" name="name" placeholder="Escribe tu nombre"/>
            </Form.Group>

            <Form.Group>
                <Form.Control
                as="textarea"
                name="tweet"
                row="3"
                placeholder="Escribe tu tweet"
                />
            </Form.Group>

            <Button variant="primary" type="submit">Enviar</Button>

            {errorFormValue && (
                <Alert variant="danger" className="mt-4">Todos los campos son obligatorios</Alert>
            )}
        </Form>
    )
}