import Hero from "./_components/Hero";
import HomeNav from "./_components/HomeNav";
import ScrollDown from "./_components/ScrollDown";

export default function Home() {
  return (
    <>
      <div className="relative w-[100vw] h-[100vh] bg-hero-bg bg-cover shadow-overlay bg-center">
        <HomeNav />
        <Hero />
        <ScrollDown/>
      </div>
    </>
  );
}
