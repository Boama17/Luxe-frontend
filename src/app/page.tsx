import { Suspense } from "react";
import Nav from "./sections/nav";
import Side from "./sections/side";
import Hero from "./sections/hero";
import About from "./sections/about";
import Property from "./sections/properties";
import Contact from "./sections/contact";
import Footer from "./sections/footer";
import SearchResults from "./search/searchResults";

export default function Home() {
  return (
    <>
      <main className="flex flex-col  lg:flex-row">
        <div className="hero-container w-full lg:w-3/5 min-h-[110vh]">
          <Nav />
          <Hero />
        </div>
        <div className="side-container pt-10 lg:w-2/5 min-h-screen">
          <Side />
        </div>
      </main>
      <Suspense fallback={<div>Loading search results...</div>}>
        <SearchResults />
      </Suspense>
      <Property />  
      <About />  
      <Contact />
      <Footer background="bg-[var(--background)]"/>
    </>
  );
}