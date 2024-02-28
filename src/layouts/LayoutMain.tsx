import Footer from "@/components/Footer";
import { ModeToggle } from "@/components/ModeToggle";
import WhatsApp from "@/components/WhatsApp";

import { Outlet } from "react-router-dom";
import { Link } from "react-scroll";
const LayoutMain = () => {
  return (
    <div>
      <header className="bg-white dark:bg-background px-10 sticky top-0 w-full border-b-2 z-50">
        <nav className="flex h-24 text-lg justify-between items-center">
          <p className="text-4xl text- sm:text-2xl xl:text-4xl font-bold hover:text-primary transition-all duration-300">
            WebCrafters
          </p>
          <ul className="flex gap-12 items-center">
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
            <li>
              <ModeToggle />
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsApp />
    </div>
  );
};

export default LayoutMain;
