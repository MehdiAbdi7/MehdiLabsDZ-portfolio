"use client";

import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { goTo, next, prev, setLength, setPaused } from "./carouselSlice";

interface Options {
  length: number;
  /** Intervalle entre deux diapositives, en millisecondes. */
  delay?: number;
}

export function useCarousel({ length, delay = 6000 }: Options) {
  const dispatch = useAppDispatch();
  const { index, paused, direction } = useAppSelector(
    (state) => state.carousel,
  );
  const reducedMotion = useRef(false);

  useEffect(() => {
    dispatch(setLength(length));
  }, [dispatch, length]);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotion.current = query.matches;
    if (query.matches) dispatch(setPaused(true));
  }, [dispatch]);

  useEffect(() => {
    if (paused || length < 2) return;
    const timer = setInterval(() => dispatch(next()), delay);
    return () => clearInterval(timer);
  }, [dispatch, paused, length, delay]);

  return {
    index,
    paused,
    direction,
    next: () => dispatch(next()),
    prev: () => dispatch(prev()),
    goTo: (i: number) => dispatch(goTo(i)),
    pause: () => dispatch(setPaused(true)),
    resume: () => {
      if (!reducedMotion.current) dispatch(setPaused(false));
    },
  };
}
