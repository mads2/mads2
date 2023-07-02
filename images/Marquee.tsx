import React from 'react'
import { css, Arimo, Rubik } from '../lib'

export function Marquee() {
  let text =
    'Bem Vindo! Herzlich Willkommen! Benvinguda! 歡迎! Bienvenido! Vitajte! Bienvenue! Maligayang pagdating! Tervetuloa! Välkommen! Ласкаво просимо!.'
  const textOptions = {
    anchor: 'left middle',
    fontSize: 36,
  }
  const metrics = Rubik.getMetrics(text, textOptions)
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
          <path id="hello" d={Rubik.getD(text, textOptions)} fill="currentColor" />
        </g>
      </g>
    </svg>
  )
}
