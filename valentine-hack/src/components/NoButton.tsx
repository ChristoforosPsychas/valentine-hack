import { useState, useRef, useEffect } from "react";
type NoButtonProps = { onHover: () => void };

const NoButton = ({ onHover }: NoButtonProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [initialPosition, setInitialPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [isFixed, setIsFixed] = useState(false);

  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonRef.current && !initialPosition) {
      const rect = buttonRef.current.getBoundingClientRect();
      setInitialPosition({ x: rect.left, y: rect.top });
    }
  }, [initialPosition]);

  const handleMouseEnter = () => {
    if (buttonRef.current) {
      if (!isFixed) {
        const rect = buttonRef.current.getBoundingClientRect();
        setInitialPosition({ x: rect.left, y: rect.top });
        setIsFixed(true);
      }
      if (initialPosition) {
        const width = buttonRef.current.offsetWidth;
        const height = buttonRef.current.offsetHeight;

        const randomX = Math.random() * (window.innerWidth - width);
        const randomY = Math.random() * (window.innerHeight - height);

        setPosition({
          x: randomX - initialPosition.x,
          y: randomY - initialPosition.y,
        });
      }
      onHover();
    }
    /* if (buttonRef.current && initialPosition) {
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
    } */
  };

  return (
    <button
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      className="rounded-xl bg-gray-300 text-fuchsia-900 px-6 py-3 font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
      /* style={{
        position: "fixed",
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: "transform 0.5s ease",
      }} */
      style={{
        position: isFixed ? "fixed" : "static",
        ...(isFixed && {
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: "transform 0.5s ease",
        }),
      }}
    >
      <span>No</span>
    </button>
  );
};

export default NoButton;
