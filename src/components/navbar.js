export default function Navbar()
{
    return(
        <div className=" w-full h-14 flex">
            <div className=" w-1/3 h-full bg-black flex justify-end text-center">
            <p className="h-full text-white font-semibold text-2xl flex items-center p-2">Chirag Bansal</p>
            </div>
            <div className=" w-2/3 h-full flex items-center bg-white">
            <div className=" h-full text-base font-medium flex justify-center p-3 ml-6 text-slate-400 items-center">Home</div>
            <div className=" h-full text-base font-medium flex justify-center p-3 ml-6 text-slate-400 items-center">About</div>
            <div className=" h-full text-base font-medium flex justify-center p-3 ml-6 text-slate-400 items-center">Portfolio</div>
            <div className=" h-full text-base font-medium flex justify-center p-3 ml-6 text-slate-400 items-center">Contact</div>
            <div className=" w-1/6 rounded-3xl h-3/4 text-lg font-medium flex justify-center p-3 ml-10 bg-violet-500 items-center text-white">Download CV</div>
            </div>
        </div>
    );
}