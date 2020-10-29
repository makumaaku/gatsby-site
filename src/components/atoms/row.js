import React from "react"
import { css } from "@emotion/core"

export default ({ children }) =>(
  <div css={css`
  display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
 `}>{children}</div>
)