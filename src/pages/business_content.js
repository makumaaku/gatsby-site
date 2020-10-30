import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import App1 from "../assets/bodyrecords.jpeg"
import App2 from "../assets/salaryrecord.jpeg"
import App3 from "../assets/seeing.jpeg"
import App4 from "../assets/bench_press.jpeg"

export default function BusinessContent({ data }) {
  return (
    <Layout>
      <h1>{data.site.siteMetadata.item1}</h1>
      <h1>開発実績</h1>
      <div
        css={css`
          display: flex;
          flex-diretion: row;
          flex-wrap: wrap;
          justify-content: space-evenly;
        `}
      >
        <a href="https://apple.co/3e6K3nv">
          <img
            src={App1}
            alt="BodyRecords"
            css={css`
            width: 200px;
              padding: 10px;
            `}
          ></img>
        </a>
        <a href="https://apple.co/37T02Ev">
          <img
            src={App2}
            alt="月収チェッカー"
            css={css`
            width: 200px;
              padding: 10px;
            `}
          ></img>
        </a>
        <a href="https://apple.co/37SFoUR">
          <img
            src={App3}
            alt="Seeing"
            css={css`
            width: 200px;
              padding: 10px;
            `}
          ></img>
        </a>
        <a href="https://apple.co/2TCAoeM">
          <img
            src={App4}
            alt="全国ベンチプレスランキング"
            css={css`
            width: 200px;
              padding: 10px;
            `}
          ></img>
        </a>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
        title
        item2
        item3
        myName
      }
    }
  }
`
