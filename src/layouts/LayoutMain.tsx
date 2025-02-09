import Footer from "@/components/Footer";
import WhatsAppButton from "@/modules/home/components/WhatsAppButton";
import {
  Outlet,
  useLocation,
  useNavigate,
  Link as RouterLink,
} from "react-router-dom";
import { scroller } from "react-scroll";

const LayoutMain = () => {
  const location = useLocation();
  const navigate = useNavigate();

  type HandleNavigationFunction = (to: string, offset: number) => void;

  const handleNavigation: HandleNavigationFunction = (to, offset) => {
    if (location.pathname !== "/") {
      // Navegar a la página principal sin recargar
      navigate("/", { state: { target: to, offset } });
    } else {
      // Usar react-scroll si ya estás en la página principal
      scroller.scrollTo(to, {
        smooth: true,
        duration: 500,
        offset,
      });
    }
  };

  return (
    <div>
      <header className="bg-white dark:bg-background px-10 sticky top-0 w-full border-b-2 z-50">
        <nav className="flex h-32 lg:h-24 text-lg flex-col lg:justify-between lg:flex-row items-center justify-evenly">
          <p className="text-4xl font-bold hover:text-primary transition-all duration-300">
            Desarrollando Conexiones
          </p>
          <ul className="w-80 md:w-auto flex gap-12 items-center overflow-auto">
            <li className="font-bold border-b-4 border-transparent hover:text-primary hover:border-primary transition-all duration-300">
              <button onClick={() => handleNavigation("inicio", -130)}>
                Inicio
              </button>
            </li>
            <li className="font-bold border-b-4 border-transparent hover:text-primary hover:border-primary transition-all duration-300">
              <RouterLink to="/sistemaropa">E-commerce</RouterLink>
            </li>
            <li className="font-bold border-b-4 border-transparent hover:text-primary hover:border-primary transition-all duration-300">
              <button onClick={() => handleNavigation("services", -130)}>
                Services
              </button>
            </li>
            <li className="font-bold border-b-4 border-transparent hover:text-primary hover:border-primary transition-all duration-300">
              <button onClick={() => handleNavigation("features", -130)}>
                Caracteristicas
              </button>
            </li>
            <li className="font-bold border-b-4 border-transparent hover:text-primary hover:border-primary transition-all duration-300">
              <button onClick={() => handleNavigation("plan", -130)}>
                Planes
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main className="bg-white dark:bg-background pb-10">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default LayoutMain;
