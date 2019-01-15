import React from 'react'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'

import './page.scss'

class Privacy extends React.Component {
  render () {
    return (
      <Layout>
        <SEO title="Privacy policy" />
        <div className="lyt-Page">
          <div className="lyt-Page_Inner">
            <div className="lyt-Page_Body">
              privacy
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Privacy
