import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="flex py-4 bg-gray-900 items-center justify-around w-full text-white border-b-2 border-white">
      <h1 className="font-bold text-3xl text-center">
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
      <Button variant="ghost" className="font-semibold">
        Login / Signup
      </Button>
    </nav>
  );
};

export default Navbar;
