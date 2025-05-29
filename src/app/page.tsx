import Nav from "./sections/nav";
import Side from "./sections/side";
import Hero from "./sections/hero";
import About from "./sections/about";
import Property from "./sections/properties";
import Contact from "./sections/contact";
import Footer from "./sections/footer";

export default function Home() {
  return (
    <>
      <main className="flex flex-col  lg:flex-row">
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
     <Footer background="bg-[var(--background)]"/>
    </>
  );
}