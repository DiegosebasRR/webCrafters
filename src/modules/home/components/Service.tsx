import { FC } from "react";
import { Service as ServiceProps } from "@/types/Service";

const Service: FC<ServiceProps> = ({ title, icon, description }) => {
  console.log(icon);
  return (
    <div className=" bg-white rounded-b-lg border-t-8 border-green-400 px-4 py-5 flex flex-col justify-around shadow-md">
      <p className="text-xl text-black font-bold font-sans">{title}</p>
      <div className="py-3">
        <p className="text-gray-600 text-base">{description}</p>
      </div>
      {/* <div className="flex justify-between">
        <svg
          className="w-6 h-6"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
            stroke-linejoin="round"
            stroke-linecap="round"
          ></path>
        </svg>
        <div className="text-sm flex gap-2">
          <button className="bg-slate-200 px-2 rounded-xl hover:bg-slate-400 transition-colors ease-in-out">
            glee
          </button>
          <button className="bg-slate-200 px-2 rounded-xl hover:bg-slate-400 transition-colors ease-in-out">
            download
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Service;
