interface HandleRedirectToWhatsAppProps {
  text?: string;
}

export const handleRedirectToWhatsApp = ({
  text = "¡Hola! Estoy interesado en tu servicio.",
}: HandleRedirectToWhatsAppProps): void => {
  const phoneNumber = "+51939838062"; // Reemplaza con el número de teléfono
  const message = encodeURIComponent(text); // Mensaje codificado

  // Construir el enlace de WhatsApp
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappUrl, "_blank"); // Abrir en nueva pestaña
};
