import { FC } from "react";

interface TitleSectionProps {
  title: string;
}

const TitleSection: FC<TitleSectionProps> = ({ title }) => {
  return <h2 className="text-center text-4xl font-bold my-10">{title}</h2>;
};

export default TitleSection;
