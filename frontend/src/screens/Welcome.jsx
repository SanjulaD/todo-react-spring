import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import HelloWorldService from './../api/todo/HelloWorldService.js'

const Welcome = ({ match }) => {

    const name = match.params.id

    const welcomeMessage = () => {
        HelloWorldService.executeHelloWorldService()
            .then(response => console.log(response))
    }

    return (
        <Container className="p-3" style={{ marginTop: "20px" }}>
            <h3 className="text-center" style={{ marginBottom: "30px" }}>Welcome {`${name}`}</h3>
            <p className="text-center">Click <Link to='/todos'>here</Link> to view your todos</p>
            <div className="text-center">
                <p>Click here to get a customized welcome message</p>
                <Button onClick={welcomeMessage}>Get Welcome Message</Button>
            </div>
        </Container>
    )
}

export default Welcome
