import {
  // Hooks
  useEffect,
  useRef,
  useState,
  Component,
  // HTM
  html,
} from "../preact-bundle.js";

/**
 *
 * @param {{trackTitle: string}} props
 * @returns {Component}
 */
export default function PlayerSectionTitle({ trackTitle }) {
  const ref = useRef();
  const scrollOffset = useRef(0);
  const [goingLeft, setGoingLeft] = useState(false);

  useEffect(
    function () {
      const interval = setInterval(() => {
        const playerTitle = ref.current;

        if (!playerTitle) return;

        const oldScrollLeft = playerTitle.scrollLeft;

        if (goingLeft) {
          scrollOffset.current -= 10;
        } else {
          scrollOffset.current += 10;
        }

        playerTitle.scrollTo(scrollOffset.current, 0);

        const newScrollLeft = playerTitle.scrollLeft;

        if (newScrollLeft === oldScrollLeft) {
          setGoingLeft((goingLeft) => !goingLeft);
          scrollOffset.current = newScrollLeft;
        }
      }, 100);

      return () => clearInterval(interval);
    },
    [goingLeft]
  );

  return html`<div class="player-section player-section-title">
    <div id="player-title" ref=${ref} class="player-section-title-text">
      ${trackTitle}
    </div>
  </div>`;
}
