import { useState, useEffect } from "react";

const useMousePosition = (usePercentage = false) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if(!usePercentage) {
        setMousePosition({ x: ev.clientX, y: ev.clientY });
      } else {
        setMousePosition({
          x: ev.clientX / window.innerWidth,
          y: ev.clientY / window.innerHeight
        });
      }
    };

    window.addEventListener("mousemove", updateMousePosition, true);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [usePercentage]);

  return mousePosition;
};

export default useMousePosition;