import Image from "next/image";

const WhyUs = () => {
  return (
    <div className="flex w-full justify-center mt-20">
      <div className="flex w-4/5 justify-center items-center">
        <div className="w-1/2">
          <div className="h-[400px] w-[300px] bg-black rounded-2xl relative">
            <Image
              src="/images/barber-whyus.jpg"
              alt="about"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
        <div className="w-1/2">
          <h2 className="text-primary uppercase font-merriweather font-semibold text-xl tracking-widest flex items-center">
            <hr className="w-12 border-2 border-primary mr-4" />
            Why Choose Us
          </h2>
          <h1 className="text-4xl font-bold font-merriweather leading-snug">
            Elevate your style with us. Personalized service,{" "}
            <span className="text-primary">expert grooming.</span>
          </h1>
          <p className="py-5 text-lg">
            With us, it&apos;s more than just a haircut; it&apos;s a
            personalized journey to refine your look and boost your confidence.
            Our expert barbers deliver tailored service, ensuring every detail
            is crafted to suit your individual style.
            <br />
            <br />
            What sets us apart is our unwavering commitment to excellence and
            customer satisfaction. From the moment you step through our doors,
            you&apos;re greeted with warmth and hospitality, making you feel
            right at home. Our barbers combine their expertise with a passion
            for enhancing your style, guaranteeing a grooming experience like no
            other.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
