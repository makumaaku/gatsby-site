import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import { rhythm } from "../utils/typography"

export default function Tohu({ data }) {
  return (
    <Layout>
      
        <h1>{data.site.siteMetadata.item2}</h1>
      
    </Layout>
  )
}

export const query = graphql`
query C {
  site {
    siteMetadata {
      item2
      title
    }
  }
}

`