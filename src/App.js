import Home from "./pages/home";
import Navbar from "./components/navbar";
// import AnimatedCursor from "react-animated-cursor"
import Aboutus from "./pages/aboutus";
import Skills from "./pages/skills";
import Myexperience from "./pages/myexperience";
import Contactus from "./pages/contactus";

function App() {
  return (
    <div className=" w-full h-screen">
      {/* <AnimatedCursor
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
        color: '117, 78, 249', // Updated color
        outerAlpha: 0.2,
        innerScale: 0.2,
        outerScale: 2
      }
    }
  ]}
/> */}

      <div className="absolute top-0 left-0 w-full z-30">
        <Navbar />
      </div>
      <div className="w-full h-full">
        <Home />
        <Skills />
        <Aboutus/>
        {/* <Myexperience />
        <Contactus /> */}
      </div>
    </div>

  );
}


export default App;
