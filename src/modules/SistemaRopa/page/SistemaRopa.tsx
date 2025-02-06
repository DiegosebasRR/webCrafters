"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ImageCarousel } from "../components/ImageCarousel";
import { FeatureModal } from "../components/FeatureModal";
import {
  BarChart,
  CheckCircle,
  Globe,
  Lightbulb,
  Users,
  Zap,
} from "lucide-react";
import { handleRedirectToWhatsApp } from "@/modules/home/components/handleRedirectToWhatsApp";

export default function SistemaRopa() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedFeatureIndex, setSelectedFeatureIndex] = React.useState(0);

  const heroImages = [
    {
      src: "/public/banner.png",
      title: "Sistema Innovador",
    },
    {
      src: "/placeholder.svg?height=600&width=1200",
      title: "Transforme su Negocio",
    },
    {
      src: "/placeholder.svg?height=600&width=1200",
      title: "Solución de Vanguardia",
    },
  ];

  const features = [
    {
      title: "Diseño Principal",
      shortDescription: "Interfaz elegante y fácil de usar",
      details: [
        {
          image: "/public/home/home_1.png",
          description:
            "Nuestro diseño principal ofrece una experiencia de usuario intuitiva y atractiva. Con una disposición clara y una navegación sencilla, los clientes pueden explorar su tienda con facilidad.",
        },
        {
          image: "/public/home/home_2.png",
          description:
            "Destaca tus productos más atractivos con nuestra sección de Ofertas Especiales. Administra fácilmente los productos, precios y promociones desde el panel de control del administrador, asegurando que siempre ofrezcas lo mejor a tus clientes.",
        },
        {
          image: "/public/home/home_3.png",
          description:
            "Facilita la experiencia de compra organizando tus productos en categorías y subcategoriás intuitivas. Desde ropa de hombre, mujer, niños y más, permite que tus clientes encuentren lo que buscan de manera rápida y sencilla. Todas las categorías y subcategoriás pueden ser personalizadas y administradas desde el panel de control",
        },
        {
          image: "/public/home/home_4.png",
          description:
            "Destaca los últimos productos añadidos a tu catálogo para captar la atención de tus clientes. Esta sección muestra automáticamente las novedades más recientes, permitiendo que los usuarios descubran lo más actual de tu tienda.",
        },
      ],
    },
    {
      title: "Funciones del Chatbot",
      shortDescription:
        "Automatiza la atención al cliente con respuestas rápidas y eficientes",
      details: [
        {
          image: "/public/chatbot/faq.png",
          description:
            "📌 **Preguntas Frecuentes (FAQ)** - Resuelve dudas comunes sobre envíos, devoluciones y pagos al instante. El chatbot ofrece respuestas rápidas y precisas sin necesidad de contactar con soporte.",
        },
        {
          image: "/public/chatbot/order.png",
          description:
            "📦 **Consulta de Pedidos** - Introduce tu número de pedido y obtén actualizaciones en tiempo real sobre su estado, desde el procesamiento hasta la entrega.",
        },
        {
          image: "/public/chatbot/recommendation.png",
          description:
            "🎯 **Recomendaciones de Productos** - Recibe sugerencias personalizadas basadas en tus intereses y compras anteriores, facilitando una experiencia de compra más eficiente.",
        },
      ],
    },
    {
      title: "Detalle de Productos",
      shortDescription: "Gestión completa de información de productos",
      details: [
        {
          image: "/public/product/product_1.png",
          description:
            "Ofrece una experiencia completa y detallada para tus clientes. En esta sección, los usuarios pueden explorar imágenes del producto, leer su descripción, seleccionar talla, color y cantidad, además de añadirlo fácilmente al carrito. Incluye etiquetas que destacan características clave, ayudando a los clientes a tomar decisiones rápidas y precisas.",
        },
        {
          image: "/public/product/product_2.png",
          description:
            "Descubre recomendaciones inteligentes con nuestra sección de productos similares. Utilizamos un sistema de puntos basado en características como categoría, subcategoría, etiquetas y otros atributos para ofrecer sugerencias precisas. Esta funcionalidad ayuda a los clientes a explorar opciones relacionadas que se ajusten a sus intereses.",
        },
      ],
    },
    {
      title: "Carrito de compras",
      shortDescription: "Control total sobre su tienda",
      details: [
        {
          image: "/public/cart/cart_1.png",
          description:
            "Administra fácilmente tus compras desde nuestro carrito de compras intuitivo. Visualiza los productos seleccionados, ajusta cantidades y elimina artículos si es necesario. Además, obtén un resumen claro del total a pagar para una experiencia de compra rápida y sin complicaciones.",
        },
      ],
    },
    {
      title: "Creación de pedido",
      shortDescription: "Seguimiento en tiempo real del inventario",
      details: [
        {
          image: "/public/checkout/checkout_1.png",
          description:
            "Facilita el proceso de compra con nuestra sección de creación de pedido. En esta etapa, el cliente completa la información necesaria para realizar su pedido. Permite ingresar datos como el correo electrónico, teléfono y dirección de envío, además de seleccionar el método de envío disponible (estándar, express, etc.)",
        },
        {
          image: "/public/checkout/checkout_2.png",
          description:
            "Información Adicional: Espacio para que el cliente deje notas adicionales o indicaciones importantes relacionadas con el pedido (por ejemplo, instrucciones específicas de entrega). Resumen de Pedido: Muestra un desglose claro de los artículos en el carrito, incluyendo cantidades, precios, descuentos aplicados y el costo total a pagar.",
        },
        {
          image: "/public/checkout/checkout_3.png",
          description:
            "Permite al cliente revisar los datos ingresados, como información de contacto, método de envío y método de pago, además de visualizar el resumen de su pedido. También incluye la opción de adjuntar un comprobante de pago, asegurando que todo esté correcto antes de finalizar la compra.",
        },
        {
          image: "/public/checkout/checkout_4.png",
          description:
            "La última sección muestra un mensaje de confirmación indicando que la orden fue recibida exitosamente, acompañado del número de pedido y los detalles del mismo",
        },
      ],
    },
    {
      title: "Categoriás",
      shortDescription: "Personalización completa de su tienda en línea",
      details: [
        {
          image: "/public/category/category_1.png",
          description:
            "Gestiona tus categorías de productos de forma centralizada. Desde esta sección, puedes visualizar todas las categorías existentes, organizarlas y acceder rápidamente a las opciones para crear o editar.",
        },
        {
          image: "/public/category/category_2.png",
          description:
            "Añade nuevas categorías a tu sistema de manera sencilla. Completa los campos requeridos en un formulario claro e intuitivo, asegurándote de mantener tu inventario bien organizado.",
        },
        {
          image: "/public/category/category_3.png",
          description:
            "Actualiza los detalles de tus categorías existentes con facilidad. Este modal te permite realizar cambios rápidos, asegurando que la información de tu sistema esté siempre al día.",
        },
      ],
    },
    {
      title: "Subategoriás",
      shortDescription: "Personalización completa de su tienda en línea",
      details: [
        {
          image: "/public/subcategory/subcategory_1.png",
          description:
            "Gestiona tus subcategorías de productos de forma centralizada. Desde esta sección, puedes visualizar todas las categorías existentes, organizarlas y acceder rápidamente a las opciones para crear o editar.",
        },
        {
          image: "/public/subcategory/subcategory_2.png",
          description:
            "Añade nuevas subcategorías a tu sistema de manera sencilla. Completa los campos requeridos en un formulario claro e intuitivo, asegurándote de mantener tu inventario bien organizado.",
        },
        {
          image: "/public/subcategory/subcategory_3.png",
          description:
            "Actualiza los detalles de tus subcategorías existentes con facilidad. Este modal te permite realizar cambios rápidos, asegurando que la información de tu sistema esté siempre al día.",
        },
      ],
    },
    {
      title: "Productos",
      shortDescription: "Personalización completa de su tienda en línea",
      details: [
        {
          image: "/public/productManagement/product_1.png",
          description:
            "Administra todos los productos de tu inventario desde esta sección. Visualiza, edita y gestiona fácilmente la información de cada artículo, asegurando un control completo sobre tu catálogo.",
        },
        {
          image: "/public/productManagement/product_2.png",
          description:
            "Añade nuevos productos a tu catálogo con un formulario dividido en dos secciones: Completa campos como nombre, descripción, precio, y etiquetas. Además, puedes agregar combinaciones de tamaños y colores",
        },
        {
          image: "/public/productManagement/product_3.png",
          description:
            "Asigna categorías y subcategorías y sube imágenes del producto para personalizarlo completamente",
        },
        {
          image: "/public/productManagement/product_4.png",
          description:
            "Realiza ajustes en los detalles de tus productos ya existentes. Este modal permite editar información general, categorías, combinaciones de tamaños y colores, asegurando que tu catálogo siempre esté actualizado.",
        },
        {
          image: "/public/productManagement/product_5.png",
          description:
            "Configura ofertas especiales para tus productos fácilmente. Establece un precio promocional y activa la oferta para resaltar productos en descuento, atrayendo más clientes a tu tienda",
        },
      ],
    },
    {
      title: "Ordenes",
      shortDescription: "Personalización completa de su tienda en línea",
      details: [
        {
          image: "/public/order/order_1.png",
          description:
            "Administra y actualiza el estado de los pedidos de forma eficiente. Cambia el estado de un pedido en secuencia, cancélalos si es necesario o realiza ajustes personalizados desde un panel centralizado.",
        },
        {
          image: "/public/order/order_2.png",
          description:
            "Actualiza el estado de los pedidos rápidamente desde este modal. Selecciona el nuevo estado y guarda los cambios.",
        },
        {
          image: "/public/order/order_3.png",
          description:
            "Consulta toda la información detallada de un pedido, incluyendo los datos del cliente, artículos solicitados, método de envío, y tarifas. Ideal para revisar y verificar antes de realizar cambios",
        },
        {
          image: "/public/order/order_4.png",
          description:
            "El sistema notifica automáticamente a los clientes cada vez que el estado de su pedido cambia. Los correos incluyen información actualizada del pedido, brindando transparencia y confianza durante todo el proceso.",
        },
      ],
    },
    {
      title: "Control de Stock",
      shortDescription: "Seguimiento en tiempo real del inventario",

      details: [
        {
          image: "/public/stock/stock_1.png",
          description:
            "Supervisa y controla los niveles de inventario de todos tus productos. Visualiza en una tabla el stock actual y recibe alertas automáticas cuando el stock sea bajo, asegurando un manejo eficiente del inventario.",
        },
        {
          image: "/public/stock/stock_2.png",
          description:
            "Ajusta el inventario de tus productos fácilmente desde este modal. Establece el stock disponible y configura el stock mínimo para activar las alertas, manteniendo siempre el control sobre la disponibilidad.",
        },
      ],
    },
    {
      title: "Configuración de Página",
      shortDescription: "Personalización completa de su tienda en línea",
      details: [
        {
          image: "/public/config/config_1.png",
          description:
            "Personalice la apariencia de su tienda con nuestro editor de arrastrar y soltar. Modifique diseños, añada secciones y ajuste elementos sin necesidad de conocimientos técnicos.",
        },
        {
          image: "/public/config/config_2.png",
          description:
            "Cree páginas personalizadas para promociones, sobre nosotros, políticas y más. Nuestro sistema de gestión de contenidos flexible le permite crear y organizar fácilmente el contenido de su sitio.",
        },
        {
          image: "/public/config/config_3.png",
          description:
            "Optimice su tienda para motores de búsqueda con nuestras herramientas SEO integradas. Edite metadatos, genere sitemaps automáticamente y cree URLs amigables para mejorar la visibilidad de su tienda.",
        },
      ],
    },
    {
      title: "Acerca de la tienda",
      shortDescription: "Personalización completa de su tienda en línea",
      details: [
        {
          image: "/public/about/about_1.png",
          description:
            "Personalice la apariencia de su tienda con nuestro editor de arrastrar y soltar. Modifique diseños, añada secciones y ajuste elementos sin necesidad de conocimientos técnicos.",
        },
      ],
    },
    {
      title: "Dashboard",
      shortDescription: "Personalización completa de su tienda en línea",
      details: [
        {
          image: "/public/dashboard/dashboard_1.png",
          description:
            "Personalice la apariencia de su tienda con nuestro editor de arrastrar y soltar. Modifique diseños, añada secciones y ajuste elementos sin necesidad de conocimientos técnicos.",
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="relative">
        <ImageCarousel images={heroImages} />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="text-center text-white">
            <h1 className="text-5xl font-light mb-4">
              Sistema Innovador de E-commerce
            </h1>
            <p className="text-xl font-light mb-8">
              Transforme su negocio con nuestra solución de vanguardia
            </p>
            <Button
              onClick={() =>
                handleRedirectToWhatsApp({
                  text: `¡Hola! Estoy interesado en comenzar prueba gratuita del sistema de E-commerce.`,
                })
              }
              size="lg"
              className="bg-white text-black hover:bg-gray-200"
            >
              Comenzar Prueba Gratuita
            </Button>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-12">
            Beneficios de Nuestro Sistema
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-50">
              <CardHeader>
                <CheckCircle className="h-10 w-10 text-green-500 mb-4" />
                <CardTitle className="text-xl font-light">
                  Tu Empleado 24/7
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Nuestra plataforma trabaja las 24 horas del día, generando
                  ventas y gestionando clientes mientras tú descansas.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-50">
              <CardHeader>
                <BarChart className="h-10 w-10 text-blue-500 mb-4" />
                <CardTitle className="text-xl font-light">
                  Automatización de Ventas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Optimiza todo el proceso de ventas, desde la captación hasta
                  la conversión, sin interrupciones y sin necesidad de
                  intervención humana.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-50">
              <CardHeader>
                <Lightbulb className="h-10 w-10 text-yellow-500 mb-4" />{" "}
                {/* Nuevo icono */}
                <CardTitle className="text-xl font-light">
                  Generación de Ingresos Automática
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Aprovecha cada oportunidad para generar ingresos de manera
                  constante, sin tener que preocuparte por horarios o
                  disponibilidad.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-light text-center mb-12">
          Funcionalidades Principales
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white overflow-hidden cursor-pointer transition-shadow hover:shadow-lg"
              onClick={() => {
                setSelectedFeatureIndex(index);
                setIsModalOpen(true);
              }}
            >
              <img
                src={feature.details[0].image}
                alt={feature.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-xl font-light">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.shortDescription}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-12">
            Transforme su Negocio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Zap className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
              <p className="text-4xl font-light mb-2">30%</p>
              <p className="text-xl">Aumento en ventas</p>
            </div>
            <div className="text-center">
              <Users className="h-16 w-16 text-blue-400 mx-auto mb-4" />
              <p className="text-4xl font-light mb-2">50%</p>
              <p className="text-xl">Mejora en eficiencia operativa</p>
            </div>
            <div className="text-center">
              <Globe className="h-16 w-16 text-green-400 mx-auto mb-4" />
              <p className="text-4xl font-light mb-2">40%</p>
              <p className="text-xl">Incremento en satisfacción del cliente</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-light mb-8">
            ¿Por Qué Elegir Nuestro Sistema?
          </h2>
          <p className="text-xl mb-12">
            Nuestro sistema de e-commerce no es solo una herramienta, es su
            socio en el éxito digital. Con tecnología de vanguardia y un diseño
            centrado en el usuario, le ofrecemos:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Facilidad de Uso</h3>
              <p>Interfaz intuitiva que no requiere conocimientos técnicos</p>
            </div>
            <div>
              <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Escalabilidad</h3>
              <p>
                Crece con su negocio, desde startups hasta empresas establecidas
              </p>
            </div>
            <div>
              <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Soporte Premium</h3>
              <p>Asistencia dedicada para garantizar su éxito</p>
            </div>
            <div>
              <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Innovación Continua
              </h3>
              <p>
                Actualizaciones regulares con las últimas tendencias del
                e-commerce
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-light text-center mb-12">
          Planes y Tarifas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-2xl font-light">
                Plan Mensual
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-light mb-6">
                S/ 500<span className="text-xl">/mes</span>
              </p>
              <ul className="space-y-2 mb-6">
                <p className="text-sm mb-2">Pago mensualmente</p>
                <li>Acceso completo</li>
                <li>Soporte básico</li>
                <li>Actualizaciones incluidas</li>
              </ul>
              <Button
                onClick={() =>
                  handleRedirectToWhatsApp({
                    text: `¡Hola! Estoy interesado en comenzar con el plan mensual del sistema de E-commerce.`,
                  })
                }
                className="w-full"
              >
                Seleccionar Plan
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-2xl font-light">
                Plan Semestral
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-light mb-6">
                S/ 400<span className="text-xl">/mes</span>
              </p>
              <p className="text-sm mb-2">Pago semestralmente</p>
              <ul className="space-y-2 mb-6">
                <li>Acceso completo</li>
                <li>Soporte prioritario</li>
                <li>S/100 de descuento</li>
              </ul>
              <Button
                onClick={() =>
                  handleRedirectToWhatsApp({
                    text: `¡Hola! Estoy interesado en comenzar con el plan semestral del sistema de E-commerce.`,
                  })
                }
                className="w-full"
              >
                Seleccionar Plan
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-2xl font-light">Plan Anual</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-light mb-6">
                S/ 350<span className="text-xl">/mes</span>
              </p>
              <p className="text-sm mb-2">Pago anualmente</p>
              <ul className="space-y-2 mb-6">
                <li>Acceso completo</li>
                <li>Soporte 24/7</li>
                <li>S/150 de descuento</li>
              </ul>
              <Button
                onClick={() =>
                  handleRedirectToWhatsApp({
                    text: `¡Hola! Estoy interesado en comenzar con el plan anual del sistema de E-commerce.`,
                  })
                }
                className="w-full"
              >
                Seleccionar Plan
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-light">
                Licencia de por Vida
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-light mb-6">S/ 6000</p>
              <p className="text-sm mb-2">Pago único</p>
              <ul className="space-y-2 mb-6">
                <li>Acceso de por vida</li>
                <li>Actualizaciones ilimitadas</li>
              </ul>
              <p className="text-sm text-gray-600">
                Soporte técnico y pago al servidor: S/ 200 adicionales.
              </p>

              <Button
                onClick={() =>
                  handleRedirectToWhatsApp({
                    text: `¡Hola! Estoy interesado en obtener el sistema de E-commerce de por vida.`,
                  })
                }
                className="w-full bg-white text-black hover:bg-gray-200"
              >
                Comprar Ahora
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-light mb-6">Prueba Gratuita</h2>
          <p className="text-xl mb-8">
            Experimente el poder de nuestro sistema con una prueba gratuita de
            14 días. Sin compromisos, sin tarjeta de crédito requerida.
          </p>
          <Button
            onClick={() =>
              handleRedirectToWhatsApp({
                text: `¡Hola! Estoy interesado en comenzar prueba gratuita del sistema de E-commerce.`,
              })
            }
            size="lg"
          >
            Comenzar Prueba Gratuita
          </Button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-light text-center mb-12">
          Preguntas Frecuentes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              q: "¿Cómo funciona la prueba gratuita?",
              a: "Nuestra prueba gratuita le da acceso completo a todas las funciones del sistema durante 14 días, sin compromiso ni tarjeta de crédito requerida.",
            },
            {
              q: "¿Puedo cambiar de plan en cualquier momento?",
              a: "Sí, puede actualizar, degradar o cancelar su plan en cualquier momento desde su panel de control.",
            },
            {
              q: "¿Qué incluye el soporte técnico?",
              a: "Todos los planes incluyen soporte técnico por email. Los planes superiores ofrecen soporte prioritario y acceso a soporte telefónico.",
            },
            {
              q: "¿Cómo funciona la licencia de por vida?",
              a: "La licencia de por vida es un pago único que le da acceso permanente al sistema, incluyendo todas las actualizaciones futuras.",
            },
            {
              q: "¿El sistema es compatible con mi negocio actual?",
              a: "Nuestro sistema es altamente flexible y se adapta a una amplia gama de negocios. Ofrecemos integraciones personalizadas para garantizar una transición sin problemas.",
            },
            {
              q: "¿Qué pasa si necesito ayuda para configurar mi tienda?",
              a: "Ofrecemos servicios de configuración y onboarding para asegurar que su tienda esté perfectamente adaptada a sus necesidades.",
            },
          ].map((faq, index) => (
            <Card key={index} className="bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-light">{faq.q}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{faq.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <FeatureModal
        features={features}
        initialFeatureIndex={selectedFeatureIndex}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}
