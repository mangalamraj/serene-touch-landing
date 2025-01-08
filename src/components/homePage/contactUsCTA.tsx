import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";

const ContactUsCta = () => {
  return (
    <div className="container" id="contact">
      <Card className="m-auto w-full flex flex-col gap-8 justify-center items-center align-middle text-center md:w-[80em] p-8">
        <div className="flex flex-col gap-2">
          <div className="md:text-4xl text-2xl font-semibold">
            Get Started Now!
          </div>
          <div className="text-base text-[#a1a1aa]">
            Put your email below we will know you are intereseted.
          </div>
        </div>
        <Input className="md:w-1/2 text-center" placeholder="john@gmail.com" />
        <Button>Submit</Button>
      </Card>
    </div>
  );
};

export default ContactUsCta;
