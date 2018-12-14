import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'

import './page.scss'

class Terms extends React.Component {
  render () {
    return (
      <Layout>
        <SEO title="Terms & conditions" />
        <div className="lyt-Page">
          <div className="lyt-Page_Inner">
            <div className="lyt-Page_Body">
              terms
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Terms
