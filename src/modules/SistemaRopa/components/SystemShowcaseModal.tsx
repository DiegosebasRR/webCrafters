"use client";

import * as React from "react";
import { X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ImageCarousel } from "./ImageCarousel";

export function SystemShowcaseModal() {
  const [isOpen, setIsOpen] = React.useState(false);

  const images = [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Descubre Nuestro Sistema</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[900px]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-light tracking-tight">
            Sistema Innovador
          </DialogTitle>
          <DialogDescription className="text-lg font-light">
            Transforme su negocio con nuestra solución de vanguardia
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6">
          <ImageCarousel images={images} />
          <div className="space-y-4">
            <h3 className="text-2xl font-light">Funcionalidades Principales</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Análisis en tiempo real de datos de clientes</li>
              <li>Integración perfecta con plataformas existentes</li>
              <li>Interfaz intuitiva y personalizable</li>
              <li>Seguridad de nivel empresarial</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-light">
              ¿Por qué elegir nuestro sistema?
            </h3>
            <p className="text-muted-foreground">
              Nuestro sistema no es solo una herramienta, es una inversión en el
              futuro de su negocio. Con tecnología de punta y un diseño centrado
              en el usuario, le permitirá:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Aumentar la productividad en un 30%</li>
              <li>Reducir costos operativos hasta en un 25%</li>
              <li>Mejorar la satisfacción del cliente en un 40%</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-light">Planes y Tarifas</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <h4 className="text-xl font-medium">Plan Básico</h4>
                <p className="text-2xl font-light mt-2">$99/mes</p>
                <ul className="mt-4 space-y-2">
                  <li>Hasta 5 usuarios</li>
                  <li>Soporte por email</li>
                  <li>Actualizaciones mensuales</li>
                </ul>
              </div>
              <div className="p-4 border rounded-lg bg-primary text-primary-foreground">
                <h4 className="text-xl font-medium">Plan Premium</h4>
                <p className="text-2xl font-light mt-2">$199/mes</p>
                <ul className="mt-4 space-y-2">
                  <li>Usuarios ilimitados</li>
                  <li>Soporte 24/7</li>
                  <li>Actualizaciones semanales</li>
                  <li>Funciones avanzadas</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-light">Prueba Gratuita</h3>
            <p className="text-muted-foreground">
              Experimente el poder de nuestro sistema con una prueba gratuita de
              7 días. Sin compromisos, sin tarjeta de crédito requerida.
            </p>
            <Button className="w-full">Comenzar Prueba Gratuita</Button>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4"
          onClick={() => setIsOpen(false)}
        >
          <X className="h-4 w-4" />
        </Button>
      </DialogContent>
    </Dialog>
  );
}
