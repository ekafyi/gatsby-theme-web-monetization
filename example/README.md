# Gatsby Theme Web Monetization — Basic Example

_Basic usage example of [gatsby-theme-web-monetization](https://github.com/ekafyi/gatsby-theme-web-monetization/) for a blog site._

[🔗 Demo](http://gtwm-example-blog.netlify.app)

---

## How to use


1. Clone [the starter site](https://github.com/ekafyi/gatsby-starter-web-monetization-theme-blog) to make a new site from this example
	* …or use the Gatsby CLI, `gatsby new my-monetized-site https://github.com/ekafyi/gatsby-starter-web-monetization-theme-blog`
	* …or use the [Netlify one-click deploy](https://app.netlify.com/start/deploy?repository=https://github.com/ekafyi/gatsby-starter-web-monetization-theme-blog)
2. Add your payment pointer in `gatsby-config.js`
3. Add your content in `content`
4. ??
5. Profit

Head to the [Theme Documentation](https://github.com/ekafyi/gatsby-theme-web-monetization) for more information on usage.

## ⚠️ Warning

This example serves as an MVP which aims to demonstrates how the Web Monetization API works.

Wrapping your “exclusive” (monetized-only) content in the `IfWebMonetized` component _is not secure_. The content still gets sent, just not rendered; it will be easy for tech-savvy visitors to find it. Don’t use it for sensitive data, and consider using serverless/cloud functions for better security.

## How I made this example site

In this site, I combine gatsby-theme-web-monetization with Gatsby’s official blog and note themes. I use the official Gatsby starter, plugins, and component shadowing from [this tutorial](https://www.gatsbyjs.org/tutorial/using-multiple-themes-together/). Then I continue with the steps below.

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
