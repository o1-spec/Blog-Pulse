import BlogDisplay from "./_components/BlogDisplay";
import HomepageBlogsTwo from "./_components/HomepageBlogsTwo";
import Hero from "./_components/Hero";
import HomeNav from "./_components/HomeNav";
import Newsletter from "./_components/Newsletter";
import ScrollDown from "./_components/ScrollDown";
import GetStarted from "./_components/GetStarted";
import Footer from "./_components/Footer";
import Faq from "./_components/Faq";

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
      <Faq/>
      <div  className="text-white mt-16 bg-bgBlue">
        <GetStarted />
        <Footer />
      </div>
    </>
  );
}
