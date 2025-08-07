import Backgroundanimation from "../components/backgroundanimation";
import Trianglemodule2 from "../components/tiranglemodule2/trianglemodule2";
import Trianglemodule from "../components/trianglemodule/trianglemodule";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import email from "../assets/email.png";
import Sidepattern from "../components/sidepattern";
import { TypeAnimation } from 'react-type-animation';

const width = window.innerWidth;
const height = window.innerHeight;

export default function Home() {
  return (
    <div id="home" className="w-full h-full flex justify-center items-center">
      <div className="absolute z-20 w-2/4 flex justify-start  max-[1300px]:top-[var(--my-top)]" ><div className="rotate-90"><Trianglemodule2 /></div>
        <style>
          {`
      :root {
        --my-top: 0rem;
      }

      @media (max-width: 1300px) {
        :root {
          --my-top: 17vh; /* same as Tailwind's top-20 */
        }
      }

      @media (max-height: 670px) {
        :root {
          --my-top: 10vh; /* same as Tailwind's top-20 */
        }
      }
    `}
        </style>
      </div>
      <div className="absolute z-20 w-2/4 flex justify-start px-7 max-[1300px]:px-5 py-14 max-[1300px]:py-16 mt-20 max-[1300px]:-mt-5  max-[1300px]:top-[var(--my-top)]"><div className="rotate-90"><Trianglemodule /></div></div>
      <div className="flex h-full w-full bg-green-100 max-[1300px]:flex-col">
        <div className="w-1/3 h-full bg-black z-0 max-[1300px]:w-full max-[1300px]:h-1/3"><Backgroundanimation /></div>
        <div className="max-[1300px]:w-full max-[1300px]:h-2/3 w-2/3 h-full z-10 bg-white flex flex-col justify-center items-center">
          <div className=" max-[1300px]:ml-0 ml-40 flex-col max-[1300px]:mr-0 max-[1350px]:mr-10 max-[1370px]:mr20 max-[1450px]:mr-24 max-[1300px]:text-center">
            <div className=" text-[#e1e0e5] text-8xl font-merriweather max-[1300px]:px-6 max-[1300px]:mt-10 max-[1300px]:text-7xl">I'm a</div>
            <div className="text-black text-6xl font-bold font-montserrat max-[1300px]:px-6 max-[1300px]:text-4xl">Web Developer</div>
            <div className=" text-[#a3a2a5] text-lg mt-2 font-medium font-inter max-[1300px]:px-6 max-[1300px]:text-sm">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed once, initially
                  'I build scalable web apps',
                  1000,
                  'I turn ideas into products',
                  1000,
                  'I engineer seamless user experiences',
                  1000,
                  'I optimize performance & uptime',
                  1000,
                ]}
                speed={50}
                style={{ fontSize: '1em', marginLeft: '10px', color: '#a3a2a5' }}
                repeat={Infinity}
              />

            </div>
            <div className=" flex max-[1300px]:justify-center">
              <div
                className="w-40 h-10 mt-10 border-2 mr-6 rounded-3xl flex justify-center text-center items-center text-lg text-slate-500 font-inter cursor-pointer max-[1300px]:text-base"
                onClick={() => window.scrollBy({ top: window.innerHeight / 2, behavior: 'smooth' })}
              >
                Get Started
              </div>
              <div className=" w-40 h-10 mt-10 border-2 rounded-3xl bg-[#754ef9] flex justify-center items-center text-white text-lg animate-bounce font-inter max-[1300px]:text-base">ProfileGPT</div>
            </div>
          </div>

          <div className=" p-4 self-end absolute bottom-2 flex items-center justify-evenly max-[1300px]:w-full">
            <div className=" w-1/2 font-medium text-[#a3a2a5] font-inter text-end px-4">FOLLOW ME ON :</div>
            <div className="bg-[#754ef9] w-14 h-0.5 rounded-2xl "></div>
            <div className=" w-32 h-6 flex justify-evenly">
              <img
                src={linkedin}
                alt="LinkedIn"
                className="cursor-pointer"
                onClick={() => window.open("https://www.linkedin.com/in/chirag-bansal-750275284/", "_blank")}
              />

              <img
                src={github}
                alt="GitHub"
                className="cursor-pointer"
                onClick={() => window.open("https://github.com/chiragbansal511", "_blank")}
              />

              <img
                src={email}
                alt="Email"
                className="cursor-pointer"
                onClick={() => window.location.href = "mailto:contact@chiragbansal.in"}
              />

            </div>
          </div>
        </div>
      </div>
      <div className=" absolute z-30 right-5 max-[1450px]:hidden"><Sidepattern /></div>
    </div>
  );
}
