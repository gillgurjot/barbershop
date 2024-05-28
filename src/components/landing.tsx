import React from "react";
import { Button } from "./ui/button";

const Landing = () => {
  return (
    <div className="bg-[url('/images/landing.jpg')] relative top-[-10vh] bg-zinc-700 bg-blend-multiply h-[70vh] flex items-center justify-center">
      <div className="w-2/3 pt-5">
        <h1 className="font-merriweather text-6xl font-bold text-white">
          Best Barber Shop{" "}
          <span className="underline text-primary">in Town</span>
        </h1>
        <p className="text-white py-5 w-3/4 leading-7 text-lg">
          Experience precision grooming in a relaxed atmosphere. Our skilled
          barbers deliver top-notch cuts, shaves, and styles tailored to you.
          Discover why we&apos; re the best shop in town!
        </p>
        <Button size="lg">Book an Appointment</Button>
      </div>
    </div>
  );
};

export default Landing;
