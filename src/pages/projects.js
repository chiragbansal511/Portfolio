import Projectcard from "../components/projectcard";

export default function Projects() {


    return (
        <div className=" z-30 flex flex-col w-full h-screen">
            <div className="w-full h-16 flex justify-center items-center">
                <div className="w-40 text-[#754ef9] rounded-3xl text-lg max-[1300px]:text-base flex justify-center items-center font-normal bg-[#f1edfe] py-2 mb-5 font-inter px-2">
                    PROJECTS
                </div>
            </div>

            <div className="w-full h-full flex justify-center items-center gap-2 z-20">
                <div className=" w-2/5 h-4/5 flex flex-col justify-center gap-y-2">

                    <div className=" w-full  h-3/6 hover:h-5/6 transition-all duration-500"><Projectcard></Projectcard></div>
                    <div className=" w-full  h-3/6 hover:h-5/6 transition-all duration-500"><Projectcard></Projectcard></div>

                </div>
                <div className=" w-2/5 h-4/5 flex flex-col justify-center gap-y-2">

                    <div className=" w-full  h-3/6 hover:h-5/6 transition-all duration-500"><Projectcard></Projectcard></div>
                    <div className=" w-full  h-3/6 hover:h-5/6 transition-all duration-500"><Projectcard></Projectcard></div>

                </div>
            </div>
        </div>
    );
}