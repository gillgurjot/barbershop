import Image from "next/image";
import ServicesCarousel from "./services-carousel";

const Services = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10 bg-primary">
      <div className="flex justify-center bg-orange-100">
        <div className="flex w-4/5 justify-center items-center pt-20 pb-56">
          <div className="w-1/2">
            <h2 className="text-primary font-merriweather font-semibold text-xl tracking-widest flex items-center">
              <hr className="w-12 border-2 border-primary mr-4" />
              Services
            </h2>
            <h1 className="text-4xl font-bold font-merriweather leading-snug">
              What we provide to our{" "}
              <span className="text-primary">customers.</span>
            </h1>
            <p className="py-5 text-lg">
              Experience top-tier grooming with our range of services, including
              precision haircuts, classic shaves, beard trims, and modern
              styling. Our skilled barbers tailor each service to your unique
              style, ensuring you leave looking and feeling your best. Visit us
              for a premium grooming experience.
            </p>
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <div className="h-[400px] w-[300px] bg-black rounded-2xl relative">
              <Image
                src="/images/barber-services.jpg"
                alt="about"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-4/5 pb-10">
        <ServicesCarousel />
      </div>
    </div>
  );
};

export default Services;
