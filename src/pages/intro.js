import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import YoutubeArea from "../components/organizms/youtube-area"
import BlogArea from "../components/organizms/blog-area"
import NoteArea from "../components/organizms/note-area"
import TwitterArea from "../components/organizms/twitter-area"

export default function About({ data }) {
  return (
    <Layout>
      <h1>{data.site.siteMetadata.item3}</h1>
      <div
        css={css`
          display: flex;
          flex-diretion: row;
          flex-wrap: wrap;
          justify-content: space-evenly;
        `}
      >
        <YoutubeArea></YoutubeArea>
        <BlogArea></BlogArea>
        <NoteArea> </NoteArea>
        <TwitterArea></TwitterArea>
      </div>
      <p>
        We're the only site running on your computer dedicated to showing the
        best photos and videos of pandas eating lots of food.
      </p>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        item3
      }
    }
  }
`
