import Nav from "./nav";
import Side from "./side";
import Hero from "./hero";
import About from "./about";
import Property from "./properties";
import Contact from "./contact";

export default function Home() {
  return (
    <div className="">
      <main className="h-screen flex flex-row">
      <div className="hero">
      <Nav />
      <Hero />
      
      </div>

  <Side />
    </main>
    <section className="bg-white h-screen">
  <About />
  <Property />
  <Contact />
    </section>
    </div>
    
  );
}
