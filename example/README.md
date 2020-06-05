# Gatsby Theme Web Monetization — Basic Example

Basic usage example of [gatsby-theme-web-monetization](https://github.com/ekafyi/gatsby-theme-web-monetization/) for a blog site.

I use the official Gatsby starter, plugins, and component shadowing from [this tutorial](https://www.gatsbyjs.org/tutorial/using-multiple-themes-together/). Then I continue with the steps below.

0) Install the theme.

```bash
yarn add gatsby-theme-web-monetization
# or npm install --save gatsby-theme-web-monetization
```

1) Add theme to gatsby-config. The order does not matter with the plugins used in this repo. If you use this with many other plugins and encounter issues, you may have to do some trial and error regarding the plugins order.

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-web-monetization`,
      options: {
        // Replace with your wallet's payment pointer
        paymentPointer: "$wallet.example.com/eka",
      },
    },
    // ... other themes
  ]
}
```

2) Add post with the Web Monetization components in `content/posts`. I also add a note with the same content in `content/notes` to see if everything works.

```mdx
---
title: Web Monetization test post
date: 2020-06-03
---

With gatsby-theme-web-monetization, you can add Web Monetization-related components to your MDX pages like this. _No need to import anything!_

<WebMonetizedStatus
  inactive={<strong>😔 Web Monetization is not running</strong>}
  style={{ marginBottom: 32 }}
/>

<WebMonetizedPaywall />

<IfWebMonetized>

Special content just for you. _Yes, you._

</IfWebMonetized>
```

Note: To make sure your Markdown content inside (as children of) a component is parsed (eg. inside `IfWebMonetized` above), make sure you leave an empty line before and after the content.