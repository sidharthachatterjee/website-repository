import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'

import './404.scss'

const NotFoundPage = () => (
  <Layout noFooter>
    <SEO title="404: Not found" />
    <div className="lyt-404">
      <div className="lyt-404_Inner">
        <div className="lyt-404_Body">
          <h1 className="lyt-404_Title">NOT FOUND</h1>
          <p className="lyt-404_Text">You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
