import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"

export default function Tohu({ data }) {
  return (
    <Layout>
        <h1>とうふ</h1>
      {/* <h1>{data.site.siteMetadata.title}</h1> */}
      <div css={css`
           float: left;
          `}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWy8YintVg5LPYaytK6ukPKRPafLIZT75QWg&usqp=CAU" alt="とうふの写真" width="400" height="400"></img>
      </div>
      <p  css={css`
          margin: 0px 20px;
        `}>
        ここにブログのタイトル＋descriptionを入れていくよ！↓
      </p>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`