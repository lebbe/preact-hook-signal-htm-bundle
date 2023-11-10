# Ultra-Modern Web Development Bundle

## Concept
This project is dedicated to removing scaffolding and lowering the threshold for new developers and script kiddies alike! It's about coding the web like it's 1998, but with the power of ultra-modern concepts.

## Features
- **Bundled Technologies**: This bundle integrates Preact, HTM, and @preact/signals.
- **Simple Exposures**: The project exposes these technologies along with Preact hooks in four simple objects: `{preact, hooks, signals, html}`.
- **No Build Steps**: HTM is pre-registered with Preact, enabling direct use in web browsers without any build steps.
- **Ease of Use**: The only tool you need to create web applications is a text editor like Notepad.

## Getting Started
Just include this bundle in your web browser, and start writing JavaScript immediately. No complex setups or scaffolding required!

Happy coding with a touch of nostalgia and modern efficiency!

# How-to

Building this project makes a single file, [preact-bundle.js](/dist/preact-bundle.js), that can be included in the browser
to make preact applications without any build steps. I didn't find a (working) full bundle
of preact, preact-hooks, @preact/signals AND htm, so I made this project.

```
import { hooks, html, preact, signals } from './preact-bundle.js'

const {
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
} = hooks

const { h, Component, render, createRef, Fragment } = preact

const {
  useSignal,
  useComputed,
  useSignalEffect,
  signal,
  effect,
  computed,
  Signal,
  batch,
  untracked,
} = signals

// Now you got all the tools you need to make a modern web application, without any scaffolding!
```
