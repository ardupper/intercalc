import { useEffect, useState } from "react";
import { CalcSlider } from "./CalcSlider";
import { InlineMath } from "./InlineMath";
import { BargainingRange } from "./BargainingRange";

interface PowerDeclineCalculatorProps {
  className?: string;
}

export function PowerDeclineCalculator({
  className = "",
}: PowerDeclineCalculatorProps) {
  const [r, setR] = useState(80);
  const [p, setP] = useState(0.6);
  const [q, setQ] = useState(0.4);
  const [delta, setDelta] = useState(0.9);
  const [totalValue, setTotalValue] = useState(100 / 0.1);
  const [x1, setX1] = useState(0);
  const [x2, setX2] = useState(0);

  useEffect(() => {
    setX2(r / (1 - delta) - (p * r) / (1 - q * delta));
    setX1((p * r) / (1 - delta));
  }, [r, p, q, delta, totalValue]);

  const updateR = (value: number[]) => {
    setR(value[0]);
  };

  const updateP = (value: number[]) => {
    setP(value[0]);
  };

  const updateQ = (value: number[]) => {
    setQ(value[0]);
  };

  const updateDelta = (value: number[]) => {
    setDelta(value[0]);
    setTotalValue(100 / (1 - value[0]));
  };

  return (
    <div className={className}>
      <div className="pt-4">
        <InlineMath tex={`T=${totalValue.toFixed(2)}`} />
        <span className="text-white font-rethink px-2">Total Value</span>
      </div>
      <CalcSlider
        tex="R"
        desc="Remaining value after war"
        colorStyle="bg-amber-400"
        value={r}
        onValueChange={updateR}
      />
      <CalcSlider
        tex="p"
        desc="Probability State 1 Wins War in Period 1"
        colorStyle="bg-blue-400"
        value={p}
        onValueChange={updateP}
        max={1}
        step={0.01}
      />
      <CalcSlider
        tex="q"
        desc="Each period, the probability of victory is only this percentage of last period"
        colorStyle="bg-blue-700"
        value={q}
        onValueChange={updateQ}
        max={1}
        step={0.01}
      />
      <CalcSlider
        tex="\delta"
        desc="Discount Factor"
        colorStyle="bg-emerald-400"
        value={delta}
        onValueChange={updateDelta}
        max={0.99}
        step={0.01}
      />
      <BargainingRange
        x1={(x1 * 100) / totalValue}
        x2={(x2 * 100) / totalValue}
      />
      <InlineMath tex={`\\frac{pR}{1-\\delta}=${x1.toFixed(2)}`} />
      <span className="text-white font-rethink px-2">
        State 1's Net Present Value of War
      </span>
      <br />
      <InlineMath
        tex={`\\frac{R}{1-\\delta} - \\frac{pR}{1-q\\delta}=${x2.toFixed(2)}`}
      />
      <span className="text-white font-rethink px-2">
        State 2's Net Present Value of War
      </span>
      <br />
      <InlineMath
        tex={`\\frac{T}{1-\\delta}-x_1-x_2=${(totalValue - x1 - x2).toFixed(2)}`}
      />
      {totalValue - x1 - x2 > 0 ? (
        <span className="text-blue-400 font-rethink px-2 text-xl">Peace</span>
      ) : (
        <span className="text-red-400 font-rethink px-2 text-xl">War</span>
      )}
    </div>
  );
}
