import { Plan as PlanProps } from "@/types/Plan";
import { FC } from "react";
import { handleRedirectToWhatsApp } from "./handleRedirectToWhatsApp";

const Plan: FC<PlanProps> = ({ title, price, features, description }) => {
  return (
    <div className="bg-white rounded-lg h-fit overflow-hidden shadow-lg transition-transform transform hover:scale-105">
      <div className="p-1 bg-green-400"></div>
      <div className="p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
        <p className="text-gray-600 text-sm mb-6">{description}</p>
        {title == "Plan Starter" ? (
          <div className="my-2 bg-red-500 font-bold text-white text-xl text-center rounded-3xl">
            60% de descuento
          </div>
        ) : (
          ""
        )}
        {title == "Plan Starter" ? (
          <div>
            <p className="text-xl font-bold text-gray-800 line-through">
              {price}
            </p>
            <p className="text-4xl font-bold text-gray-800 mb-6">S/100</p>
          </div>
        ) : (
          <p className="text-4xl font-bold text-gray-800 mb-6">{price}</p>
        )}

        <ul className="text-base text-gray-600 mb-6">
          {features.map((feature, key) => (
            <li key={key} className="mb-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                className="w-4 h-4 mr-2 text-green-500"
              >
                <path
                  d="M5 13l4 4L19 7"
                  stroke-width="2"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4">
        <button
          onClick={() =>
            handleRedirectToWhatsApp({
              text: `¡Hola! Estoy interesado en el plan ${title}.`,
            })
          }
          className="w-full bg-green-500 text-white rounded-full px-4 py-2 hover:bg-green-700 focus:outline-none focus:shadow-outline-green active:bg-green-800"
        >
          Seleccionar Plan
        </button>
      </div>
    </div>
  );
};

export default Plan;
