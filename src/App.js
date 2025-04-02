import Home from "./components/home";
import Navbar from "./components/navbar";
import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <div className="relative w-full h-screen"> 
    <AnimatedCursor
      innerSize={5}
      outerSize={40}
      color='193, 11, 111'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
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
            innerSize: 12,
            outerSize: 12,
            color: '255, 255, 255',
            outerAlpha: 0.3,
            innerScale: 0.7,
            outerScale: 5
          }
        }
      ]}
    />
      <div className="absolute top-0 left-0 w-full z-30">
        <Navbar />
      </div>
      <div className="w-full h-full">
        <Home />
      </div>
    </div>
   
  );
}


export default App;
