import React, { Suspense, lazy } from "react";
import Navbar from "./components/navbar";
import AnimatedCursor from "react-animated-cursor";

// Lazy load all page components
const Home = lazy(() => import("./pages/home"));
const Aboutus = lazy(() => import("./pages/aboutus"));
const Skills = lazy(() => import("./pages/skills"));
const Myexperience = lazy(() => import("./pages/myexperience"));
const Contactus = lazy(() => import("./pages/contactus"));
const Projects = lazy(() => import("./pages/projects"));

// Optional fallback loader
const Loader = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="w-10 h-10 border-4 border-purple-500 border-dotted rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <div className="w-full h-screen">
      <AnimatedCursor
        innerSize={5}
        outerSize={40}
        color="117, 78, 249"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
          {
            target: '.custom',
            options: {
              innerSize: 5,
              outerSize: 5,
              color: '117, 78, 249',
              outerAlpha: 0.2,
              innerScale: 0.2,
              outerScale: 2
            }
          }
        ]}
      />

      <div className="absolute top-0 left-0 w-full z-30">
        <Navbar />
      </div>

      <div className="w-full h-full">
        <Suspense fallback={<Loader />}>
          <Home />
          <Skills />
          <Aboutus />
          <Projects />
          <Myexperience />
          <Contactus />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
