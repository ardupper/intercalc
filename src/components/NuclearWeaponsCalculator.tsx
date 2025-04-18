import { useEffect, useState } from "react";
import { InlineMath } from "./InlineMath";
import { CalcSlider } from "./CalcSlider";
import { BargainingRange } from "./BargainingRange";

interface NuclearWeaponsCalculatorProps {
  className: string;
}

export function NuclearWeaponsCalculator({
  className,
}: NuclearWeaponsCalculatorProps) {
  const [r, setR] = useState(80);
  const [delta, setDelta] = useState(0.9);
  const [p, setP] = useState(0.8);
  const [q, setQ] = useState(0.2);
  const [k, setK] = useState(20);
  const [x1, setX1] = useState(0);
  const [x2, setX2] = useState(0);

  useEffect(() => {
    setX2(100 + k - (p * r + 100 - r - delta * (p - q) * r + k));
    setX1(p * r + 100 - r - delta * (p - q) * r);
  }, [r, delta, p, q, k]);

  const updateR = (value: number[]) => {
    setR(value[0]);
  };

  const updateDelta = (value: number[]) => {
    setDelta(value[0]);
  };

  const updateP = (value: number[]) => {
    setP(value[0]);
    if (value[0] < q) {
      setQ(value[0]);
    }
  };

  const updateQ = (value: number[]) => {
    setQ(value[0]);
    if (value[0] > p) {
      setP(value[0]);
    }
  };

  const updateK = (value: number[]) => {
    setK(value[0]);
  };

  return (
    <div className={className}>
      <CalcSlider
        tex="R"
        desc="Value remaining after war"
        value={r}
        onValueChange={updateR}
        colorStyle="bg-amber-400"
      />
      <CalcSlider
        tex="\delta"
        desc="Discount Factor"
        value={delta}
        onValueChange={updateDelta}
        colorStyle="bg-emerald-400"
        max={1}
        step={0.01}
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
      <CalcSlider
        tex="q"
        desc="Probability State 1 Wins War after State 2 Develops Weapon"
        value={q}
        onValueChange={updateQ}
        colorStyle="bg-blue-400"
        max={1}
        step={0.01}
      />
      <CalcSlider
        tex="K"
        desc="Cost to Develop Weapon"
        value={k}
        onValueChange={updateK}
        colorStyle="bg-indigo-400"
      />
      <BargainingRange
        x1={x1 * (100 / (100 + k))}
        x2={x2 * (100 / (100 + k))}
      />
      <InlineMath tex={`T+k-(pR+T-R-\\delta(p-q)R+k)=${x2.toFixed(2)}`} />
      <br />
      <InlineMath tex={`pR+T-R-\\delta(p-q)R=${x1.toFixed(2)}`} />
      <br />
      <InlineMath tex={`100-x1-x2=${(100 - x1 - x2).toFixed(2)}`} />
      {100 + k - x1 - x2 >= 0 ? (
        <span className="text-blue-400 font-rethink px-2 text-xl">Peace</span>
      ) : (
        <span className="text-red-400 font-rethink px-2 text-xl">War</span>
      )}
    </div>
  );
}
