<h1 align="center">Gatsby Theme Web Monetization</h1>

<div align="center">
  <p><em>Set up Web Monetization on your Gatsby site in 5 minutes</em> 🤑</p>
	<a href="https://www.npmjs.com/package/gatsby-theme-web-monetization" rel="external" aria-label="NPM package">
	  <img src="https://img.shields.io/npm/v/gatsby-theme-web-monetization.svg" alt="NPM" />
	</a>
</div>

## Features

- 💸 Accept payment stream via the [Web Monetization API](https://webmonetization.org) on your website/app
- 💙 Display _monetization status_, _call to action_ banner, and show _exclusive content_ to users with Web Monetization
- 😎 No imports required! (for MDX content)

## Web Monetization?

> Web Monetization provides an open, native, efficient, and automatic way to compensate creators, pay for API calls, and support crucial web infrastructure.

Web Monetization is _”a JavaScript browser API which allows the creation of a payment stream from the user agent to the website”_. Learn more about the API and about Interledger as the transfer protocol on [webmonetization.org](https://webmonetization.org).

## Installation

### New site

```sh
# create a new site at the directory "my-monetized-site"
gatsby new my-monetized-site https://github.com/ekafyi/starter-web-monetized-theme
```

Go to your site directory, open `gatsby-config.js`, and modify the `paymentPointer` option with your own wallet’s payment pointer.

### Existing site

1. Install the theme 

```bash
npm install gatsby-theme-web-monetization
# or yarn add gatsby-theme-web-monetization
```

2. Add the configuration to your `gatsby-config.js` file

```js
// gatsby-config.js
module.exports = {
  // ... other stuff
  plugins: [
    // ... other plugins
    {
      resolve: `gatsby-theme-web-monetization`,
      options: {
        paymentPointer: "$wallet.example.com/eka" // Your wallet's payment pointer
      },
    },
  ]
}
```

## Usage

⚠️ Important ⚠️ To accept payment, you have to __set up a web monetized wallet and get your payment pointer__ (steps 1-2 in the [Quick Start Guide](https://webmonetization.org/docs/getting-started.html)).

### Theme Options

This theme only has one (optional) option, `paymentPointer`. Your payment pointer should be in this format: `$wallet.example.com/eka`.

If you skip this option, _you have to add the monetization metadata yourself_ as shown in [Steps 3 - 4 in this guide](https://webmonetization.org/docs/getting-started.html#3-create-your-meta-tag). You should do this if, for instance, you’d like to enable monetization only in some parts of your site.

### Components

As long as your metadata has a valid payment pointer, you _don’t_ need any particular component to receive payments. That said, this theme provides these handy UI components to give you a quick start in telling your users about your new web monetized site 😌.

#### WebMonetizedStatus

Display content based on user’s Web Monetization status. [Usage and props](https://github.com/ekafyi/react-web-monetization-ui/blob/master/README.md#1-webmonetizedstatus)

```jsx
<WebMonetizedStatus
  active='Yay! Web Monetization is active!'
  inactive='Web Monetization is inactive'
/>
```

#### WebMonetizedPaywall

Display “paywall” content (eg. description and call-to-action) users without active Web Monetization. [Usage and props](https://github.com/ekafyi/react-web-monetization-ui/blob/master/README.md#2-webmonetizedpaywall)

```jsx
<WebMonetizedPaywall 
  title="Sorry, you cannot see this content"
  body="Want to know the answer to the ultimate question of life, the universe, and everything? Enable Web Monetization now."
/>
```

#### IfWebMonetized

The opposite of `WebMonetizedPaywall`—display content to users with active Web Monetization. 

```jsx
<IfWebMonetized>
  The answer to the ultimate question of life, the universe, and everything is <strong>42</strong>.
</IfWebMonetized>
```

This component comes from [react-web-monetization](https://github.com/sharafian/react-web-monetization), which this theme uses as dependency. As such, all components from the library is available for you to import without you having to install the package on your site.

### Using in MDX

This theme wraps your site with an `MDXProvider`, so you should be able to use all the components right away in your MDX pages—no imports needed.

```mdx
---
title: Example Post
date: 2020-06-03
---

Hello world! Why did the chicken cross the road?

<WebMonetizedPaywall />

<IfWebMonetized>
  To get to the other side.
</IfWebMonetized>
```

### Importing components

You can import the components to use elsewhere outside MDX, or for creating customized components to pass to your own `MDXProvider`.

```js
// my-component.js
import React from "react";
import { WebMonetizedStatus, WebMonetizedPaywall, MdxWebMonetizationProvider } from "gatsby-theme-web-monetization";
import { IfWebMonetized, useMonetizationCounter } from "react-web-monetization"; // You can import anything from https://github.com/sharafian/react-web-monetization
```

This theme has been tested to work with another theme that also wraps the site with an `MDXProvider`, [gatsby-mdx-embed](https://www.gatsbyjs.org/packages/@pauliescanlon/gatsby-mdx-embed/); but in case the Provider does not work, you can import `MdxWebMonetizationProvider` and wrap your `MDXRenderer` in your own layout component manually.

## Examples

- Basic example 
	- With Gatsby’s official [blog](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-theme-blog) and [notes](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-theme-notes) theme
	- [Demo](http://gtwm-example-blog.netlify.app)
	- [Starter](https://github.com/ekafyi/gatsby-starter-web-monetization-theme-blog)
- Portfolio site example 
	- With [@LekoArts/gatsby-theme-emilia](https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-emilia)
	- [Demo](http://gtwm-example-portfolio.netlify.app)
	- [Starter](https://github.com/ekafyi/gatsby-starter-web-monetization-theme-portfolio)

---

<p align="center">
	Get earning! 🤞🏽
</p>
