import React from "react"
import { css } from "@emotion/core"

export default function BlogArea() {
    return (
        <div css={css`
        display:flex;	
        flex-direction: column;
        flex-wrap:wrap;
        justify-content: space-evenly;
        padding:10px;
       `}>
       <h2>Blog</h2>
       <a href="https://makulogsleep.com/">
       <img src="https://cdn.pixabay.com/photo/2017/10/10/21/46/laptop-2838917__480.jpg" alt="ブログのサムネイル"　width="400" height="230"></img>
       </a>
       <div css={css`
       width: 400px;
       `}>
           <p >ブログ書いてます。主な内容は、アプリ開発と挑戦していたショートスリーパー、休学に関してです。</p>
       </div>
       </div>
    )
  }