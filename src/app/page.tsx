import About from "@/components/about";
import ContactUs from "@/components/contact";
import Footer from "@/components/footer";
import Landing from "@/components/landing";
import Reviews from "@/components/reviews";
import Services from "@/components/services";
import WhyUs from "@/components/why-us";

export default function Home() {
  return (
    <div>
      <Landing />
      <About />
      <Services />
      <WhyUs />
      <Reviews />
      <ContactUs />
      <Footer />
    </div>
  );
}
