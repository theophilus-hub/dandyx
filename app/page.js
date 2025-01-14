import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Section1 from "@/components/section1";
import PhoneSection1 from "@/components/phoneSection1";
import Featured from "@/components/featured";
import PhoneSection2 from "@/components/phoneSection2";
import Section2 from "@/components/section2";
import PhoneSection3 from "@/components/phoneSection3";
import Section3 from "@/components/section3";
import Values from "@/components/values";
import Mission from "@/components/mission";
import Faq from "@/components/faq";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="font-poppins">
      <main className=" font-poppins">
        <Nav />
        <Hero />
        <PhoneSection1 />
        <Section1 />
        <Featured />
        <PhoneSection2 />
        <Section2 />
        <PhoneSection3 />
        <Section3 />
        <Values />
        <Mission />
        <Faq />
        <Footer />
      </main>
         </div>
  );
}
