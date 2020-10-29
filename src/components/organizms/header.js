import React from "react"
import { css } from "@emotion/core"
import { Link, useStaticQuery, graphql } from "gatsby"

export default function Header() {
  const data = useStaticQuery(
    graphql`
      query MyQuery {
        site {
          siteMetadata {
            title
            item1
            item2
            item3
            myName
          }
        }
      }
    `
  )
  return (
    <div
      css={css`
        position: fixed;
        width: 100%;
        background-color: white;
        padding-top:10px
      `}
    >
      <Link to={`/`}>
        <h3
          css={css`
            display: inline-block;
            font-style: normal;
            float: left;
           
           
}
          `}
        >
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <ul
        css={css`
          list-style: none;
          float: right;
        `}
      >
        <li
          css={css`
          padding: 10px 20px;
            float: left;
          `}
        >
          <Link
            to={`/business_content/`}
            css={css`
              color: blue;
            `}
          >
            {data.site.siteMetadata.item1}
          </Link>
        </li>
        <li
          css={css`
          padding: 10px 20px;
            float: left;
          `}
        >
          <Link
            to={`/tohu/`}
            css={css`
              color: blue;
            `}
          >
            {data.site.siteMetadata.item2}
          </Link>
        </li>
        <li
          css={css`
            padding: 10px 20px;
            float: left;
          `}
        >
          <Link
            to={`/intro/`}
            css={css`
              color: blue;
            `}
          >
            {data.site.siteMetadata.item3}
          </Link>
        </li>

      </ul>
    </div>
  )
}
