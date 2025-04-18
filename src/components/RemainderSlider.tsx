import { InlineMath } from "./InlineMath";
import { Slider } from "./ui/custom_slider";

interface RemainderSliderProps {
  value: number;
  onValueChange: (value: number[]) => void;
}

export function RemainderSlider({
  value,
  onValueChange,
}: RemainderSliderProps) {
  return (
    <div className="py-4">
      <div className="py-2">
        <InlineMath tex={`R=${value}`} />
        <span className="px-2 text-white font-rethink">
          Reaminder after War
        </span>
      </div>
      <Slider
        value={[value]}
        max={100}
        step={1}
        rangeClassName="bg-amber-400"
        onValueChange={onValueChange}
      />
    </div>
  );
}
