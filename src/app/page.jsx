import Footer from "./footer";
import Navbar from "./navbar";
import FrequentlyAsk from "./view/faq-section";
import Testimonials from "./view/testimonials";

export default function Home() {
  return (
    <main className="relative ">
      {/* <div
        className="
    w-[408.4977px] 
    h-[525.5527px] 
    -rotate-[54.74deg] 
    opacity-100 
    top-[1192px] 
    left-[-525px] 
    absolute
  "
      ></div> */}
      <Navbar />
      Home
      <Testimonials />
      <FrequentlyAsk />
      <Footer />
    </main>
  );
}
