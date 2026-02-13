import { useState, useRef, useEffect } from "react";
type NoButtonProps = { onHover: () => void };

const NoButton = ({ onHover }: NoButtonProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [initialPosition, setInitialPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonRef.current && !initialPosition) {
      const rect = buttonRef.current.getBoundingClientRect();
      setInitialPosition({ x: rect.left, y: rect.top });
    }
  }, [initialPosition]);

  const handleMouseEnter = () => {
    if (buttonRef.current && initialPosition) {
      const width = buttonRef.current.offsetWidth;
      const height = buttonRef.current.offsetHeight;

      const randomX = Math.random() * (window.innerWidth - width);
      const randomY = Math.random() * (window.innerHeight - height);

      // Calculate delta from INITIAL position, not current visual position
      setPosition({
        x: randomX - initialPosition.x,
        y: randomY - initialPosition.y,
      });
      onHover();
    }
  };

  return (
    <button
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      style={{
        position: "fixed",
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: "transform 0.5s ease",
      }}
    >
      <span>No</span>
    </button>
  );
};

export default NoButton;
