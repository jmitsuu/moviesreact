import { ReactNode } from "react";
interface LayoutCardsProps {
  children: ReactNode;
}

export function LayoutCards({ children }:LayoutCardsProps) {
  return (
    <div className="w-full h-full mt-20 gap-y-4  grid 2xl:grid-cols-8 xl:grid-cols-5 md:grid-cols-4 grid-cols-2 ">
      {children}
    </div>
  )
}
