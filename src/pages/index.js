import React from "react"
import { css } from "@emotion/core"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import TopImage from "../assets/hp-back-image.png"

export default function Home({ data }) {
  return (
    <Layout>
      <div>
        <img
          src={TopImage}
          alt="イメージ画像"
          css={css`
            width: 100%;
          `}
        ></img>
      </div>
    </Layout>
  )
}

export const query = graphql`
{
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
  site {
    siteMetadata {
      item1
      item2
      item3
      title
    }
  }
}
`
