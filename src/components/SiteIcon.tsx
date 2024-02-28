import { Link } from "react-router-dom";

const SiteIcon = () => {
  return (
    <Link
      to="/"
      className="flex items-center justify-center w-full   sm:justify-start "
    >
      <img
        src="/users2.png"
        className="w-16 xl:w-20"
        alt="icono de fake store app"
      />
      <p className="text-4xl sm:text-2xl xl:text-4xl font-bold">
        User Factory API
      </p>
    </Link>
  );
};

export default SiteIcon;
