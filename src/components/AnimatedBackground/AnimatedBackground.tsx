"use client";

import { useEffect, useState } from "react";

const BACKGROUND_COLORS = [
  "var(--color-app)",
  "var(--color-presenter)",
  "var(--color-visuals)",
  "var(--color-videoplayer)",
] as const;

interface AnimatedBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

export const AnimatedBackground = ({
  children,
  className = "",
}: AnimatedBackgroundProps) => {
  const [currentColor, setCurrentColor] = useState<string>("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * BACKGROUND_COLORS.length);
    const selectedColor = BACKGROUND_COLORS[randomIndex];
    setCurrentColor(selectedColor);
  }, []);

  return (
    <div
      className={`${className}`}
      style={
        {
          backgroundColor: currentColor,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};
