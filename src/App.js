import React, { Suspense, lazy } from "react";
import Navbar from "./components/navbar";
import ErrorBoundary from "./components/errorboundaries";
import CustomCursor from "./components/cursor";

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
      <CustomCursor />
      <div className="absolute top-0 left-0 w-full z-30">
        <Navbar />
      </div>

      <div className="w-full h-full">
        <Suspense fallback={<Loader />}>
          <ErrorBoundary><Home /></ErrorBoundary>
          <ErrorBoundary><Skills /></ErrorBoundary>
          <ErrorBoundary><Aboutus /></ErrorBoundary>
          <ErrorBoundary><Projects /></ErrorBoundary>
          <ErrorBoundary><Myexperience /></ErrorBoundary>
          <ErrorBoundary><Contactus /></ErrorBoundary>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
