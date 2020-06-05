/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import { Link } from "gatsby"
import { jsx, Styled, css } from "theme-ui"
import OriginalHeader from "gatsby-theme-blog/src/components/header"

const linkStyle = {
  px: 1,
  mx: 2,
  fontFamily: `heading`,
  fontWeight: `bold`,
  textDecoration: `none`,
  "&:hover": {
    borderBottom: `4px solid coral`,
  },
  "&.active": {
    borderBottom: `4px solid currentColor`,
  },
}

const Header = props => (
  <>
    <OriginalHeader {...props} />
    <nav sx={{ textAlign: "center", mt: -2 }}>
      <Styled.a css={css(linkStyle)} as={Link} activeClassName="active" to="/">
        Posts
      </Styled.a>
      <Styled.a
        css={css(linkStyle)}
        as={Link}
        activeClassName="active"
        to="notes"
      >
        Notes
      </Styled.a>
    </nav>
  </>
)

export default Header
