//travel-app/app/layout.tsx

//what happens in the home page, stays on the homepage

//theres different sections on our page within the body
//so we create their components, and put/call them here on the page

// we use "<></>"" this to wrap everything in react fragment to group elements but we dont need to give them additional classes, as to a div
//we can render our diff sections of page seperately

import Hero from "./components/Hero";
import Camp from "./components/Camp";
import Guide from "./components/Guide";
import Features from "./components/Features";
import GetApp from "./components/GetApp";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
      <Footer />
    </>
  )
}
