module.exports = {
  siteMetadata: {
    title: `Clark Newell`,
    description: `portfolio and tech blog`,
    author: `@WCNewell`,
    siteUrl: `https://www.clarknewell.tech`,
  },
  plugins: [
    {
      resolve: `gatsby-source-sanity`,
        options: {
          projectId: 'ry5jtz8e',
          dataset: 'production',
          watchMode: true,
          token: process.env.SANITY_TOKEN,  
        },
      },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/clark-logo-white.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
