interface BargainingRangeProps {
  x1: number;
  x2: number;
}

export function BargainingRange({ x1, x2 }: BargainingRangeProps) {
  const overlapEnd = 100 - x2;
  const overlapStart = x1;
  const overlapWidth = Math.max(0, overlapStart - overlapEnd);
  console.log(
    "start:",
    overlapStart,
    "end:",
    overlapEnd,
    "width:",
    overlapWidth,
  );

  return (
    <>
      <div className="relative my-8 h-10 w-full">
        <div className="absolute top-0 left-0 bg-zinc-700 h-10 w-full z-0"></div>
        <div
          className="absolute top-0 left-0 bg-blue-400 h-10 z-10"
          style={{ width: `${x1}%` }}
        ></div>
        <div
          className="absolute top-0 right-0 bg-red-400 h-10 z-10"
          style={{ width: `${x2}%` }}
        ></div>
        {overlapWidth > 0 && (
          <div
            className="absolute top-0 bg-purple-400 h-10 z-20"
            style={{ width: `${overlapWidth}%`, left: `${overlapEnd}%` }}
          ></div>
        )}
      </div>
    </>
  );
}
