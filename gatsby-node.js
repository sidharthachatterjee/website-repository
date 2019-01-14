const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const terms = path.resolve(`src/templates/policy.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___path] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: terms,
        context: {}, // additional data can be passed via context
      })
    })
  })
}
