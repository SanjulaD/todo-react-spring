import React, {useEffect} from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import AuthenticationService from './../Auth/AuthenticationService.js'

const Header = () => {

    const isUserLoggedIn = AuthenticationService.isUserLoggedIn()

    useEffect(() => {
        AuthenticationService.isUserLoggedIn()
    }, [isUserLoggedIn])

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand className="nav-cal">
                <Navbar.Brand>To do Application</Navbar.Brand>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav justify-content-end" style={{float: "left"}}>
                <Nav className="mr-auto">
                    {
                        isUserLoggedIn && <LinkContainer to="/todos">
                            <Nav.Link className="nav-cal">HOME</Nav.Link>
                        </LinkContainer>
                    }
                    {
                        !isUserLoggedIn && <LinkContainer to="/login">
                            <Nav.Link className="nav-cal">LOGIN</Nav.Link>
                        </LinkContainer>
                    }
                    {
                        isUserLoggedIn && <LinkContainer to="/logout">
                            <Nav.Link className="nav-cal"
                                      onClick={AuthenticationService.logout}
                            >LOGOUT</Nav.Link>
                        </LinkContainer>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
