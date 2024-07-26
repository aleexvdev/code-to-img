import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const MaxWidthWrapper = ({ className, children }: { className?: string; children: ReactNode; }) => {
  return (
    <div
      className={cn("h-full mx-auto w-full max-w-full px-0 md:px-0",
        className
      )}
    >
      {children}
    </div>
  );
};
