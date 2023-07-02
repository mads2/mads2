import React from 'react'
import { css, Arimo, WaitFor } from '../lib'

export function Marquee() {
  let text =
    'welcome to my GitHub profile, thanks for visiting! click on each image to see the source code that generates it.'
  const textOptions = {
    anchor: 'left middle',
    fontSize: 36,
  }
  const metrics = Arimo.getMetrics(text, textOptions)
  const totalWidth = metrics.width + 720
  const scrollSpeedPixelsPerSecond = 128
  const totalTimeToScroll = totalWidth / scrollSpeedPixelsPerSecond
  const style = css`
    #text {
      animation: ${totalTimeToScroll}s text linear infinite;
      animation-delay: 2s;
      animation-fill-mode: both;
    }
    @keyframes text {
      from {
        transform: translate(854px, 0);
      }
      to {
        transform: translate(${-metrics.width}px, 0);
      }
    }
  `
  return (
    <svg
      width="854px"
      height="72px"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <style type="text/css">{style}</style>
      <g id="text">
        <g transform="translate(0 36)">
          <path id="hello" d={Arimo.getD(text, textOptions)} fill="currentColor" />
        </g>
      </g>
    </svg>
  )
}
