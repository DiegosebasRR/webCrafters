import Footer from "@/components/Footer";
import { ModeToggle } from "@/components/ModeToggle";

import { Outlet } from "react-router-dom";
import { Link } from "react-scroll";
const LayoutMain = () => {
  return (
    <div>
      <header className="bg-white dark:bg-background px-10 sticky top-0 w-full border-b-2 z-50">
        <Link
          offset={-130}
          activeClass="text-primary"
          spy={true}
          smooth={true}
          duration={500}
          to="plan"
        >
          <div className="bg-red-500 h-14 text-center text-white text-xl flex items-center justify-center font-bold">
            <p>60% de descuento en el Plan Starter hasta el 10/03</p>
          </div>
        </Link>
        <nav className="flex h-32 lg:h-24 text-lg flex-col lg:justify-between lg:flex-row items-center justify-evenly  ">
          <p className="text-4xl  font-bold hover:text-primary transition-all duration-300">
            WebCrafters
          </p>
          <ul className="w-80 md:w-auto flex gap-12 items-center overflow-auto">
            <li className=" font-bold border-b-4 border-transparent hover:text-primary  hover:border-primary transition-all duration-300">
              <Link
                offset={-130}
                activeClass="text-primary"
                spy={true}
                smooth={true}
                duration={500}
                to="inicio"
              >
                Inicio
              </Link>
            </li>
            <li className="font-bold border-b-4 border-transparent hover:text-primary   hover:border-primary transition-all duration-300">
              <Link
                offset={-130}
                activeClass="text-primary"
                spy={true}
                smooth={true}
                duration={500}
                to="services"
              >
                Services
              </Link>
            </li>
            <li className=" font-bold border-b-4 border-transparent hover:text-primary  hover:border-primary transition-all duration-300">
              <Link
                offset={-130}
                activeClass="text-primary"
                spy={true}
                smooth={true}
                duration={500}
                to="features"
              >
                Caracteristicas
              </Link>
            </li>
            <li className=" font-bold border-b-4 border-transparent hover:text-primary   hover:border-primary transition-all duration-300">
              <Link
                offset={-130}
                activeClass="text-primary"
                spy={true}
                smooth={true}
                duration={500}
                to="plan"
              >
                Planes
              </Link>
            </li>
            <li className="hidden md:block">
              <ModeToggle />
            </li>
          </ul>
        </nav>
      </header>
      <main className="bg-white dark:bg-background pb-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LayoutMain;
