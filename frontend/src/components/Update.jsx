import React, { useEffect, useState } from 'react'
import {
    Form,
    Button,
    Row,
    Col,
    Container
} from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import AuthenticationService from './../Auth/AuthenticationService.js'
import ToDoDataService from './../api/todo/ToDoDataService'
const Update = ({ match }) => {

    let history = useHistory();
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn()
    const userName = AuthenticationService.getLoggerUserName()
    const id = match.params.id

    const [description, setDescription] = useState('')
    const [targetDate, setTargetDate] = useState('')
    const [completed, setCompleted] = useState('')

    useEffect(() => {
        if (!isUserLoggedIn) {
            history.push('/login')
        }
        ToDoDataService.retrieveToDo(userName, id)
            .then(response => {
                setDescription(response.data.description)
                setTargetDate(response.data.targetDate)
                setCompleted(response.data.done)
            })
    }, [isUserLoggedIn, userName, id, history])

    const submitHandler = (e) => {
        ToDoDataService.updateTodo(userName, id, {
            id: id,
            description: description,
            targetDate: targetDate,
            completed: completed
        }).then(() => {
            history.push('/todos')
        })
    }

    return (
        <Container>
            <Row>
                <Col md={3}></Col>
                <Col>
                    <h1 style={{ marginTop: '40px' }}>List Todo</h1>
                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId='name'>
                            <Form.Label>Description <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control
                                type="name"
                                value={description}
                                placeholder="Enter description"
                                required
                                onChange={(e) => setDescription(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='password'>
                            <Form.Label>Target Date <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter target date"
                                required
                                value={targetDate.toLocaleString().split('T')[0]}
                                onChange={(e) => setTargetDate(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='password'>
                            <Form.Label>Current Status <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Status"
                                required
                                value={completed}
                                onChange={(e) => setCompleted(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Button type="submit" variant="success">Update</Button>
                    </Form>
                </Col>
                <Col md={3}></Col>
            </Row>
        </Container>
    )
}

export default Update
