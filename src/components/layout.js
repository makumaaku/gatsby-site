import React from "react"
import { css } from "@emotion/core"
import Header from "../components/organizms/header"
import "../styles/global.css"
import Footer from "./organizms/footer"

export default function Layout({ children }) {
  return (
    <div
      css={css`
        max-width: 100%;
      `}
    >
      <Header></Header>
      <div
        css={css`
          padding: 100px 0px;
        `}
      >
        {children}
        <Footer></Footer>
      </div>
    </div>
  )
}
