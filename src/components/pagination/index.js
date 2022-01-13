import * as React from "react";
import {PageItem, Pagination} from "react-bootstrap";
import {Link} from "gatsby";

import './style.css'

export default function Paginate ({data , path}) {

    const {nodes} = data.allMarkdownRemark

    let items = []

    nodes.forEach((node,i) => {
        items.push(
            <PageItem key={i} active={`/documents/${node.frontmatter.slug}` === path}>
                <Link className={'text-dark'} to={`/documents/${node.frontmatter.slug}`}>{i+1}</Link>
            </PageItem>,
        );
    })

    return (
        <Pagination className={'justify-content-center mt-5'}>
            {items}
        </Pagination>
    )
}