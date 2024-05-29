import About from "@/components/about";
import Landing from "@/components/landing";
import Services from "@/components/services";
import WhyUs from "@/components/why-us";

export default function Home() {
  return (
    <div>
      <Landing />
      <About />
      <Services />
      <WhyUs />
    </div>
  );
}
