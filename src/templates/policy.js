import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout/layout'

import SEO from '../components/seo'
import '../pages/page.scss'
import '../styles/wysiwyg.scss'

export default function Policy({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div className="lyt-Page">
        <div className="lyt-Page_Inner">
          <div className="lyt-Page_Body">
            <div
              className="lyt-Page_Content wys-WYSIWYG"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
