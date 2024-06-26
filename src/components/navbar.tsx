import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex z-10 p-4 bg-black/50 items-center justify-around text-white sticky shadow-md bg-opacity-30 top-0 backdrop-filter backdrop-blur-lg">
      <Image
        className="cursor-pointer"
        src="/images/barber-logo-white.png"
        alt="logo"
        width={45}
        height={45}
      />
      <div className="flex items-center justify-center gap-10 font-semibold">
        <Button
          variant="link"
          className="font-semibold text-white hover:text-primary"
        >
          Home
        </Button>
        <Button
          variant="link"
          className="font-semibold text-white hover:text-primary"
        >
          About Us
        </Button>
        <Button
          variant="link"
          className="font-semibold text-white hover:text-primary"
        >
          Services
        </Button>
        <Button
          variant="link"
          className="font-semibold text-white hover:text-primary"
        >
          Contact Us
        </Button>
      </div>
      <Button variant="secondary" className="font-semibold">
        Login / Signup
      </Button>
    </nav>
  );
};

export default Navbar;
