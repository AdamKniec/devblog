import React from "react"
import { Nav } from "./styled/Nav"
import { List } from "./styled/List"
import { ListItem } from "./styled/ListItem"
import { StyledLink } from "./styled/LinkItem"

const Navbar = () => {
  return (
    <Nav>
      <List>
        <ListItem>
          <StyledLink to="/">Home</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="/blog">Blog</StyledLink>
        </ListItem>
      </List>
    </Nav>
  )
}

export default Navbar
