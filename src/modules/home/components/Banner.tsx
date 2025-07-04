import { Button } from "@/components/ui/button";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { handleRedirectToWhatsApp } from "./handleRedirectToWhatsApp";
const Banner = () => {
  return (
    <Element name="inicio">
      <div className="banner flex flex-col gap-8 justify-center items-center text-center py-20 relative bg-gradient-to-br from-green-400 to-blue-500">
        {/* Animación del título */}
        <motion.h1
          className="text-[40px] xl:w-3/5 font-extrabold text-white md:text-[50px] md:px-10 xl:text-[60px] 2xl:text-[80px] drop-shadow-xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Hola
        </motion.h1>

        {/* Animación del párrafo */}
        <motion.p
          className="text-lg md:text-2xl font-medium text-white drop-shadow-md px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          Convierte clientes potenciales en ventas reales con un sitio web
          profesional.
        </motion.p>

        {/* Botón animado */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.6,
          }}
        >
          <Button
            onClick={() =>
              handleRedirectToWhatsApp({
                text: "¡Hola! Estoy interesado en tu servicio.",
              })
            }
            className="bg-yellow-500 hover:bg-yellow-600 hover:scale-105 transition-all duration-300 p-4 w-56 h-14 text-2xl font-bold text-black rounded-lg shadow-lg"
          >
            Contáctanos Aquí
          </Button>
        </motion.div>
      </div>
    </Element>
  );
};

export default Banner;
