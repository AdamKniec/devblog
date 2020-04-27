import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Section } from "./index"
import Post from "../components/styled/PostBox"

const Blog = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <Section className="articles">
        {data.allMarkdownRemark.edges.map(post => {
          return (
            // <div key={post.node.id}>
            //   <h3>{post.node.frontmatter.title}</h3>
            //   <Link to={post.node.frontmatter.path}>Read More!</Link>
            // </div>
            <Post data={post} />
          )
        })}
      </Section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            date
            title
            author
          }
        }
      }
    }
  }
`

export default Blog
