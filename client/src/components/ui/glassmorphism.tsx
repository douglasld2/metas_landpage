import { cn } from "@/lib/utils";
import { ReactNode, HTMLAttributes } from "react";

interface GlassmorphismCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  isDark?: boolean;
  hasGradientBorder?: boolean;
  className?: string;
}

export function GlassmorphismCard({
  children,
  isDark = false,
  hasGradientBorder = false,
  className,
  ...props
}: GlassmorphismCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl",
        hasGradientBorder && "gradient-border",
        isDark ? "dark-glassmorphism" : "glassmorphism",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
