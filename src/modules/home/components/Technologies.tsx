import TitleSection from "@/components/TitleSection";
import { firstRow } from "@/data/technologies";

const Technologies = () => {
  return (
    <div className="content w-4/5 h-52 m-auto  ">
      <TitleSection title="Tecnologias" />
      <div className="benefits mt-6">
        <div className="basic-marquee basic-marquee-1 mt-10 ">
          {firstRow.map((technology) => (
            <img className="w-24" src={`/svg/${technology.name}.svg`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
