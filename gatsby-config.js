/*eslint no-template-curly-in-string:0*/
module.exports = {
  siteMetadata: {
    title: `Yaro Bagriy`,
    description: `Yaro Bagriy Personal Site`,
    author: `Yaro Bagriy`,
    siteUrl: `https://www.yarobagriy.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `yaro-bagriy`,
        short_name: `gct`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/profile-pic.png`,
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://yarobagriy.us1.list-manage.com/subscribe/post?u=87f79856d1ddc26090edc2c7d&amp;id=52994cf539", // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-137793015-7`,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`],
      },
    },
    `gatsby-plugin-offline`,
  ],
};
