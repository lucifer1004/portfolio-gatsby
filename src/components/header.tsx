import {Link} from 'gatsby'
import React from 'react'
import {jsx} from '@emotion/core'

const Header = ({siteTitle = ``}) => (
  <header
    css={theme => ({color: theme.color})}
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        display: `flex`,
        justifyContent: `center`,
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{color: `white`, margin: `0 10px`}}>{siteTitle}</h1>
      <h1 style={{margin: `0 10px`}}>
        <Link to="/" style={{color: `pink`, textDecoration: `none`}}>
          Home
        </Link>
      </h1>
      <h1 style={{margin: `0 10px`}}>
        <Link to="/about/" style={{color: `pink`, textDecoration: `none`}}>
          About
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
