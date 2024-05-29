import React from "react";
import ReviewsCarousel from "./reviews-carousel";

const Reviews = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 bg-orange-100 pb-5">
      <div className="w-4/5">
        <h1 className="text-4xl font-bold font-merriweather leading-snug pt-10 text-center">
          Our customers <span className="text-primary">loves us!</span>
        </h1>
        <div className="flex items-center justify-center">
          <ReviewsCarousel />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
