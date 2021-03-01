import React, { useEffect, useState } from 'react'
import { Container, Table, Button, Alert} from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import AuthenticationService from './../Auth/AuthenticationService.js'
import ToDoDataService from './../api/todo/ToDoDataService'
const TodoSection = () => {

    const [todos, setTodos] = useState([])
    const [mesg, setMesg] = useState(null)

    let history = useHistory();
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn()
    const userName = AuthenticationService.getLoggerUserName()

    useEffect(() => {
        if (!isUserLoggedIn) {
            history.push('/login')
        }
        refreshTodos()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isUserLoggedIn, history, userName])

    const deleteClicked = (id, username) => {
        ToDoDataService.deleteTodo(username, id)
            .then(
                setMesg(`Deleted of todo ${id} Successfully`),
                refreshTodos()
            )
    }

    const deleteTodo = (id) => {
        history.push(`/todos/${id}`)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const refreshTodos = () => {
        ToDoDataService.retrieveAllTodos(userName)
            .then(response => { setTodos(response.data) })
    }

    return (
        <Container style={{ marginTop: "20px" }}>
            <h3 className="text-center" style={{ marginBottom: "30px" }}>Todos Here</h3>
            { mesg && <Alert variant="warning">{mesg}</Alert>}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Description</th>
                        <th>is Completed?</th>
                        <th>Date</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map((todos) => (
                            <tr key={todos.id}>
                                <td>{todos.id}</td>
                                <td>{todos.description}</td>
                                <td>{todos.done.toString()}</td>
                                <td>{todos.targetDate.toLocaleString().split('T')[0]}</td>
                                <td>
                                    <Button variant="success" onClick={() => deleteTodo(todos.id)}>Update</Button>
                                </td>
                                <td>
                                    <Button variant="warning" onClick={() => deleteClicked(todos.id, userName)}>Delete</Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Container>
    )
}

export default TodoSection
