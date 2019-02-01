import React from 'react'
import {ThemeProvider} from 'emotion-theming'

// object-style theme

const theme = {
  backgroundColor: 'green',
  color: 'red',
}

// function-style theme; note that if multiple <ThemeProvider> are used,
// the parent theme will be passed as a function argument

export default ({children}: {children: JSX.Element}) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
