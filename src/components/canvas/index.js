import * as React from "react";
import {Container, Nav, Navbar, Offcanvas} from "react-bootstrap";
import {graphql, Link} from "gatsby";

export default function Canvas ( {show , setShow , data,path} ) {

    const handleClose = () => setShow(false);

    const nodes = data.allMarkdownRemark.nodes

    return (
        <>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Contents</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Navbar bg="" variant="light">
                        <Nav className="flex-column">
                            {nodes.map(node => {
                                return <Link key={node.id} className={`nav-link ${path === `/documents/${node.frontmatter.slug}` ? 'active' : ''}`} to={`/documents/${node.frontmatter.slug}`}>{node.frontmatter.title}</Link>
                            })}
                        </Nav>
                    </Navbar>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}