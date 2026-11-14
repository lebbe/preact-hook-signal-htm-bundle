# Ultra-Modern Web Development Bundle

## Concept

This project is dedicated to removing scaffolding and lowering the threshold for new developers and script kiddies alike! It's about coding the web like it's 1998, but with the power of ultra-modern concepts.

We support many of the [HTML first](https://html-first.com/) movement, like making use of the inbuilt functionality of modern web browsers, stearing clear of build steps, etc.

## Features

- **Bundled Technologies**: This bundle integrates Preact, HTM, and @preact/signals.
- **Simple Exposures**: The project exposes these technologies along with Preact hooks in one go.
- **No Build Steps**: HTM is pre-registered with Preact, enabling direct use in web browsers.
- **Ease of Use**: The only tool you need to create web applications is a text editor like Notepad (allthough we encourage something that supports syntax highlightning).

## Getting Started

Just include this bundle in your web browser, and start writing JavaScript immediately. No complex setups or scaffolding required!

## Hello World

Save this as `index.html` and open it in a browser to try a small interactive app:

```html
<!doctype html>
<html>
  <body>
    <div id="app"></div>
    <script type="module">
      import { html, render, useState } from 'https://cdn.jsdelivr.net/npm/preact-hook-signal-htm-bundle@3.1.0/dist/preact-bundle.js'

      function App() {
        const [count, setCount] = useState(0)

        return html`<main>
          <h1>Hello, world!</h1>
          <button onClick=${() => setCount(count + 1)}>
            Clicked ${count} times
          </button>
        </main>`
      }

      render(html`<${App} />`, document.getElementById('app'))
    </script>
  </body>
</html>
```

Happy coding with a touch of nostalgia and modern efficiency!

# Examples

Take a look at our [clown mp3 player](https://lebbe.github.io/preact-hook-signal-htm-bundle/clowns_player/) for an application written with this bundle. The source code can be found [here](https://github.com/lebbe/preact-hook-signal-htm-bundle/tree/main/docs/clowns_player).

# How-to

Building this project makes a single file, [preact-bundle.js](/dist/preact-bundle.js), that can be included in the browser
to make preact applications without any build steps. I didn't find a (working) full bundle
of preact, preact-hooks, @preact/signals AND htm, so I made this project.

Import from CDN

```javascript
import {
  render,
  hydrate,
  createContext,
  html,
  useEffect,
  useSignal,
} from 'https://cdn.jsdelivr.net/npm/preact-hook-signal-htm-bundle@3.1.0/dist/preact-bundle.js'
```

Or from downloaded file

```javascript
import {
  // Preact
  h,
  Component,
  render,
  hydrate,
  createContext,
  createRef,
  Fragment,
  cloneElement,
  toChildArray,
  options,
  isValidElement,
  // Hooks
  useCallback,
  useContext,
  useDebugValue,
  useEffect,
  useErrorBoundary,
  useId,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
  // signals
  useSignal,
  useComputed,
  useSignalEffect,
  signal,
  effect,
  computed,
  Signal,
  batch,
  untracked,
  action,
  createModel,
  useModel,
  // HTM
  html,
} from './preact-bundle.js'

// Now you got all the tools you need to make a modern browser application, without any scaffolding!
```
