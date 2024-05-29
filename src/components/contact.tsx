import React from "react";
import ContactForm from "./contact-form";

const ContactUs = () => {
  return (
    <div className="flex w-full justify-center mt-20">
      <div className="flex w-4/5 justify-center items-center">
        <div className="w-1/2 flex items-center justify-center">
          <ContactForm />
        </div>
        <div className="w-1/2">
          <h2 className="text-primary uppercase font-merriweather font-semibold text-xl tracking-widest flex items-center">
            <hr className="w-12 border-2 border-primary mr-4" />
            Contact Us
          </h2>
          <h1 className="text-4xl font-bold font-merriweather leading-snug">
            Your Satisfaction, Our Priority:{" "}
            <span className="text-primary">Contact Us Today!</span>
          </h1>
          <p className="py-5 text-lg">
            Experience grooming excellence crafted just for you. Our skilled
            team surpasses expectations, offering precision haircuts, classic
            shaves, and modern styling. Schedule today to embark on your
            personalized grooming journey. With attentive staff ready to listen
            and understand your needs, we ensure expert guidance to elevate your
            style. Immerse yourself in professionalism, attention to detail, and
            unwavering dedication to your satisfaction.
            <br />
            <br />
            Let&apos;s transform your look together, making every visit an
            experience of rejuvenation and empowerment. Contact us now to
            discover the difference in grooming that speaks uniquely to you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
