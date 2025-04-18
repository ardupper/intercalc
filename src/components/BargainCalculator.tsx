import { useEffect, useState } from "react";
import { CalcSlider } from "./CalcSlider";
import { BargainingRange } from "./BargainingRange";
import { InlineMath } from "./InlineMath";
import { sliderUpdate } from "@/lib/utils";

interface BargainCalculator {
  className?: string;
}

export function BargainCalculator({ className }: BargainCalculator) {
  const [p, setP] = useState(0.8);
  const [R, setR] = useState(80);
  const [x1, setX1] = useState(0);
  const [x2, setX2] = useState(0);

  useEffect(() => {
    setX1(p * R);
    setX2(R * (1 - p));
  }, [p, R]);

  const updateR = sliderUpdate(setR);
  const updateP = sliderUpdate(setP);

  return (
    <div className={className}>
      <InlineMath tex="T=100" />
      <CalcSlider
        tex="R"
        desc="Remaning value after war"
        value={R}
        onValueChange={updateR}
        colorStyle="bg-amber-400"
      />
      <CalcSlider
        tex="p"
        desc="Probability State 1 wins the war"
        value={p}
        onValueChange={updateP}
        colorStyle="bg-blue-400"
        max={1}
        step={0.01}
      />
      <BargainingRange x1={x1} x2={x2} />
      <InlineMath tex={`x_1=pR=${x1.toFixed(2)}`} />
      <span className="text-white font-rethink px-14">
        State 1's Expected Utility of War
      </span>
      <br />
      <InlineMath tex={`x_2=(1-p)R=${x2.toFixed(2)}`} />
      <span className="text-white font-rethink px-3">
        State 2's Expected Utility of War
      </span>
      <br />
    </div>
  );
}
