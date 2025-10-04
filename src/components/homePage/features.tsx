import { Badge } from "../ui/badge";
import { BentoGridSecondDemo } from "./featureCards";

const Features = () => {
  return (
    <div className="flex flex-col gap-10" id="feature">
      <div>
        <div className="container md:text-center mb-4">
          <Badge variant="outline" className="text-sm md:px-4 md:py-1">
            Feature
          </Badge>
        </div>
        <div className="container md:text-4xl text-2xl font-semibold flex md:justify-center">
          We love to offer
        </div>
        <div className="text-gray-500 text-2xl container font-medium md:text-center">
          {" "}
          Software-as-a-Servive for{" "}
          <p className="dark:text-white text-black inline ">Doctors </p>
        </div>
      </div>
      <BentoGridSecondDemo />
    </div>
  );
};

export default Features;
