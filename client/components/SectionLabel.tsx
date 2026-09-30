import type { ReactNode } from "react";

interface SectionLabelProps {
  children: ReactNode;
  className?: string;
}

/** La petite étiquette en capitales posée au-dessus des titres de section. */
export default function SectionLabel({
  children,
  className = "",
}: SectionLabelProps) {
  return <p className={`label ${className}`}>{children}</p>;
}
