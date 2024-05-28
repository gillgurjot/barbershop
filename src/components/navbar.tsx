import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="flex z-10 p-4 bg-transparent items-center justify-around text-white sticky shadow-md bg-opacity-30 top-0 backdrop-filter backdrop-blur-lg">
      <h1 className="font-bold text-3xl text-center font-merriweather">
        Gill&apos;s Barber Shop
      </h1>
      <div className="flex items-center justify-center gap-10 font-semibold">
        <Button variant="link" className="font-semibold text-white">
          Home
        </Button>
        <Button variant="link" className="font-semibold text-white">
          About Us
        </Button>
        <Button variant="link" className="font-semibold text-white">
          Services
        </Button>
        <Button variant="link" className="font-semibold text-white">
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
