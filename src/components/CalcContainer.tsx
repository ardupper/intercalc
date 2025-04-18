import { ReactNode } from "react";

interface CalcContainerProps {
  children: ReactNode;
}

export function CalcContainer({ children }: CalcContainerProps) {
  return (
    <div className="border-2 border-white border-solid rounded-md">
      {children}
    </div>
  );
}
