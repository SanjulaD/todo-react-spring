import React, {useState} from 'react'
import {useHistory} from "react-router-dom";
import {Link} from 'react-router-dom'
import {
    Form,
    Button,
    Row,
    Col,
    Container
} from 'react-bootstrap'
import AuthenticationService from './../Auth/AuthenticationService.js'

const Login = () => {

    let history = useHistory();

    const [name, setname] = useState('')
    const [password, setPassword] = useState('')
    const [loginSuccess, setLoginSuccess] = useState(false)
    const [sucessMessage, setSuccessMesasge] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        if (name === 'Test' && password === '1234') {
            setLoginSuccess(true)
            AuthenticationService.registerSuccessfulLogin(name, password)
            history.push(`/welcome/${name}`)
        } else {
            setSuccessMesasge('Invalid Credentials')
        }
    }

    return (
        <Container>
            <Row>
                <Col md={3}></Col>
                <Col>
                    <h1 style={{marginTop: '120px'}}>Sign In</h1>
                    {
                        loginSuccess ? <p>{sucessMessage}</p> : <p>{sucessMessage}</p>
                    }
                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId='name'>
                            <Form.Label>Name <span style={{color: 'red'}}>*</span></Form.Label>
                            <Form.Control
                                type="name"
                                placeholder="Enter name"
                                value={name}
                                required
                                onChange={(e) => setname(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='password'>
                            <Form.Label>Password <span style={{color: 'red'}}>*</span></Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Button type="submit" variant="primary">Sign In</Button>
                    </Form>
                    <Row className='py-3'>
                        <Col style={{marginBottom: '30px'}}>
                            New Customer? <Link to='/register'>Register</Link>
                        </Col>
                    </Row>
                </Col>
                <Col md={3}></Col>
            </Row>
        </Container>
    )
}

export default Login
