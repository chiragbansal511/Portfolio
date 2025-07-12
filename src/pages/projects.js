export default function Projects() {


    return (
        <div className=" z-30 flex flex-col w-full h-screen bg-gray-500">
            <div className="w-full h-16 flex justify-center items-center">
                <div className="w-40 text-[#754ef9] rounded-3xl text-lg max-[1300px]:text-base flex justify-center items-center font-normal bg-[#f1edfe] py-2 mb-5 font-inter px-2">
                    PROJECTS
                </div>
            </div>

            <div className="w-full h-4/5 bg-red-300 flex flex-wrap max-[1300px]:flex-col max-[1300px]:flex-nowrap justify-center items-center gap-2">
               <div className=" w-2/5 max-[1300px]:w-full h-2/4 bg-green-200"></div>
               <div className=" w-2/5 max-[1300px]:w-full h-1/4 bg-green-200"></div>
               <div className=" w-2/5 max-[1300px]:w-full h-1/4 bg-green-200"></div>
               <div className=" w-2/5 max-[1300px]:w-full h-2/4 bg-green-200"></div>
            </div>
        </div>
    );
}