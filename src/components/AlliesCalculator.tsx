import { useEffect, useState } from "react";
import { CalcSlider } from "./CalcSlider";
import { BargainingRange } from "./BargainingRange";
import { InlineMath } from "./InlineMath";
import { Slider } from "./ui/custom_slider";
import { sliderUpdate } from "@/lib/utils";

interface AlliesCalculatorProps {
  className: string;
}

export function AlliesCalculator({ className }: AlliesCalculatorProps) {
  const [r, setR] = useState(80);
  const [p, setP] = useState(1);
  const [a, setA] = useState(0.2);
  const [q, setQ] = useState(0.8);
  const [x1, setX1] = useState(0);
  const [x2, setX2] = useState(0);

  useEffect(() => {
    setX1(p * r - a * q * r);
    setX2(r - p * r + a * q * r);
  }, [r, p, a, q]);

  const updateR = sliderUpdate(setR);

  const updateP = (value: number[]) => {
    setP(value[0]);
    if (value[0] < a) {
      setA(value[0]);
    }
  };

  const updateA = (value: number[]) => {
    setA(value[0]);
    if (value[0] > p) {
      setP(value[0]);
    }
  };

  const updateQ = sliderUpdate(setQ);

  return (
    <div className={className}>
      <InlineMath tex="T=100" />
      <CalcSlider
        tex="R"
        desc="Remaining value after war"
        value={r}
        onValueChange={updateR}
        colorStyle="bg-amber-400"
      />
      <CalcSlider
        tex="p"
        desc="Probability State 1 Wins War"
        value={p}
        onValueChange={updateP}
        colorStyle="bg-blue-400"
        max={1}
        step={0.01}
      />
      <div className="py-4">
        <div className="py-2">
          <InlineMath tex={`\\alpha=${a.toFixed(2)}`} />
          <span className="p-2 text-white font-rethink">
            Reduction in <InlineMath tex="p" /> if State 3 joins
          </span>
        </div>
        <Slider
          rangeClassName="bg-pink-400"
          onValueChange={updateA}
          value={[a]}
          max={1}
          step={0.01}
        />
      </div>
      <CalcSlider
        tex="q"
        desc="Probability State 3 joins"
        value={q}
        max={1}
        step={0.01}
        onValueChange={updateQ}
        colorStyle="bg-fuchsia-400"
      />
      <BargainingRange x1={x1} x2={x2} />
      <InlineMath tex={`pR-\\alpha qR=${x1.toFixed(2)}`} />
      <br />
      <InlineMath tex={`R-pR+\\alpha qR=${x2.toFixed(2)}`} />
      <br />
      <InlineMath tex={`T-x1-x2=${(100 - x1 - x2).toFixed(2)}`} />
      {100 - x1 - x2 > 0 ? (
        <span className="text-blue-400 font-rethink px-2 text-xl">Peace</span>
      ) : (
        <span className="text-red-400 font-rethink px-2 text-xl">War</span>
      )}
    </div>
  );
}
