import React from "react"
import Link from "gatsby-link"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Section } from "../pages/index"

const Template = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <Section>
        <h1>{post.frontmatter.title}</h1>
        <h4>Posted by {post.frontmatter.author}</h4>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
        <Link to="/blog">Go back</Link>
      </Section>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`

export default Template
