import { features } from "@/data/feactures";
import Feature from "./Feature";
import { Element } from "react-scroll";
import TitleSection from "@/components/TitleSection";
const Features = () => {
  return (
    <Element name="features">
      <div>
        <TitleSection title="Caracteristicas" />
        <div className="flex justify-center my-10">
          <div className="grid grid-cols-3 gap-10">
            {features.map((feature) => (
              <Feature
                key={feature.id}
                id={feature.id}
                description={feature.description}
                title={feature.title}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Features;
