module.exports = {
  siteMetadata: {
    title: 'Visual Cloud FX',
    description:
      ' Web Development and Digital Marketing for the Digital Transformation',
    siteUrl: 'https://visualcloudfx.com',
    author: 'jacob-cavazos',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-svgr`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-material-design-for-bootstrap`,
        short_name: `Visual Cloud`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#68008C`,
        display: `standalone`,
        icon: `${__dirname}/src/images/LogoTransparent.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
  ],
}
