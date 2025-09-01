import { Checkbox } from "@mui/material";
import { useRef } from "react";

export const AnimatedCheckbox = ({
  className,
  checked,
  onChange,
}: {
  className?: string;
  checked: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const checkboxRef = useRef<HTMLButtonElement>(null);

  const clickColors = [
    "var(--color-presenter)",
    "var(--color-visuals)",
    "var(--color-videoplayer)",
    "var(--color-app)",
  ];

  const randomColor =
    clickColors[Math.floor(Math.random() * clickColors.length)];

  const handleClickAnimation = () => {
    if (checkboxRef.current) {
      checkboxRef.current.style.color = randomColor;
    }
  };

  return (
    <Checkbox
      sx={{
        "&.MuiCheckbox-root": {
          color: "var(--text-default)",
          "&:hover": {
            backgroundColor: "transparent",
          },
          "&.Mui-checked": {
            color: randomColor,
          },
        },
      }}
      className={className}
      ref={checkboxRef}
      checked={checked}
      onChange={(e) => {
        handleClickAnimation();
        onChange?.(e);
      }}
    />
  );
};
