"use client"

import ReactDOM from "react-dom"

export function PreloadResources() {
  ReactDOM.preload(
    "https://raw.githubusercontent.com/user28111999/portfolio/master/bg_gradient_h_500.jpg",
    { as: "image" },
  )

  return null
}
