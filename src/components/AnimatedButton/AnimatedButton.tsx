import { buttonBaseSx } from "@/utils/buttonBaseSx";
import { ButtonBase } from "@mui/material";
import { useEffect, useRef } from "react";

export const AnimatedButton = ({
  children,
  className,
  hoverType = "color",
  type = "button",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  hoverType?: "color" | "background";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}) => {
  const animatedButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const hoverColors = [
      "var(--color-presenter)",
      "var(--color-visuals)",
      "var(--color-videoplayer)",
      "var(--color-app)",
    ];

    const currentButton = animatedButton.current;

    if (currentButton) {
      const handleMouseEnter = () => {
        const randomColor =
          hoverColors[Math.floor(Math.random() * hoverColors.length)];

        if (hoverType === "background") {
          currentButton.style.backgroundColor = randomColor;
          currentButton.style.color = "var(--bg-main)";
        } else {
          currentButton.style.color = randomColor;
        }
      };

      const handleMouseLeave = () => {
        if (hoverType === "background") {
          currentButton.style.backgroundColor = "";
          currentButton.style.color = "var(--text-default)";
        } else {
          currentButton.style.color = "";
        }
      };

      currentButton.addEventListener("mouseenter", handleMouseEnter);
      currentButton.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        currentButton.removeEventListener("mouseenter", handleMouseEnter);
        currentButton.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [hoverType]);

  return (
    <ButtonBase
      sx={buttonBaseSx}
      type={type}
      className={className}
      ref={animatedButton}
      onClick={onClick}
    >
      {children}
    </ButtonBase>
  );
};
