"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import reviews from "@/data/reviews.json";
import Autoplay from "embla-carousel-autoplay";

const ReviewsCarousel = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
      className="w-full cursor-grab pt-5"
    >
      <CarouselContent className="-ml-1">
        {reviews.map((review) => (
          <CarouselItem key={review.id} className="px-4 ">
            <div className="p-1">
              <p className="text-center text-lg">{review.comment}</p>
              <p className="text-center text-primary font-bold text-xl pt-2">
                {review.name}
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ReviewsCarousel;
