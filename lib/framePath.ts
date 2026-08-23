export const FRAME_COUNT = 240;

export function getFramePath(index: number): string {
  const safeIndex = Math.min(
    FRAME_COUNT - 1,
    Math.max(0, index)
  );

  return `/hero-frames/frame_${String(safeIndex).padStart(6, "0")}.png`;
}
