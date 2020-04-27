import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"

const Post = ({ data: { node } }) => {
  const PostContainer = styled.div`
    background-color: wheat;
    height: 250px;
  `
  return (
    <PostContainer key={node.id}>
      <div></div>
      <h3>{node.frontmatter.title}</h3>
      <Link to={node.frontmatter.path}>Read More!</Link>
    </PostContainer>
  )
}

export default Post
