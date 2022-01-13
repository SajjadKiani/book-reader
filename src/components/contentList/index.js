import * as React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {graphql, Link} from "gatsby";

export default function ContentList ({data , path}) {

    const {nodes} = data.allMarkdownRemark

    return (
        <div className={'mt-5 border rounded-3'}>

            <Navbar bg="" variant="light">
                <Container>
                    <Nav className="flex-column">
                        <Navbar.Brand>Contents</Navbar.Brand>
                        {nodes.map(node => {
                            return <Link key={node.id} className={`nav-link ${path === `/documents/${node.frontmatter.slug}` ? 'active' : ''}`} to={`/documents/${node.frontmatter.slug}`}>{node.frontmatter.title}</Link>
                        })}
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export const query = graphql`
    query ContentList {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
            slug
          }
        id
        }
      }
    }
`