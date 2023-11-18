import {
  Window,
  Timer,
  BalanceController,
  Range,
  Controls,
  ButtonLed,
} from './Misc.js'

import { useEffect, useSignal, effect, html } from '../preact-bundle.js'

import PlayerSectionTitle from './PlayerSectionTitle.js'
import Visualizer from './Visualizer.js'
import VolumeControl from './VolumeControl.js'

// BIG TODO: Let the audio be the source of truth for the current song
// and the current time. Use event handlers on audio to update the signals
// when the song changes or the time changes.
// Why?! Because HTML First! If the browser API has it, dont reinvent it.
export function Player({ songs, audio, pannerNode, analyserNode }) {
  const songIndex = useSignal(0)
  const isPlaying = useSignal(false)
  const currentSrc = useSignal('')
  const shuffle = useSignal(false)
  const repeat = useSignal(false)
  const time = useSignal(0)

  const numberOfSongs = songs.length

  function nextSong() {
    if (shuffle.value) {
      songIndex.value = Math.floor(Math.random() * numberOfSongs)
      isPlaying.value = true
      return
    }

    songIndex.value = (songIndex + 1) % numberOfSongs
    isPlaying.value = true
  }

  function previousSong() {
    songIndex.value = (songIndex - 1 + numberOfSongs) % numberOfSongs
    isPlaying.value = true
  }

  function stopSongs() {
    audio.currentTime = 0
    isPlaying.value = false
    songIndex.value = 0
  }

  effect(function playPauseEffect() {
    if (isPlaying.value) {
      window.setTimeout(() => {
        if (audio?.paused || audio?.ended) {
          audio.play()
          audio.currentTime = time.value
        }
      }, 50)
    } else {
      audio?.pause()
    }
  })

  useEffect(
    function () {
      function startNextSong() {
        if (
          songIndex.value === numberOfSongs - 1 &&
          !repeat.value &&
          !shuffle.value
        ) {
          return
        }
        nextSong()
      }
      function updateTimer() {
        time.value = audio.currentTime
      }

      if (!audio) return

      audio.addEventListener('ended', startNextSong)
      audio.addEventListener('timeupdate', updateTimer)

      return function removeEventListener() {
        audio.removeEventListener('ended', startNextSong)
        audio.removeEventListener('timeupdate', updateTimer)
      }
    },
    [audio]
  )

  if (audio && currentSrc.value !== songs[songIndex.value].src) {
    audio.src = songs[songIndex.value].src
    currentSrc.value = songs[songIndex.value].src
    audio.currentTime = 0
    time.value = 0
    audio.load()
  }

  return html`
    <div class="player">
      <${Window} title="Clown Player">
        <div class="player-section player-section-info">
          <div class="player-section player-section-timer">
            <${Timer} time=${time} />
            <${Visualizer} analyserNode=${analyserNode} 
                           isPlaying=${isPlaying.value} />
          </div>
          <div class="prevent-flex-child-to-overflow">
            <${PlayerSectionTitle} trackTitle=${`${songs[songIndex].artist} - ${songs[songIndex].name}`} />
            <div class="player-section player-section-volumetc">
              <${VolumeControl} audio=${audio} />
              <${BalanceController} pannerNode=${pannerNode} />
            </div>
          </div>
        </div>
        <div class="player-section player-section-slider">
          <${Range} time=${time} audio=${audio} />
        </div>
        <div class="player-section">
          <${Controls}
              nextSong=${nextSong}
              previousSong=${previousSong}
              stopSongs=${stopSongs}
              playPauseSong=${() => {
                isPlaying.value = !isPlaying.value
              }} />
          <div class="misc-buttons">
            <button class="player-button misc-button"
                    onclick=${() => (shuffle.value = !shuffle.value)}>
              <${ButtonLed} active=${shuffle.value} />
              SHUFFLE
            </button>
            <button class="player-button misc-button"
                    onclick=${() => (repeat.value = !repeat.value)}>
              <${ButtonLed} active=${repeat.value} />
              <span class="material-icons"> repeat </span>
            </button>
          </div>
        </div>
      </${Window}>
      <${Window} title="Playlist">
        <div class="player-section">
          <div class="player-section-playlist">
            <ul class="playlist">
              ${songs.map(function (song, i) {
                return html`<li
                  onclick=${() => {
                    songIndex.value = i
                    isPlaying.value = true
                  }}
                  class=${'playlist-track ' +
                  (songIndex.value === i ? 'playlist-track-playing' : '')}
                >
                  <span class="playlist-track-track">
                    ${song.artist} - ${song.name}
                  </span>
                  <span class="playlist-track-duration">${song.duration}</span>
                </li>`
              })}
            </ul>
          </div>
        </div>
      </${Window}>
    </div>
  `
}
