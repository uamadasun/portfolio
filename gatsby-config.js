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
  `gatsby-transformer-sharp`, // Needed for dynamic images
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      // The unique name for each instance
      name: `notes`,
      // Path to the directory
      path: `${__dirname}/src/notes/`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      // The unique name for each instance
      name: `images`,
      // Path to the directory
      path: `${__dirname}/src/images/`,
    },
  },

],

  siteMetadata: {
    title: 'Uchenna Web Developer',
    description: 'Full Stack web developer portfolio',
    copyright: "This website is copyright 2023 Uchenna.io",
    contact: 'info@uchenna.io'

  }
}
