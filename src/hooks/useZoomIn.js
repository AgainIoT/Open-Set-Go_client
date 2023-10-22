import { useEffect, useCallback, useRef } from "react";

const useZoomIn = () => {
  const dom = useRef();

  const handleScroll = useCallback(([entry]) => {
    const { current } = dom;
    if (entry.isIntersecting) {
      current.style.transitionProperty = "opacity transform";
      current.style.transitionDuration = "2s";
      current.style.transitionDelay = "0s";
      current.style.opacity = 1;
      current.style.transform = "translate3d(0, -20%, 0)";
    }
  }, []);

  useEffect(() => {
    let observer;
    const { current } = dom;
    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.7 });
      observer.observe(current);

      return () => observer && observer.disconnect();
    }
  }, [handleScroll]);
  return {
    ref: dom,
    style: {
      opacity: 0,
      transform: "translated3d(0, 50%, 0)",
    }
  };
};

export default useZoomIn;
