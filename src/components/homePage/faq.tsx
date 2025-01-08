import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "../ui/badge";

export function FaqComponent() {
  return (
    <div
      className="container md:text-center flex flex-col gap-2 md:gap-0"
      id="faq"
    >
      <div className="mb-4">
        <Badge variant="outline" className="text-sm md:px-4 md:py-1">
          Faq
        </Badge>
      </div>
      <div className="text-2xl font-semibold md:text-4xl md:leading-[64px]">
        Doubts? No Worries We Got You Covered.
      </div>
      <div className="md:text-lg text-[#a1a1aa] md:mb-8">
        Get the Answers You Need: Your Guide to Our{" "}
        <p className="dark:text-white text-black inline">
          Patient Management Platform
        </p>
      </div>
      <div className="flex w-full justify-center text-left">
        <Accordion type="single" collapsible className="w-[800px]">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left">
              What features does the patient management platform offer?
            </AccordionTrigger>
            <AccordionContent>
              Our platform offers appointment scheduling, patient record
              management, communication tools, and analytics to streamline your
              operations and improve patient care.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left">
              Is the platform secure for storing patient data?
            </AccordionTrigger>
            <AccordionContent>
              Yes, the platform complies with all necessary security standards,
              including HIPAA, to ensure the confidentiality and safety of
              patient data.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left">
              Can the platform be customized for my practices needs?
            </AccordionTrigger>
            <AccordionContent>
              Absolutely! Our platform is fully customizable, allowing you to
              tailor features, workflows, and the user interface to meet your
              practices specific requirements.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left">
              Does the platform support integration with existing systems?
            </AccordionTrigger>
            <AccordionContent>
              Yes, the platform supports seamless integration with your existing
              systems, including EHR/EMR systems, billing software, and
              communication tools.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left">
              How can I ensure my staff is trained to use the platform?
            </AccordionTrigger>
            <AccordionContent>
              We provide comprehensive training and ongoing support to ensure
              your staff can effectively use the platform and maximize its
              potential.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
