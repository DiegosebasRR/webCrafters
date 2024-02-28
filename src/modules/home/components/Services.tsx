import { services } from "@/data/services";
import Service from "./Service";
import { Element } from "react-scroll";
import TitleSection from "@/components/TitleSection";
const Services = () => {
  return (
    <Element name="services">
      <div className=" max-w-screen-xl m-auto">
        <TitleSection title="Servicios" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14 mb-20 px-10">
          {services.map((service, key) => (
            <Service
              key={key}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Services;
