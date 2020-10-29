import React from "react"
import { css } from "@emotion/core"
import { Link, useStaticQuery, graphql } from "gatsby"

export default function Footer() {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            copylight
          }
        }
      }
    `
  )
  return (
    <div
      css={css`
        position: fixed;
        width:100%;
      background-color:red;
         bottom: 0; /*下に固定*/
      `}
    >
      <Link to={`/`}>
        <h3
          css={css`
            display: inline-block;
            font-style: normal;
            padding: 10px 0px 0px 40px;
            float:left;
          `}
        >
          {data.site.siteMetadata.copylight}
        </h3>
      </Link>
      <Link to={`/`}>
        <h3
          css={css`
            display: inline-block;
            font-style: normal;
            padding: 10px 40px 0px 0px;
            float:right;
          `}
        >
          {data.site.siteMetadata.copylight}
        </h3>
      </Link>
    </div>
  )
}
