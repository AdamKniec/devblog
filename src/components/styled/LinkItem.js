import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const StyledLink = styled(props => <Link {...props} />)`
  color: white;
  text-decoration: none;
`
