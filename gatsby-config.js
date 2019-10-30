module.exports = {
  siteMetadata: {
    title: `Brian Friel`,
    author: `Brian Friel`,
    description: `Brian Friel is a San Francisco-based frontend developer and product manager`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.com/`,
    social: {
      twitter: `brianfriel_`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Brian Friel`,
        short_name: `BrianFriel`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/favicon-32x32.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // {
    //   resolve: "gatsby-source-goodreads",
    //   options: {
    //     developerKey: "A9w8xewykvBqDRUM6Qvbg",
    //     goodReadsUserId: "104343871",
    //     userShelf: "currently-reading", //optional
    //   }
    // },
    // {
    //   resolve: "gatsby-source-goodreads",
    //   options: {
    //     developerKey: "A9w8xewykvBqDRUM6Qvbg",
    //     goodReadsUserId: "104343871",
    //     userShelf: "changed-the-way-i-think", //optional
    //   }
    // },
    {
      resolve: "@jamesdanylik/gatsby-source-goodreads",
      options: {
        key: "A9w8xewykvBqDRUM6Qvbg",
        id: "104343871",
      }
    },
  ],
}
