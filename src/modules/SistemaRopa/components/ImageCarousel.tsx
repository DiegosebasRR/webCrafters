import { Card, CardContent } from "@/components/ui/card";

interface ImageCarouselProps {
  images: { src: string; title?: string }[];
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  // const [currentIndex, setCurrentIndex] = React.useState(0);

  // const prevSlide = () => {
  //   const isFirstSlide = currentIndex === 0;
  //   const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
  //   setCurrentIndex(newIndex);
  // };

  // const nextSlide = () => {
  //   const isLastSlide = currentIndex === images.length - 1;
  //   const newIndex = isLastSlide ? 0 : currentIndex + 1;
  //   setCurrentIndex(newIndex);
  // };

  return (
    <Card className="relative w-full h-[60vh] bg-white">
      <CardContent className="p-0 h-full">
        <div
          style={{ backgroundImage: `url(${images[0].src})` }}
          className="w-full h-full bg-center bg-cover duration-500"
        ></div>
      </CardContent>
    </Card>
  );
}
