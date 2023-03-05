/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [`gatsby-plugin-anchor-links`, `gatsby-plugin-smoothscroll`,

],

  siteMetadata: {
    title: 'Uchenna Web Developer',
    description: 'Full Stack web developer portfolio',
    copyright: "This website is copyright 2023 Uchenna.io",
    contact: 'info@uchenna.io'

  }
}
