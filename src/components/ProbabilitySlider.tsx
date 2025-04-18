import { InlineMath } from "./InlineMath";
import { Slider } from "./ui/custom_slider";

export enum Actor {
  State1,
  State2,
}

interface ProbabilitySliderProps {
  actor: Actor;
  value?: number;
  onValueChange: (value: number[]) => void;
}

export function ProbabilitySlider({
  actor,
  value = 0,
  onValueChange,
}: ProbabilitySliderProps) {
  return (
    <div className="py-4">
      {actor === Actor.State1 ? (
        <div className="py-2">
          <InlineMath tex={`p_1=${value}`} />
          <span className="px-2 text-white font-rethink">
            State 1's Probability of Winning
          </span>
        </div>
      ) : (
        <div className="py-2">
          <InlineMath tex={`p_2=${value}`} />
          <span className="px-2 text-white font-rethink">
            State 2's Probability of Winning
          </span>
        </div>
      )}
      <Slider
        value={[value]}
        max={100}
        step={1}
        rangeClassName={actor === Actor.State1 ? "bg-blue-400" : "bg-red-400"}
        onValueChange={onValueChange}
      />
    </div>
  );
}
