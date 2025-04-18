import { useEffect, useState } from "react";

export default function Experiencecard() {

    const [color , setColor] = useState("#754ef9");

    return (
        <div id="experiencecard" onMouseEnter={()=>setColor("white")} onMouseLeave={()=>setColor("#754ef9")} className="h-full w-80 max-[1300px]:w-full max-[1300px]:h-50 bg-white shadow-2xl max-[1300px]:shadow-xl ml-6 max-[1300px]:ml-0 max-[1300px]:mb-10 flex flex-col justify-center items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-3xl hover:bg-[#754ef9] hover:text-white">
            {/* Profile Image Placeholder */}
            <div className="w-32 h-32 rounded-full border-2" style={{borderColor : `${color}`}}></div>

            {/* Title */}
            <div className="w-full h-8 text-center font-montserrat text-xl font-black mt-4">
                Web Development
            </div>

            {/* Three Dots for Design */}
            <div className="w-full h-5 flex justify-center items-center my-2">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-5 h-1 rounded-xl mx-2 " style={{backgroundColor : `${color}`}}></div>
                ))}
            </div>

            {/* Description */}
            <div className="w-full h-1/3 font-normal font-inter text-sm p-3 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A cupiditate explicabo quis nisi perspiciatis dicta iusto, soluta consectetur nemo, voluptates necessitatibus deleniti tempore praesentium cum.
            </div>

            {/* Download Button */}
            <div className="w-3/6 rounded-3xl h-10 text-lg font-normal flex justify-center items-center font-inter cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#5c3fc9] hover:scale-105 max-[1300px]:mb-5" style={{backgroundColor : `${color}` , color : color=="white" ? "#754ef9" : "white"}}>
               Read More
            </div>
        </div>
    );
}
