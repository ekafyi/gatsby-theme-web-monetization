import React from "react"
import { MDXProvider } from "@mdx-js/react"

import { IfWebMonetized } from "react-web-monetization"
import {
  WebMonetizedPaywall,
  WebMonetizedStatus,
} from "react-web-monetization-ui"

const components = {
  IfWebMonetized,
  WebMonetizedPaywall,
  WebMonetizedStatus,
}

export const MdxWebMonetizationProvider = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
)
