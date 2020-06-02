import React from "react"
import { MdxWebMonetizationProvider } from "./src/components/mdx-web-monetization-provider"

export const wrapRootElement = ({ element }) => (
  <MdxWebMonetizationProvider>{element}</MdxWebMonetizationProvider>
)
