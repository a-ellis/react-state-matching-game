import { useEffect, useRef, useState } from "react";

export default function useHover() {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);

  const enter = () => {
    setHovered(true);
  };

  const leave = () => {
    setHovered(false);
  };

  useEffect(() => {
    ref.current.addEventListener("mouseenter", enter);
    ref.current.addEventListener("mouseleave", leave);

    return () => {
      ref.current.removeEventListener("mouseenter", enter);
      ref.current.removeEventListener("mouseleave", leave);
    };
  });

  return [ref, hovered];
}
