import { Slider } from "./ui/custom_slider";
import { InlineMath } from "./InlineMath";

interface CalcSliderProps {
  tex: string;
  desc: string;
  colorStyle: string;
  value: number;
  onValueChange: (value: number[]) => void;
  max?: number;
  step?: number;
}

export function CalcSlider({
  tex,
  desc,
  colorStyle,
  value,
  onValueChange,
  max = 100,
  step = 1,
}: CalcSliderProps) {
  return (
    <div className="py-4">
      <div className="py-2">
        <InlineMath tex={`${tex}=${value.toFixed(2)}`} />
        <span className="p-2 text-white font-rethink">{desc}</span>
      </div>
      <Slider
        rangeClassName={colorStyle}
        onValueChange={onValueChange}
        value={[value]}
        max={max}
        step={step}
      />
    </div>
  );
}
