
import 'bootstrap/dist/css/bootstrap.min.css';

import {Container} from "react-bootstrap";
import * as React from "react";
import MyNav from "../components/myNav";

export default function Home(props) {
  return (
      <div>
        <MyNav path={props.location.pathname} />
        <Container>
          <h1>Hello World</h1>
        </Container>
      </div>
  )
}