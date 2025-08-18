import { Checkbox } from "@mui/material";
import { useRef } from "react";

export const AnimatedCheckbox = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) => {
  const checkboxRef = useRef<HTMLButtonElement>(null);

  const clickColors = [
    "var(--color-presenter)",
    "var(--color-visuals)",
    "var(--color-videoplayer)",
    "var(--color-app)",
  ];

  const handleClickAnimation = () => {
    const randomColor =
      clickColors[Math.floor(Math.random() * clickColors.length)];
    if (checkboxRef.current) {
      checkboxRef.current.style.color = randomColor;
    }
  };

  return (
    <Checkbox
      sx={{
        "&.MuiCheckbox-root": {
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      }}
      className={className}
      ref={checkboxRef}
      onClick={() => {
        handleClickAnimation();
        onClick?.();
      }}
    />
  );
};
