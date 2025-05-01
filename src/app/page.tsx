import Nav from "./nav";
import Side from "./side";
import Hero from "./hero";
import About from "./about";
import Property from "./properties";
import Contact from "./contact";

export default function Home() {
  return (
    <>
      <main className="flex flex-col lg:flex-row">
        <div className="hero-container w-full lg:w-3/5 min-h-[110vh]">
          <Nav />
          <Hero />
        </div>
        <div className="side-container lg:w-2/5 min-h-screen">
          <Side />
        </div>
      </main>
      <About />
       <Property />    
     <Contact />
    </>
  );
}