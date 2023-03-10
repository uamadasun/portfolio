/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [`gatsby-plugin-anchor-links`, `gatsby-plugin-smoothscroll`, `gatsby-transformer-remark`,`gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      // The unique name for each instance
      name: `images`,
      // Path to the directory
      path: `${__dirname}/src/images/`,
    },
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "./static/logoPink.png"
    }
  }
  

],

  siteMetadata: {
    title: 'Uchenna Web Developer',
    description: 'Full Stack web developer portfolio',
    copyright: "This website is copyright 2023 Uchenna.io",
    contact: 'info@uchenna.io'

  }
}
