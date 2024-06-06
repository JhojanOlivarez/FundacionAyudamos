import HeroHome from "@/components/home/HeroHome";
import HowWorks from "@/components/home/HowWorks";
import OurWork from "@/components/home/OurWork";
import HeroDonation from "@/components/home/HeroDonation";
import ContacUs from "@/components/ContactUs";


export default function Page() {
  return (
    <div>
      <HeroHome />
      <HowWorks />
      <OurWork />
      <HeroDonation/>
      <ContacUs/>
    </div>
  );
}