"use client";

import dynamic from "next/dynamic";
import { SceneFallback } from "./SceneFallback";

interface ThreeCanvasProps {
  children?: React.ReactNode;
}

const DynamicDiwaliScene = dynamic(
  () => import("./DiwaliScene").then((mod) => mod.DiwaliScene),
  {
    ssr: false,
    loading: () => <SceneFallback theme="diwali" />,
  }
);

export function ThreeCanvas({ children }: ThreeCanvasProps) {
  return <DynamicDiwaliScene>{children}</DynamicDiwaliScene>;
}
