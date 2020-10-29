import React from "react"
import { css } from "@emotion/core"

export default function NoteArea() {
    return (
        <div css={css`
        padding:10px;
      
       `}>
       <h2>Note</h2>
       <a href="https://note.com/makumaaku">
       <img src="https://cdn.pixabay.com/photo/2014/12/17/01/32/heart-570962__480.jpg" alt="心のノート"　width="400" height="230"></img>
       </a>
       <div css={css`
       height:200px;
       width: 400px;
       `}>
           <p >ブログとは別に心の変動を記録しています。心のノートです。</p>
       </div>
       </div>
    )
  }