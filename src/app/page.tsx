import Footer from "@/components/common/footer/footer";
import { FaqComponent } from "@/components/homePage/faq";
import Features from "@/components/homePage/features";
import Hero from "@/components/homePage/hero";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 md:gap-40">
      <Hero />
      <Features />
      <FaqComponent />
      <Footer />
    </div>
  );
}
