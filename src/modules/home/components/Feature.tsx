import { FC } from "react";

interface FeatureProps {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

const Feature: FC<FeatureProps> = ({ id, title, icon, description }) => {
  return (
    <div className="group dark:shadow-xl dark:shadow-gray-500 service-card w-[300px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-gray-200 flex flex-col items-start gap-3 transition-all duration-500 group hover:bg-[#202127]">
      <span>{icon}</span>
      <p className="font-bold text-2xl group-hover:text-white text-black/80">
        {title}
      </p>
      <p className="text-gray-600 group-hover:text-gray-300 text-base">
        {description}
      </p>
      <p
        style={{
          WebkitTextStroke: "1px gray",
          WebkitTextFillColor: "transparent",
        }}
        className="text-5xl font-bold self-end"
      >
        {id}
      </p>
    </div>
  );
};

export default Feature;
