import Link from "next/link";
import { useEffect, useRef } from "react";

export const AnimatedLink = ({
  href,
  children,
  className,
  hoverType = "color",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  hoverType?: "color" | "background" | "border";
}) => {
  const animatedLink = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const hoverColors = [
      "var(--color-presenter)",
      "var(--color-visuals)",
      "var(--color-videoplayer)",
      "var(--color-app)",
    ];

    const currentLink = animatedLink.current;

    if (currentLink) {
      const handleMouseEnter = () => {
        const randomColor =
          hoverColors[Math.floor(Math.random() * hoverColors.length)];

        if (hoverType === "background") {
          currentLink.style.backgroundColor = randomColor;
          currentLink.style.color = "var(--bg-main)";
        } else if (hoverType === "border") {
          currentLink.style.borderColor = randomColor;
          currentLink.style.color = "var(--border-default)";
        } else {
          currentLink.style.color = randomColor;
        }
      };

      const handleMouseLeave = () => {
        if (hoverType === "background") {
          currentLink.style.backgroundColor = "";
        } else if (hoverType === "border") {
          currentLink.style.borderColor = "";
        } else {
          currentLink.style.color = "";
        }
      };

      currentLink.addEventListener("mouseenter", handleMouseEnter);
      currentLink.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        currentLink.removeEventListener("mouseenter", handleMouseEnter);
        currentLink.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [hoverType]);

  return (
    <Link href={href} className={className} ref={animatedLink}>
      {children}
    </Link>
  );
};
