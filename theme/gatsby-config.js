module.exports = options => {
  const { paymentPointer = "" } = options
  return {
    plugins: [
      paymentPointer && {
        resolve: `gatsby-plugin-web-monetization`,
        options: {
          paymentPointer,
        },
      },
    ].filter(Boolean),
  }
}
