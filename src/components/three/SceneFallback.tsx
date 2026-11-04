export function SceneFallback({
  children,
  theme = "diwali",
}: {
  children?: React.ReactNode;
  theme?: "diwali" | "evergreen";
}) {
  const isDiwali = theme === "diwali";

  return (
    <div className="relative w-full min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-midnight">
      {/* Decorative CSS Ambient Backdrop */}
      <div
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          background: isDiwali
            ? "radial-gradient(circle at 50% 30%, rgba(212, 175, 55, 0.18) 0%, rgba(16, 24, 43, 0.8) 60%, #080A12 100%)"
            : "radial-gradient(circle at 50% 30%, rgba(11, 74, 54, 0.25) 0%, rgba(16, 24, 43, 0.8) 60%, #080A12 100%)",
        }}
      />

      {/* Subtle architectural silhouette backdrop */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-midnight via-midnight/80 to-transparent z-[1] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}

