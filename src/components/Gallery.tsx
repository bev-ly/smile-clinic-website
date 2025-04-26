
import { Image } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export const Gallery = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1527576539890-dfa815648363",
      title: "Modern Facility"
    },
    {
      url: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      title: "Treatment Room"
    },
    {
      url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      title: "Consultation Area"
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <Image className="w-12 h-12 text-sky-600 mb-4" />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Gallery</h2>
          <div className="w-24 h-1 bg-sky-600 rounded mb-8"></div>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[500px] w-full">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
                    <h3 className="text-xl font-semibold">{image.title}</h3>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-4" />
          <CarouselNext className="mr-4" />
        </Carousel>
      </div>
    </section>
  );
};
