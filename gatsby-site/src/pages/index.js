import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>"A domestic person who learns stuff, applies it in real world, and documents his learning."</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
