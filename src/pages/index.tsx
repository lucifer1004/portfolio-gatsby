import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>This is my portfolio</p>
    <div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}>
      <Image />
    </div>
    <p>Other versions:</p>
    <ul>
      <li>
        <a href="https://portfolio-ng.gabriel-wu.com">Angular</a>
      </li>
      <li>
        <a href="https://portfolio-vue.gabriel-wu.com">Vue</a>
      </li>
      <li>
        <a href="https://portfolio-cycle.gabriel-wu.com">Cycle</a>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
