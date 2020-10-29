import React from "react"
import { css } from "@emotion/core"

export default function YoutubeArea() {
    return (
        <div css={css`
        padding:10px;
       
       `}>
       <h2>Youtube</h2>
       <iframe width="400" height="230" src="https://www.youtube.com/embed/I8dIlWAi-8Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen　title = "Youtubeのサムネイル"></iframe>
       <div css={css`
       width: 400px;
       `}>
           <p >Youtubeやってます！自分の体験談や経験を発信しています。たまにおふざけもありです。日記みたいな感覚でやってます。</p>
       </div>
       </div>
    )
  }