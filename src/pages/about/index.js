import * as React from "react";
import {Container} from "react-bootstrap";
import MyNav from "../../components/myNav";

export default function About (props) {
    return (
        <div>
            <MyNav path={props.location.pathname}/>
            <Container>
                <h1>About</h1>
            </Container>
        </div>
    )
}