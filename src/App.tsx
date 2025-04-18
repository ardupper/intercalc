import { CalcContainer } from "./components/CalcContainer";
import { AlliesCalculator } from "./components/AlliesCalculator";
import { BargainCalculator } from "./components/BargainCalculator";
import { ImperfectInformationCalculator } from "./components/ImperfectInformationCalculator";
import { InlineMath } from "./components/InlineMath";
import { NuclearWeaponsCalculator } from "./components/NuclearWeaponsCalculator";
import { PowerDeclineCalculator } from "./components/PowerDeclineCalculator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";

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
        The Bargaining Model supposes that states come in to conflict of value{" "}
        <InlineMath tex="T" />. Because war imposes some cost{" "}
        <InlineMath tex="C" />, states stand to win the remainder{" "}
        <InlineMath tex="T-C=R" />.
      </p>
      <p className="text-white font-rethink py-2">
        Hence, if State 1 has probability <InlineMath tex="p" /> to win the war
        we can model all possible bargains with
      </p>
      <CalcContainer>
        <BargainCalculator className="p-4" />
      </CalcContainer>
      <p className="text-white font-rethink py-2">
        We can see the Bargaining Model requires an acceptable bargaining range
        for all conflicts.
      </p>
      <p className="text-white font-rethink py-2">
        The primary sources of war the the two "Bargaining Failures" of
        Incomplete Information and Power Decline/Commitment Problems
      </p>
      <h3 className="text-2xl font-bold text-white font-rethink pb-2">
        Incomplete Information
      </h3>
      <p className="py-2 text-white font-rethink">
        With incomplete information, States will disagree over their respective
        probabilities to win the war. If their perceptions are far enough
        appart, or the cost of war is low enough, this can lead to war.
      </p>
      <CalcContainer>
        <ImperfectInformationCalculator className="p-4" />
      </CalcContainer>
      <h3 className="text-2xl font-bold text-white font-rethink py-2">
        Power Decline/Commitment Problems
      </h3>
      <p className="py-2 text-white font-rethink">
        When one state is declining relative to another, it can create
        situations where State 1, the declining power, can get more from a war
        immediately than the net present value of peaceful bargains into the
        future. This occurs because State 2 can not make any commitment, as part
        of their bargain, not to demand further concessions from State 1 in the
        future.
      </p>
      <CalcContainer>
        <PowerDeclineCalculator className="p-4" />
      </CalcContainer>
      <h2 className="text-3xl font-bold text-white font-rethink pb-2">
        Other Bargains
      </h2>
      <p className="py-2 text-white font-rethink">
        Not all modifications to the Bargaining Model result in war. Several
        other international interactions can be modeled by bargaining and always
        result in an amicable bargaining range.
      </p>
      <h3 className="text-2xl font-bold text-white font-rethink py-2">
        Allies
      </h3>
      <p className="py-2 text-white font-rethink">
        When State 2 has an ally, State 3, with <InlineMath tex="q" /> chance of
        joining the war and reducing <InlineMath tex="p" /> by{" "}
        <InlineMath tex="\alpha" />
      </p>
      <CalcContainer>
        <PowerDeclineCalculator className="p-4" />
      </CalcContainer>
      <Accordion type="single" collapsible>
        <AccordionItem value="nuclear-weapons">
          <AccordionTrigger className="text-white font-bold font-rethink text-2xl">
            Nuclear Weapons
          </AccordionTrigger>
          <AccordionContent>
            <div className="border-2 border-white border-solid rounded-md">
              <NuclearWeaponsCalculator className="p-4" />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default App;
