import React from "react"
import { css } from "@emotion/core"

export default function TwitterArea() {
    return (
    <div css={css`
        display:flex;	
        flex-direction: column;
        justify-content: space-evenly;
        padding:10px;
       `}>
       <h2>Twitter</h2>
       <a href="https://twitter.com/marksaito4"><img src = "https://cdn.pixabay.com/photo/2016/03/24/16/04/follow-1277026__480.png" alt = "ツイッターのサムネイル" width="400" height="230"></img></a> 
       <div css={css`
         height:200px;
         width: 400px;
       `}>
         <p>タイムラインが埋め込めないです。</p>
       </div>
       </div>  
    )}