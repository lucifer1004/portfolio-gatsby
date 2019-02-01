import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About me</h1>
    <p>
      Gabriel Wu is currently a Ph.D. candidate at Peking University, majoring
      in remote sensing.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
