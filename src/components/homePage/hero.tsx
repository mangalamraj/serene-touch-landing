import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import heroImage from "../../../public/hero.svg";
import rightdown from "../../../public/right-down.png";
import "./style.css";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center md:mt-40 mt-20">
      <main className="container mx-auto flex flex-col gap-8 px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-8">
          <div className="flex flex-col gap-2 z-10 w-full md:w-1/2">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Simplify Patient{" "}
              <span className="rounded-xl underline decoration-blue-400 decoration-dashed">
                Management
              </span>
              <br />
              Like Never Before
            </h1>
            <div className="text-lg md:text-2xl text-gray-500 font-medium">
              Streamline Appointments, Records, and Care <br />
              in{" "}
              <p className="dark:text-white text-black inline ">
                One Powerful Platform{" "}
              </p>
            </div>
            <div className="flex gap-4 items-center mt-8 relative ">
              <Button className={cn("md:py-6 md:px-6")}>
                <Link
                  href="/appointments"
                  className="font-normal text-sm md:text-sm flex items-center gap-2"
                >
                  Try Now
                  <ArrowUpRight />
                </Link>
              </Button>
              <div className="absolute left-28 md:left-36 top-4  md:top-8 hidden md:block">
                <Image
                  src={rightdown}
                  alt="arrow"
                  className="md:w-14 w-10 rotate-[190deg] "
                ></Image>
                <div className="mt-4 font-bold text-sm text-center text-blue-400 permanent-marker-regular">
                  Hi Doc , Try It Now !
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={heroImage}
              alt="heroImage"
              className="w-full max-w-[700px] md:max-w-[800px] object-contain"
              priority
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
