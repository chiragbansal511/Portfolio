import Trianglemodule from "./trianglemodule/trianglemodule";

export default function Home() {
    return (
        <div className=" relative w-full h-full flex justify-center">
           <div className=" absolute w-2/4 flex justify-start"><div className=" rotate-90"><Trianglemodule /></div></div>
           <div className=" absolute w-2/4 flex justify-start px-6 py-10"><div className=" rotate-90"><Trianglemodule /></div></div>
            <div className="flex h-full w-full bg-green-100">
                <div className=" w-1/3 h-full bg-black"></div>
                <div className=" w-2/3 "></div>
            </div>
        </div>
    );
}