// import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="container w-full mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
          img={item.img}
          textReveal={item.textReveal}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "Manage Queues Like Never Before",
    description:
      "Revolutionize your workflow with efficient queue management, saving time and enhancing productivity.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    img: "/queue.png",
  },
  {
    title: "Store Patients Vitals and History",
    description:
      "Securely track and maintain comprehensive patient records, ensuring seamless healthcare delivery.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    img: "/vitals.png",
  },
  {
    title: "Connect With Your Website.",
    description:
      "Seamlessly integrate your services with your website, enhancing user engagement and connectivity.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    img: "/website.jpeg",
  },
  {
    title: "Generate Prescription (Coming Soon...)",
    description:
      "Simplify the prescription process with an intuitive tool designed for precision and ease.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    textReveal: true,
  },
];
