import { handleRedirectToWhatsApp } from "./handleRedirectToWhatsApp";

const WhatsAppButton = () => {
  return (
    <button
      onClick={() =>
        handleRedirectToWhatsApp({
          text: "¡Hola! Estoy interesado en tu servicio.",
        })
      }
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0a12 12 0 0 0-9.49 19.2l-2 6a1 1 0 0 0 1.23 1.23l6-2A12 12 0 0 0 24 12a11.93 11.93 0 0 0-3.48-8.52ZM12 22a9.93 9.93 0 0 1-5.26-1.52l-.37-.23-3.59 1.2 1.2-3.58-.24-.37a9.92 9.92 0 1 1 8.26 4.5Zm5.35-7.16c-.3-.15-1.77-.87-2.04-.97s-.47-.15-.67.15-.77.97-.95 1.16-.35.22-.65.07a8.18 8.18 0 0 1-2.4-1.47 9 9 0 0 1-1.66-2.05c-.17-.3 0-.46.13-.61s.3-.35.45-.52a2 2 0 0 0 .3-.52.55.55 0 0 0 0-.53c-.07-.15-.67-1.6-.91-2.17s-.47-.52-.65-.53-.36 0-.56 0a1.07 1.07 0 0 0-.78.37 3.28 3.28 0 0 0-1 2.43A5.71 5.71 0 0 0 7.3 14a12.77 12.77 0 0 0 5 4.19 13.82 13.82 0 0 0 1.34.4 3.23 3.23 0 0 0 1.47.1 2.86 2.86 0 0 0 1.88-1.32 2.24 2.24 0 0 0 .16-1.32c-.07-.15-.26-.22-.55-.36Z" />
      </svg>
    </button>
  );
};

export default WhatsAppButton;
