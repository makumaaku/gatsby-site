import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import { rhythm } from "../utils/typography"

export default function Tohu({ data }) {
  return (
    <Layout>
        <h1>とうふ</h1>
      <div css={css`
           float: left;
           padding-right:50px
          `}>
      <img src="https://lh3.googleusercontent.com/z6c98Rl5CyftG-TJJtspZ8Y27BitlS6aajJCZXp8t6ej0f3PCKb-YCi-YOlJFx6cTz_KHpCHnXeDZgBAb0-Vkz2GPfalR8WgNZ3sTUCY5461IGKs_nm05vsiRhha4m3kjaaZ0PJQoa0YUVotM4wBxB7q4yUNUJIHupMLV8IRp2XRcK9TbMvwDt80gYrDIGNjWzNAvYTDiyxuHvQJ8s7a8MofEecF6izpPlTi1RHDprbO3hFPnvDDfcki5ndZ-Jq2iV-RmsHVC_9bDrTxWyTzwkQcCNhWJJ4mqvcY9JOVx9XLZ8RV6HnOGzy9poznylWRrutdVLPdEnfYIF5HlKTz7s9hoX9yNr5_qMFEboQH9NNBb-w0-wuqh__fNjMtseFuvDCPnJqOArzW0uAooqMy0wfJjAC0D6l84ikWFvUP9znHRS79pGBsIzqgFTWmsRSde-2SVpsQTyhJm54jkbvJ3AsC0RMRE_GDPKKNEbpxUDsU59s-aaHbQMLJX0VphuGzo7TZS6TyOZgHiO-7MT8-1KkH6_HGS6qLrJ1B5FPd6I2zqpnbBq1sZc4eSM86vCNlkk5LGYKlaxhf0tAJMOvX6a_I3RsTrBpz-MDdW_376S50SZ7QsSyRF4sE4FmdjHAN96nyenaR9bXbfbb9d4HIGEXQHlrlprZbQHI9dTgBnZRdvZAOXP531ADb0qza=w1280-h853-no?authuser=0" alt="とうふの写真" width="600" height="400"></img>
      </div>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {node.frontmatter.title}{" "}
                <span
                  css={css`
                    color: #555;
                  `}
                >
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
    </Layout>
  )
}

export const query = graphql`
  query {
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
  }
`