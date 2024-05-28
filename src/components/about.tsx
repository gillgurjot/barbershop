import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex w-full justify-center min-h-80">
      <div className="flex w-4/5 justify-center items-center">
        <div className="w-1/2">
          <div className="h-[400px] w-[350px] bg-black rounded-2xl relative">
            <Image
              src="/images/barber-about.jpg"
              alt="about"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
        <div className="w-1/2">
          <h2 className="text-primary font-merriweather font-semibold text-xl tracking-widest flex items-center">
            <hr className="w-12 border-2 border-primary mr-4" />
            About Us
          </h2>
          <h1 className="text-4xl font-bold font-merriweather leading-snug">
            Expert cuts and styles that make you look and feel{" "}
            <span className="text-primary">amazing.</span>
          </h1>
          <p className="py-5 text-lg">
            At Gill&apos;s Barber Shop, we combine traditional barbering with
            modern techniques to deliver personalized grooming services. Our
            skilled barbers are dedicated to precision and care, ensuring you
            leave looking and feeling your best in a welcoming atmosphere.
            <br />
            <br />
            We stay updated with the latest trends to provide exceptional
            haircuts, shaves, and styles. Each visit is tailored to your
            preferences, making us more than just a barbershop. Join our
            community and discover why we are the best shop in town.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
