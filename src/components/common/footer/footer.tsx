"use client";
import { Separator } from "../../ui/separator";
import { Button } from "../../ui/button";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="dark:bg-black">
      <div className=" text-center flex flex-col items-center ">
        <Separator className="w-full" />
        <div className="font-semibold flex items-center justify-center text-xl md:text-2xl gap-2 md:mt-20 mt-10 mb-10">
          <span className="text-3xl">⚕️</span>
          SereneTouch
        </div>
        <div>
          <div className=" gap-2  flex justify-center mb-10">
            <Button variant={"ghost"} className="text-base">
              <Link to="feature" smooth duration={500} offset={-150}>
                About
              </Link>
            </Button>
            <Button variant={"ghost"} className="text-base">
              <Link to="features" smooth duration={500} offset={-150}>
                Features
              </Link>
            </Button>
            <Button variant={"ghost"} className="text-base">
              <Link to="features" smooth duration={500} offset={-150}>
                Contact
              </Link>
            </Button>
          </div>
        </div>
        <div className="text-xs text-[#a1a1aa] mb-8">
          Copyright © 2024 Whitehole, Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
