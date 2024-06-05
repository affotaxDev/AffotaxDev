import ChoosePackage from "./Subpages/ChoosePackage";
import HomeTop from "./Subpages/HomeTop";
import HowItWorks from "./Subpages/HowItWorks";
import ServicesTo from "./Subpages/ServicesTo";
import WhyUs from "./Subpages/WhyUs";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 max-md:p-0">
        <HomeTop />
        <ChoosePackage />
        <HowItWorks />
        <WhyUs />
        <ServicesTo />
    </main>
  );
}




