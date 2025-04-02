import Backgroundanimation from "./backgroundanimation";
import Trianglemodule2 from "./tiranglemodule2/trianglemodule2";
import Trianglemodule from "./trianglemodule/trianglemodule";

export default function Home() {
    return (
        <div className="relative w-full h-full flex justify-center">
            <div className="absolute z-20 w-2/4 flex justify-start"><div className="rotate-90"><Trianglemodule2 /></div></div>
            <div className="absolute z-20 w-2/4 flex justify-start px-6 py-10"><div className="rotate-90"><Trianglemodule /></div></div>
            <div className="flex h-full w-full bg-green-100">
                <div className="w-1/3 h-full bg-black z-0"><Backgroundanimation /></div>
                <div className="w-2/3 h-full z-10 bg-white flex flex-col justify-center items-center">
                    <div className=" ml-20 flex-col ">
                    <div className="text-slate-300 text-8xl">I'm a</div>
                    <div className="text-black text-6xl font-bold">Web Developer</div>
                    <div className=" text-slate-400 text-lg mt-2 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
                    <div className=" flex">
                        <div className=" w-40 h-10 mt-10 border-2 mr-6 rounded-3xl flex justify-center text-center items-center text-lg text-slate-500">Get Started</div>
                        <div className=" w-40 h-10 mt-10 border-2 rounded-3xl bg-[#754ef9] flex justify-center items-center text-white text-lg">View Portfolio</div>
                    </div>
                    </div>

                    <div className=" p-4 self-end absolute top-3/4 flex">
                        <div >FOLLOW ME ON :</div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
