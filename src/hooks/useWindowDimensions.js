import { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function useWindowDimension() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    let eventListeners = ["load", "resize"];

    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    eventListeners.forEach((evt) => window.addEventListener(evt, handleResize));
    return () =>
      eventListeners.forEach((evt) =>
        window.removeEventListener(evt, handleResize)
      );
  }, []);

  return windowDimensions;
}
