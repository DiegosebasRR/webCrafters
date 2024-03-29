import { plans } from "@/data/plans";
import Plan from "./Plan";
import { Element } from "react-scroll";
import TitleSection from "@/components/TitleSection";
const Plans = () => {
  return (
    <Element name="plan">
      <div className="max-w-screen-xl m-auto ">
        <TitleSection title="Nuestros Planes" />
        <div className="gap-10 grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-4 px-10">
          {plans.map((plan, key) => (
            <Plan
              key={key}
              title={plan.title}
              price={plan.price}
              features={plan.features}
              description={plan.description}
            />
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Plans;
