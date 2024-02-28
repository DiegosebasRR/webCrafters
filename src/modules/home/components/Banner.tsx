import { Button } from "@/components/ui/button";
import { Element } from "react-scroll";
const Banner = () => {
  return (
    <Element name="inicio">
      <div className="banner flex gap-10 flex-col justify-center items-center">
        <h1 className="text-[40px]  xl:w-3/5 text-center font-extrabold text-white md:text-[50px] md:px-10 xl:text-[60px] 2xl:text-[80px]">
          Atrae a más clientes con una presencia web impactante
        </h1>
        <p className="text-2xl font-bold text-center px-10">
          Impulsa tu negocio con un sitio web que atraiga y convierta clientes
          potenciales en ventas reales
        </p>
        <a href="https://w.app/WebCrafters" target="_blank">
          <Button className="bg-blue-700 hover:scale-105 transition-all duration-300 p-4 w-56 h-14 text-2xl font-bold text-white">
            Contactanos Aqui
          </Button>
        </a>
      </div>
    </Element>
  );
};

export default Banner;
