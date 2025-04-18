import { useEffect, useState } from "react";
import { BargainingRange } from "./BargainingRange";
import { InlineMath } from "./InlineMath";
import { sliderUpdate } from "@/lib/utils";
import { CalcSlider } from "./CalcSlider";

interface ImperfectInformationCalculatorProps {
  className: string;
}

export function ImperfectInformationCalculator({
  className,
}: ImperfectInformationCalculatorProps) {
  const [R, setR] = useState(80);
  const [p1, setP1] = useState(0.8);
  const [p2, setP2] = useState(0.2);
  const [x1, setX1] = useState(0);
  const [x2, setX2] = useState(0);

  useEffect(() => {
    setX1(p1 * R);
    setX2(p2 * R);
  }, [p1, p2, R]);

  const updateP1 = sliderUpdate(setP1);
  const updateP2 = sliderUpdate(setP2);
  const updateR = sliderUpdate(setR);

  const bargainingRange = 100 - x1 - x2;

  return (
    <div className={className}>
      <InlineMath tex="T=100" />
      <CalcSlider
        tex="R"
        desc="Remaining value after war."
        value={R}
        onValueChange={updateR}
        colorStyle="bg-amber-400"
      />
      <CalcSlider
        tex="p_1"
        desc="State 1's percieved probability of winning"
        value={p1}
        onValueChange={updateP1}
        max={1}
        step={0.01}
        colorStyle="bg-blue-400"
      />
      <CalcSlider
        tex="p_2"
        desc="State 2's percieved probability of winning"
        value={p2}
        onValueChange={updateP2}
        max={1}
        step={0.01}
        colorStyle="bg-red-400"
      />
      <BargainingRange x1={x1} x2={x2} />
      <InlineMath tex={`x_1=p_1R=${x1.toFixed(2)}`} />
      <span className="text-white font-rethink px-3">
        State 1's Expected Utility of War
      </span>
      <br />
      <InlineMath tex={`x_2=p_2R=${x2.toFixed(2)}`} />
      <span className="text-white font-rethink px-3">
        State 2's Expected Utility of War
      </span>
      <br />
      <InlineMath tex={`T - x_1 - x_2 = ${bargainingRange.toFixed(2)}`} />
      {bargainingRange >= 0 ? (
        <span className="px-3 text-blue-400 font-rethink font-bold text-xl">
          Peace
        </span>
      ) : (
        <span className="px-3 text-red-400 font-rethink font-bold text-xl">
          War
        </span>
      )}
    </div>
  );
}
