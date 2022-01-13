import * as React from "react";
import MyNav from "../../components/myNav";
import {Button, Container} from "react-bootstrap";
import {Link} from "gatsby";

export default function Book (props) {

    return (
        <div>
            <MyNav path={props.location.pathname}/>
            <Container>
                <h1>Book</h1>

                <Link to={'/documents/chapter0'}><Button variant={'outline-primary rounded-pill'}>Start</Button></Link>

            </Container>

        </div>
    )
}