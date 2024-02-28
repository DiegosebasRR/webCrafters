import Banner from "../components/Banner";
import Features from "../components/Features";
import Services from "../components/Services";
import Technologies from "../components/Technologies";
import Plans from "@/modules/home/components/Plans";
const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Features />
      <Technologies />
      <Plans />
    </div>
  );
};

export default Home;
