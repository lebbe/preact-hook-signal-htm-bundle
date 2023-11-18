import { html } from '../preact-bundle.js'

export function Window({ children, title }) {
  return html`<div class="window">
    <div class="window-title">
      <div class="window-title-text">${title}</div>
    </div>
    <div class="window-content">${children}</div>
  </div>`
}

export function Timer({ time }) {
  const timeValue = time.value
  const minutes = Math.floor(timeValue / 60)
  const seconds = Math.floor(timeValue % 60)

  return html`<div class="player-section-timer-text">
    ${`${minutes}:${seconds.toString().padStart(2, '0')}`}
  </div>`
}

export function ButtonLed({ active }) {
  return html`<span
    class="player-button-led ${active ? 'player-button-led--active' : ''}"
  ></span>`
}

export function Range({ time, audio }) {
  const timeValue = time.value
  const tracklength = audio?.duration
  const ratioPlayed = Math.floor((timeValue / tracklength) * 1000)

  return html`<input
    type="range"
    class="player-section-slider-range"
    min="0"
    max="1000"
    onchange=${(e) => {
      const ratio = e.target.value / 1000
      audio.currentTime = ratio * tracklength || 0
      time.value = audio.currentTime
    }}
    value=${ratioPlayed || 0}
  />`
}

export function Controls({ nextSong, previousSong, playPauseSong, stopSongs }) {
  return html`<div class="controls">
    <button onclick=${previousSong} class="player-button controls-button">
      <span class="material-icons"> skip_previous </span>
    </button>
    <button onclick=${stopSongs} class="player-button controls-button">
      <span class="material-icons"> stop </span>
    </button>
    <button onclick=${playPauseSong} class="player-button controls-button">
      <span class="material-icons"> play_arrow </span>
    </button>
    <button onclick=${playPauseSong} class="player-button controls-button">
      <span class="material-icons"> pause </span>
    </button>
    <button onclick=${nextSong} class="player-button controls-button">
      <span class="material-icons"> skip_next </span>
    </button>
  </div>`
}

export function BalanceController({ pannerNode }) {
  return html`<input
    type="range"
    min="0"
    max="100"
    class="player-section-volumetc-range balanceController"
    oninput=${(e) => {
      const ratio = e.target.value / 50 - 1
      pannerNode.value.pan.value = ratio
    }}
    value="50"
  />`
}
