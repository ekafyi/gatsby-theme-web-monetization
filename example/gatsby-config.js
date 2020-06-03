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
    title: `Gatsby Web Monetization Theme Example`,
    author: `@ekafyi`,
    description: `Example site that uses gatsby-theme-web-monetization`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/gatsbyjs`,
      },
      {
        name: `github`,
        url: `https://github.com/gatsbyjs`,
      },
    ],
  },
}
