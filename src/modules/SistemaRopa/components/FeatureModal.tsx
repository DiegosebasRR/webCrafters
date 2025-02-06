"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface FeatureDetail {
  image: string;
  description: string;
}

interface Feature {
  title: string;
  shortDescription: string;
  details: FeatureDetail[];
}

interface FeatureModalProps {
  features: Feature[];
  initialFeatureIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export function FeatureModal({
  features,
  initialFeatureIndex,
  isOpen,
  onClose,
}: FeatureModalProps) {
  const [currentFeatureIndex, setCurrentFeatureIndex] =
    React.useState(initialFeatureIndex);
  const [currentDetailIndex, setCurrentDetailIndex] = React.useState(0);

  const currentFeature = features[currentFeatureIndex];
  React.useEffect(() => {
    if (isOpen) {
      setCurrentFeatureIndex(initialFeatureIndex); // Resetea la funcionalidad.
      setCurrentDetailIndex(0); // Siempre empieza en la página 1.
    }
  }, [isOpen, initialFeatureIndex]);
  const nextFeature = () => {
    setCurrentFeatureIndex((prevIndex) => (prevIndex + 1) % features.length);
    setCurrentDetailIndex(0);
  };

  const prevFeature = () => {
    setCurrentFeatureIndex(
      (prevIndex) => (prevIndex - 1 + features.length) % features.length
    );
    setCurrentDetailIndex(0);
  };

  const nextDetail = () => {
    setCurrentDetailIndex(
      (prevIndex) => (prevIndex + 1) % currentFeature.details.length
    );
  };

  const prevDetail = () => {
    setCurrentDetailIndex(
      (prevIndex) =>
        (prevIndex - 1 + currentFeature.details.length) %
        currentFeature.details.length
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[900px]">
        <DialogHeader>
          <DialogTitle>{currentFeature.title}</DialogTitle>
          <DialogDescription>
            {currentFeature.shortDescription}
          </DialogDescription>
        </DialogHeader>

        {/* Agregamos el ScrollArea */}
        <ScrollArea className="max-h-[70vh] pr-2">
          <div className="relative mt-4">
            <img
              src={currentFeature.details[currentDetailIndex].image}
              alt={`${currentFeature.title} - Detalle ${
                currentDetailIndex + 1
              }`}
              className="w-full h-[500px] object-cover rounded-md"
            />
            {currentFeature.details.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-1/2 left-2 transform -translate-y-1/2"
                  onClick={prevDetail}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-1/2 right-2 transform -translate-y-1/2"
                  onClick={nextDetail}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </>
            )}
          </div>

          <p className="text-sm text-gray-500 mt-4">
            {currentFeature.details[currentDetailIndex].description}
          </p>
        </ScrollArea>

        {/* Controles de navegación */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6">
          <Button onClick={prevFeature} variant="outline">
            <ChevronLeft className="mr-2 h-4 w-4" /> Funcionalidad anterior
          </Button>
          <span className="text-sm text-gray-500">
            {currentDetailIndex + 1} / {currentFeature.details.length}
          </span>
          <Button onClick={nextFeature} variant="outline">
            Siguiente funcionalidad <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
