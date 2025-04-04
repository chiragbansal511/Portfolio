import Experiencecard from "../components/experiencecard";
import Sidepattern from "../components/sidepattern";

export default function Myexperience()
{
    return (
        <div className="w-full h-full bg-white flex flex-col justify-center items-center">
        {/* Skills Heading */}
        <div className="w-full h-16 flex justify-center items-center">
            <div className="w-40 text-[#754ef9] rounded-3xl text-lg flex justify-center items-center font-normal bg-[#f1edfe] py-2 mb-5 font-inter px-2">
                MY EXPERIENCE
            </div>
        </div>

        {/* Skill Categories */}
        <div className=" z-30 w-full h-16 flex justify-evenly ">
        <div className="text-3xl font-medium text-[#a3a2a5] px-4 font-inter ">My Professional Journey</div>
        </div>

        {/* Skill Items */}
        <div className=" z-30 w-full h-4/6 flex justify-center items-center">
            <Sidepattern/>
            <Experiencecard />
            <Experiencecard />
            <Experiencecard />
        </div>
    </div>
);
}
