import Footer from "./footer";
import Navbar from "./navbar";
import BannerSection from "./view/banner";
import BuildEveryOneSection from "./view/build-everyone";
import FrequentlyAsk from "./view/faq-section";
import ServiceSection from "./view/service";
import Testimonials from "./view/testimonials";

export default function Home() {
  return (
    <main className="relative lg:overflow-hidden ">
      <Navbar />
      <BannerSection />
      <ServiceSection />
      <BuildEveryOneSection />
      <Testimonials />
      <FrequentlyAsk />
      <Footer />
    </main>
  );
}
