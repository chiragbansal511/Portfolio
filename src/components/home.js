import Backgroundanimation from "./backgroundanimation";
import Trianglemodule2 from "./tiranglemodule2/trianglemodule2";
import Trianglemodule from "./trianglemodule/trianglemodule";

export default function Home() {
    return (
        <div className=" relative w-full h-full flex justify-center">
            <div className=" absolute w-2/4 flex justify-start"><div className=" rotate-90"><Trianglemodule2 /></div></div>
            <div className=" absolute w-2/4 flex justify-start px-6 py-10"><div className=" rotate-90"><Trianglemodule /></div></div>
            <div className="flex h-full w-full bg-green-100 -z-20">
                <div className=" w-1/3 h-full bg-black -z-10"><Backgroundanimation/></div>
                <div className=" w-2/3 z-10 bg-white"></div>
            </div>
        </div>
    );
}