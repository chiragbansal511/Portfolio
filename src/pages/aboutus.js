import Sidepattern from "../components/sidepattern";

export default function Aboutus() {
    return (
        <div id="aboutus" className="w-full  h-full bg-white flex justify-center items-center relative">
            {/* Left Section */}
            <div className="w-2/6 h-full bg-white flex flex-col justify-center p-10 text-white">
                <div className=" w-40 text-[#754ef9] rounded-3xl text-lg flex justify-center items-center font-normal bg-[#f1edfe] py-2 mb-5 font-inter">ABOUT ME</div>
                
                <div className="text-center">
                    <div className="text-3xl font-semibold py-2 text-black font-montserrat text-justify mb-2">Why Hire Me for Your Next Project?</div>
                    <p className=" text-base leading-relaxed font-medium  font-inter text-[#a3a2a5] text-justify p-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, iusto. Quaerat numquam nulla, 
                        blanditiis necessitatibus accusamus ad nam corrupti ab ratione? Rerum, ipsum impedit! Eligendi voluptas 
                        nostrum mollitia dolores, doloribus nobis saepe repellendus adipisci. Repellendus, aliquid corrupti. Quod 
                        delectus cumque, molestias, odio soluta, nam enim eveniet quaerat adipisci distinctio et!
                    </p>
                </div>

                <div className=" w-40 h-10 mt-5 rounded-3xl bg-[#754ef9] flex justify-center items-center text-white text-lg animate-pulse font-inter">View Portfolio</div>

            </div>

            {/* Middle Section (Could be an image or additional content) */}
            <div className="w-2/6 h-full  flex justify-center items-center">
            <div className=" w-3/4 h-3/5 bg-slate-300">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Fay7TOHR1sG4JdZi2eZ0VS-JYASqd61ZdA&s" alt="" className="w-full h-full" />
            </div>
            </div>

            {/* Right Section (Sidepattern) */}
            <div className=" absolute right-5">
                <Sidepattern />
            </div>
        </div>
    );
}
