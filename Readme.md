Building this project makes a single file, `bundle.js`, that can be included in the browser
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
