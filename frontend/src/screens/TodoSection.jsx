import React, {useEffect} from 'react'
import {Container, Table} from 'react-bootstrap'
import Todo from '../components/Todo'
import {useHistory} from "react-router-dom";
import todos from './../data/todo'
import AuthenticationService from './../Auth/AuthenticationService.js'

const TodoSection = () => {

    let history = useHistory();
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn()

    useEffect(() => {
        if (!isUserLoggedIn) {
            history.push('/login')
        }
    }, [isUserLoggedIn, history])

    return (
        <Container style={{marginTop: "20px"}}>
            <h3 className="text-center" style={{marginBottom: "30px"}}>Todos Here</h3>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Topic</th>
                    <th>Description</th>
                    <th>Completed</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                {
                    todos.map((todo) => (
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            topic={todo.topic}
                            description={todo.description}
                            done={todo.done.toString()}
                            date={todo.targetDate.toLocaleString().split(',')[0]}
                        />
                    ))
                }
                </tbody>
            </Table>
            <Todo/>
        </Container>
    )
}

export default TodoSection
