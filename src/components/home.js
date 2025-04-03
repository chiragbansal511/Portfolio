import Backgroundanimation from "./backgroundanimation";
import Trianglemodule2 from "./tiranglemodule2/trianglemodule2";
import Trianglemodule from "./trianglemodule/trianglemodule";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import email from "../assets/email.png";

export default function Home() {
    return (
        <div className="relative w-full h-full flex justify-center">
            <div className="absolute z-20 w-2/4 flex justify-start"><div className="rotate-90"><Trianglemodule2 /></div></div>
            <div className="absolute z-20 w-2/4 flex justify-start px-6 py-10"><div className="rotate-90"><Trianglemodule /></div></div>
            <div className="flex h-full w-full bg-green-100">
                <div className="w-1/3 h-full bg-black z-0"><Backgroundanimation /></div>
                <div className="w-2/3 h-full z-10 bg-white flex flex-col justify-center items-center">
                    <div className=" ml-20 flex-col ">
                    <div className=" text-[#e1e0e5] text-8xl font-merriweather  ">I'm a</div>
                    <div className="text-black text-6xl font-bold font-montserrat">Web Developer</div>
                    <div className=" text-[#a3a2a5] text-lg mt-2 font-medium  font-inter">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
                    <div className=" flex">
                        <div className=" w-40 h-10 mt-10 border-2 mr-6 rounded-3xl flex justify-center text-center items-center text-lg text-slate-500  font-inter">Get Started</div>
                        <div className=" w-40 h-10 mt-10 border-2 rounded-3xl bg-[#754ef9] flex justify-center items-center text-white text-lg animate-bounce font-inter">View Portfolio</div>
                    </div>
                    </div>

                    <div className=" p-4 self-end absolute bottom-4 flex items-center justify-evenly">
                        <div className=" w-1/2 font-medium text-[#a3a2a5] font-inter">FOLLOW ME ON :</div>
                        <div className="bg-[#754ef9] w-14 h-0.5 rounded-2xl "></div>
                        <div className=" w-32 h-4 flex justify-evenly">
                            <img src={linkedin}/>
                            <img src={github}/>
                            <img src={email}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
