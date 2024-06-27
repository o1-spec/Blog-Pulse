import BlogDisplay from "./_components/Home/BlogDisplay";
import HomepageBlogsTwo from "./_components/Home/HomepageBlogsTwo";
import Hero from "./_components/Home/Hero";
import HomeNav from "./_components/Home/HomeNav";
import Newsletter from "./_components/Home/Newsletter";
import ScrollDown from "./_components/Home/ScrollDown";
import GetStarted from "./_components/Home/GetStarted";
import Footer from "./_components/Home/Footer";
import Faq from "./_components/Home/Faq";
import PhoneDisplay from "./_components/Home/PhoneDisplay";

export default function Home() {
  return (
    <>
      <div className="relative w-[100vw] h-[100%] pb-6 bg-hero-bg bg-cover shadow-overlay bg-center">
        <HomeNav />
        <Hero />
        <ScrollDown />
      </div>
      <div>
        <BlogDisplay />
      </div>
      <Newsletter />
      <HomepageBlogsTwo />
      <PhoneDisplay />
      <Faq />
      <div className="text-white bg-bgBlue">
        <GetStarted />
        <Footer />
      </div>
    </>
  );
}
