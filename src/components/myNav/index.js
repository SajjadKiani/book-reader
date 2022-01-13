import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "gatsby";

import * as React from "react";
import {useState} from "react";
import Canvas from "../canvas";

export default function MyNav (props) {

    const [show , setShow] = useState(false)

    return (
        <div className={'MyNav'}>
            <Navbar collapseOnSelect expand="sm" bg="" variant="light">
                <Container className={'mt-3'}>
                    <Navbar.Brand>
                        Blog
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className={'ms-auto'} defaultActiveKey="/">
                            <Link className={`nav-link ${props.path === '/' ? 'active' : ''}`} to={'/'}>Home</Link>
                            <Link className={`nav-link ${props.path === '/book' ? 'active' : ''}`} to={'/book'} >Book</Link>
                            <Link className={`nav-link ${props.path === '/about' ? 'active' : ''}`} to={'/about'} >About</Link>
                            <div className={'justify-content-start'}>
                                <Button className={'d-sm-none d-block'} variant={'outline-primary'} onClick={() => setShow(true)}>Contents</Button>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {props.data && <Canvas show={show} setShow={setShow} data={props.data} path={props.path}/>}
        </div>
    )
}