import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <footer className="bg-orange-600 text-white flex justify-around mt-20 pt-10 pb-10 w-full">
        <div className="flex flex-col items-start justify-items-start w-1/5">
          <h2 className="text-xl font-merriweather font-bold">Links</h2>
          <hr className="w-3/5 border-2 border-white" />
          <div className="flex flex-col items-start mt-8">
            <Button
              variant="link"
              className="font-semibold text-white text-lg hover:text-black p-0"
            >
              Services
            </Button>
            <Button
              variant="link"
              className="font-semibold text-white text-lg hover:text-black p-0 "
            >
              Book Appointment
            </Button>
            <Button
              variant="link"
              className="font-semibold text-white text-lg hover:text-black p-0 "
            >
              About Us
            </Button>
            <Button
              variant="link"
              className="font-semibold text-white text-lg hover:text-black p-0"
            >
              Contact Us
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-start justify-items-start w-1/5">
          <h2 className="text-xl font-merriweather font-bold">Our Policies</h2>
          <hr className="w-3/5 border-2 border-white" />
          <div className="flex flex-col items-start mt-8">
            <Button
              variant="link"
              className="font-semibold text-white text-lg hover:text-black p-0"
            >
              Terms and Conditions
            </Button>
            <Button
              variant="link"
              className="font-semibold text-white text-lg hover:text-black p-0 "
            >
              Privacy Policy
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-start justify-items-start w-1/5">
          <h2 className="text-xl font-merriweather font-bold">
            Bussiness Hours
          </h2>
          <hr className="w-3/5 border-2 border-white" />
          <div className="flex flex-col items-start mt-8">
            <p className="font-semibold text-lg">Mon - Fri</p>
            <p className="">9:00 AM - 5:00 PM</p>
            <p className="font-semibold pt-2 text-lg">Sat</p>
            <p className="">11:00 AM - 6:00 PM</p>
            <p className="font-semibold pt-2 text-lg">Sun</p>
            <p className="">Closed</p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-items-start w-1/5">
          <h2 className="text-xl font-merriweather font-bold">Contact</h2>
          <hr className="w-3/5 border-2 border-white" />
          <div className="flex flex-col items-start mt-8">
            <p className="font-semibold text-lg cursor-pointer hover:underline hover:text-black">
              +1 234 567 8900
            </p>
            <p className="font-semibold text-lg py-2 cursor-pointer hover:underline hover:text-black">
              gillsbarbershop@example.com
            </p>
            <p className="font-semibold text-lg">123 Main Street</p>
            <p className="font-semibold text-lg">New York, NY 10001</p>
          </div>
        </div>
      </footer>
      <div className="bg-black text-white">
        <p className="text-white text-center font-merriweather font-semibold py-2 tracking-widest">
          Designed and built with passion by{" "}
          <a target="_blank" href="https://www.gurjotgill.com">
            <span className="text-primary cursor-pointer underline">Gill</span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
