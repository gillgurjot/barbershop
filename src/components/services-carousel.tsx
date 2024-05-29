/* eslint-disable @next/next/no-img-element */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import services from "@/data/services.json";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";

const ServicesCarousel = () => {
  return (
    <Carousel className="w-full -mt-36 cursor-grab">
      <CarouselContent className="-ml-1">
        {services.map((service) => (
          <CarouselItem
            key={service.id}
            className="px-4 md:basis-1/2 lg:basis-1/4"
          >
            <div className="p-1">
              <Card className="flex flex-col aspect-square items-center justify-center p-6 shadow-lg">
                <CardHeader>
                  <img className="w-32" src={service.svg} alt={service.name} />
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                  <span className="text-3xl font-semibold">{service.name}</span>
                  <span className="text-xl font-semibold pt-2">
                    Price: ${service.price}
                  </span>
                  <Button className="mt-4">Book Now!</Button>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ServicesCarousel;
