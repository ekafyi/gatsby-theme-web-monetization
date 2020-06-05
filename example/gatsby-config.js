module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-web-monetization`,
      options: {
        // Replace with your wallet's payment pointer
        paymentPointer: "$wallet.example.com/eka",
      },
    },
    `@pauliescanlon/gatsby-mdx-embed`,
    {
      resolve: `gatsby-theme-notes`,
      options: {
        basePath: `/notes`,
      },
    },
    `gatsby-theme-blog`,
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Web Monetized Blog`,
    author: `@ekafyi`,
    description: `Gatsby Web Monetization Theme Example — Basic Blog Site`,
    social: [
      {
        name: `github`,
        url: `https://github.com/ekafyi/gatsby-theme-web-monetization/tree/master/example`,
      },
    ],
  },
}
