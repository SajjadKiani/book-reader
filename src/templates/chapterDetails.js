import * as React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {graphql} from "gatsby";
import MyNav from "../components/myNav";
import ContentList from "../components/contentList";
import Paginate from "../components/pagination";

export default function chapterDetails (props) {

    const {data} = props

    const {html} = data.markdownRemark
    const {title} = data.markdownRemark.frontmatter

    const { location } = props;

    return (
        <div>
            <MyNav data={data} path={location.pathname}/>
            <Container className={'col-sm-10'}>
                <Row className={'justify-content-between'}>
                    <Col md={3} className={'d-none d-md-block'}>
                        <ContentList data={data} path={location.pathname} />
                    </Col>
                    <Col md={8}>
                        <h1 className={'display-5 text-center'}>{title}</h1>
                        <div className={'mt-3'} dangerouslySetInnerHTML={{__html: html}}>
                        </div>

                        <Paginate data={data} path={location.pathname} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export const query = graphql`
    query ChapterDetails($slug: String) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
            html
            frontmatter {
                title
            }
        }
        
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