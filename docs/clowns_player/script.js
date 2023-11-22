import {
  // Preact
  render,
  // Hooks
  useEffect,
  useRef,
  useState,
  // signals
  useSignal,
  // HTM
  html,
} from './preact-bundle.js'

import { Player } from './Components/Player.js'

const songs = [
  {
    name: 'Analog ghosts flying out from the synthesizer and into your ears',
    src: 'mp3s/analog_ghost.mp3',
    artist: 'lebchen',
    duration: '0:07',
  },
  {
    name: 'Cowbell',
    src: 'mp3s/normal_cowbell.mp3',
    artist: 'lebchen',
    duration: '0:08',
  },
  {
    name: 'Crying cowbell',
    src: 'mp3s/crying_cowbell.mp3',
    artist: 'lebchen',
    duration: '0:08',
  },
  {
    name: 'Drums',
    src: 'mp3s/drums.mp3',
    artist: 'lebchen',
    duration: '0:07',
  },
  {
    name: 'Distorted fun',
    src: 'mp3s/fun_distorted.mp3',
    artist: 'lebchen',
    duration: '0:07',
  },
  {
    name: 'JX 08 Kick',
    src: 'mp3s/jx-08-kick.mp3',
    artist: 'lebchen',
    duration: '0:07',
  },
  {
    name: 'JX 08 Kick and Snare',
    src: 'mp3s/JX-08-kick-snare.mp3',
    artist: 'lebchen',
    duration: '0:07',
  },
  {
    name: 'JX 08 Kick Snare Bass',
    src: 'mp3s/JX-08-kick-snare-bass.mp3',
    artist: 'lebchen',
    duration: '0:07',
  },
  {
    name: 'Peaow',
    src: 'mp3s/peaow.mp3',
    artist: 'lebchen',
    duration: '0:07',
  },
  {
    name: 'RP Pan',
    src: 'mp3s/rp-pan.mp3',
    artist: 'lebchen',
    duration: '0:07',
  },
]

function Wrapper({ songs }) {
  const audioRef = useRef(null)
  const pannerNode = useSignal(null)
  const analyserNode = useSignal(null)
  const [forceUpdate, setForceUpdate] = useState(0)

  // Some browsers require user interaction to initialize the audio context
  useEffect(function initializeAfterUserInteraction() {
    function initializeAudioContext() {
      /**
       * @type {AudioContext}
       */
      const audioContext = new (window.AudioContext ||
        // @ts-ignore
        window.webkitAudioContext)()

      const sourceNode = audioContext.createMediaElementSource(audioRef.current)
      pannerNode.value = audioContext.createStereoPanner()
      analyserNode.value = audioContext.createAnalyser()

      sourceNode
        .connect(analyserNode.value)
        .connect(pannerNode.value)
        .connect(audioContext.destination)

      // Rerender after audioRef is updated and the audio context is initialized
      setForceUpdate(forceUpdate + 1)

      window.removeEventListener('mousedown', initializeAudioContext)
    }
    window.addEventListener('mousedown', initializeAudioContext)
  }, [])

  return html` <audio ref=${audioRef} id="audio" />
    <${Player}
      songs=${songs}
      audio=${audioRef.current}
      pannerNode=${pannerNode}
      analyserNode=${analyserNode}
    />`
}

render(html`<${Wrapper} songs=${songs} />`, document.getElementById('app'))
