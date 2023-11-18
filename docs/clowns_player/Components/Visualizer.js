import { html, useState, useRef } from '../preact-bundle.js'

export default function Visualizer({ analyserNode, isPlaying }) {
  const intervalId = useRef(null)
  const [frequencyData, setFrequencyData] = useState(Array(19).fill('0px'))

  if (isPlaying && analyserNode.value && !intervalId.current) {
    intervalId.current = setInterval(() => {
      updateFrequencyData()
    }, 100)
  } else if (!isPlaying && intervalId.current) {
    clearInterval(intervalId.current)
    intervalId.current = null
  }

  function updateFrequencyData() {
    const bufferLength = analyserNode.value.frequencyBinCount
    const dataArray = new Uint8Array(bufferLength)
    analyserNode.value.getByteFrequencyData(dataArray)

    const minHz = 100
    const maxHz = 10000
    const minLog = Math.log(minHz)
    const maxLog = Math.log(maxHz)
    const scale = (maxLog - minLog) / 18
    let newData = []

    for (let i = 0; i < 19; i++) {
      const logIndex = Math.exp(minLog + i * scale)
      const index = Math.round(
        ((logIndex - minHz) / (maxHz - minHz)) * (bufferLength - 1)
      )

      newData.push(`${(dataArray[index] / 255) * 44}px`)
    }

    setFrequencyData(newData)
  }

  return html`<div class="visualizer">
    ${frequencyData.map(
      (data) =>
        html`<div
          key="{index}"
          class="bar"
          style=${{ height: `${data}` }}
        ></div>`
    )}
  </div>`
}
