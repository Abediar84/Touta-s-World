import { ReactNode } from "react";

interface BrandTextProps {
  children: ReactNode;
  className?: string;
}

/**
 * A specialized component to wrap brand-specific words like "Touta" 
 * with the HaveHeartOne typography.
 */
export const BrandText = ({ children, className = "" }: BrandTextProps) => {
  return (
    <span className={`font-brand inline-block font-normal ${className}`}>
      {children}
    </span>
  );
};
