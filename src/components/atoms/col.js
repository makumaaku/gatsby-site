import React from "react"
import { css } from "@emotion/core"

export default ({ children }) => (
  <div css={css`
  -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%;
    background-color: lightpink;
    margin: 0 15px;
 `}>{children}</div>
)