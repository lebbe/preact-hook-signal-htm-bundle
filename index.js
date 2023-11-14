import { h, Component, render, createRef, Fragment } from "preact";
import htm from "htm";
const html = htm.bind(h);

import {
  useSignal,
  useComputed,
  useSignalEffect,
  signal,
  effect,
  computed,
  Signal,
  batch,
  untracked,
} from "@preact/signals";

import {
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
} from "preact/hooks";

export {
  // preact
  h,
  Component,
  render,
  createRef,
  Fragment,
  // preact/hooks
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
  // preact/signals
  useSignal,
  useComputed,
  useSignalEffect,
  signal,
  effect,
  computed,
  Signal,
  batch,
  untracked,
  // htm
  html,
};
