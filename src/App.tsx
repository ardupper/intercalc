import { CalcContainer } from "./components/CalcContainer";
import { AlliesCalculator } from "./components/AlliesCalculator";
import { BargainCalculator } from "./components/BargainCalculator";
import { ImperfectInformationCalculator } from "./components/ImperfectInformationCalculator";
import { InlineMath } from "./components/InlineMath";
import { NuclearWeaponsCalculator } from "./components/NuclearWeaponsCalculator";
import { PowerDeclineCalculator } from "./components/PowerDeclineCalculator";

function App() {
  return (
    <div className="p-8 h-lvh overflow-y-auto bg-zinc-800">
      <h1 className="text-4xl font-bold text-white font-rethink py-4">
        InterCalc
      </h1>
      <h2 className="text-3xl font-bold text-white font-rethink pb-2">
        The Bargaining Model
      </h2>
      <p className="text-white font-rethink py-2">
        The Bargaining Model analyzes a dispute over a divisible good of total
        value <InlineMath tex="T" />. If the states go to war, each pays a cost{" "}
        <InlineMath tex="C" />, and states stand to win the remainder{" "}
        <InlineMath tex="R=T-C" />.
      </p>
      <p className="text-white font-rethink py-2">
        If State 1's probability of winning is <InlineMath tex="p" />, its
        expected payoff from war is <InlineMath tex="pR" />. Any peaceful
        division that gives State 1 at least <InlineMath tex="pR" /> and State 2
        at least <InlineMath tex="(1-p)R" /> lies within the "bargaining range"
        and should prevent war.
      </p>
      <CalcContainer>
        <BargainCalculator className="p-4" />
      </CalcContainer>
      <p className="text-white font-rethink py-2">
        Wars occur when the bargaining range collapses. The primary sources of
        this are <em>Incomplete Information</em> and{" "}
        <em>Power Decline/Commitment Problems</em>
      </p>
      <h3 className="text-2xl font-bold text-white font-rethink pb-2">
        Incomplete Information
      </h3>
      <p className="py-2 text-white font-rethink">
        With incomplete information, states will disagree over their respective
        probabilities of winning. If their perceptions are far enough apart, or
        the cost of war is low enough, no deal satisfies both states, and war
        becomes rational. The Imperfect <em>Information Calculator</em> shows
        how belief discrepancies can eliminate the bargaining range.
      </p>
      <CalcContainer>
        <ImperfectInformationCalculator className="p-4" />
      </CalcContainer>
      <h3 className="text-2xl font-bold text-white font-rethink py-2">
        Power Decline/Commitment Problems
      </h3>
      <p className="py-2 text-white font-rethink">
        When one state is declining relative to another, the rising power cannot
        credibly commit to limit future demands. The declining power may choose
        to fight now, rather than accept weaker peace later. The{" "}
        <em>Power Decline/Commitment Problems</em> calculator demonstrates how
        this dynamic can eliminate the bargaining range.
      </p>
      <CalcContainer>
        <PowerDeclineCalculator className="p-4" />
      </CalcContainer>
      <h2 className="text-3xl font-bold text-white font-rethink py-2">
        Other Bargains
      </h2>
      <p className="py-2 text-white font-rethink">
        Not all modifications to the Bargaining Model result in war. Many result
        in a stable bargaining range.
      </p>
      <h3 className="text-2xl font-bold text-white font-rethink py-2">
        Allies
      </h3>
      <p className="py-2 text-white font-rethink">
        Suppose 2 has an ally, State 3, with <InlineMath tex="q" /> chance of
        joining the war and reducing <InlineMath tex="p" /> by{" "}
        <InlineMath tex="\alpha" />. Even with this additional uncertainty, a
        bargaining range will persist.
      </p>
      <CalcContainer>
        <AlliesCalculator className="p-4" />
      </CalcContainer>
      <h3 className="text-2xl font-bold text-white font-rethink py-2">
        Nuclear Weapons
      </h3>
      <p className="py-2 text-white font-rethink">
        Despite the large number of states that could develop nuclear weapons,
        we see very few actually do so. While this may be explained by treaties,
        the Bargaining Model also provides an explanation:
      </p>
      <p className="py-2 text-white font-rethink">
        Suppose State 2 could spend <InlineMath tex="k" /> to develop a nuclear
        weapon, and doing so would reduce State 1's chance of victory from{" "}
        <InlineMath tex="p" /> to <InlineMath tex="q" />, such that{" "}
        <InlineMath tex="q\ll p" />. A stable bargaining range exists, not only
        to prevent war, but to prevent State 2 from developing a nuclear weapon.
      </p>
      <CalcContainer>
        <NuclearWeaponsCalculator className="p-4" />
      </CalcContainer>
    </div>
  );
}

export default App;
