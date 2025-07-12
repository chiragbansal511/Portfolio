import Sidepattern from "../components/sidepattern";

export default function Aboutus() {
    return (
        <div id="aboutus" className=" mb-14 w-full h-auto -mt-8 max-[1300px]:mt-[var(--my-top2)] flex flex-col max-[1300px]:flex-col justify-center items-center relative">
                          <div className="w-40 max-[1300px]:w-28 text-[#754ef9] rounded-3xl text-lg max-[1300px]:text-base flex justify-center items-center font-normal bg-[#f1edfe] py-2 mb-5 font-inter">ABOUT ME</div>

            {/* Left Section */}

            <style>
                    {`
      :root {
        --my-top2: 0rem;
      }

      @media (max-height: 1300px) {
        :root {
          --my-top2: 5vh; /* same as Tailwind's top-20 */
        }
      }

      @media (max-height: 670px) {
        :root {
          --my-top2: 40vh; /* same as Tailwind's top-20 */
        }
      }
    `}
                </style>

           <div className=" w-full h-4/6 flex justify-center items-center">
             <div className="w-2/6 max-[1300px]:w-full h-full max-[1300px]:h-2/3 bg-white flex flex-col justify-center p-10 text-white">
                
                <div className="text-center">
                    <div className="text-3xl max-[1300px]:text-xl font-semibold py-2 text-black font-montserrat text-justify mb-2">Why Hire Me for Your Next Project?</div>
                    <p className=" text-base  max-[1300px]:text-sm leading-relaxed font-medium  font-inter text-[#a3a2a5] text-justify p-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, iusto. Quaerat numquam nulla, 
                        blanditiis necessitatibus accusamus ad nam corrupti ab ratione? Rerum, ipsum impedit! Eligendi voluptas 
                        nostrum mollitia dolores, doloribus nobis saepe repellendus adipisci. Repellendus, aliquid corrupti. Quod 
                        delectus cumque, molestias, odio soluta, nam enim eveniet quaerat adipisci distinctio et!
                    </p>
                </div>

                <div className=" w-40 max-[1300px]:w-32 h-10 max-[1300px]:py-1.5  mt-5 rounded-3xl bg-[#754ef9] flex justify-center items-center text-white text-lg max-[1300px]:text-base animate-pulse font-inter">View Portfolio</div>

            </div>

            {/* Middle Section (Could be an image or additional content) */}
            <div className=" w-2/6 max-[1300px]:w-5/6 max-[1300px]:-mt-10 h-full flex justify-center items-center">
            <div className=" w-3/4 h-3/5 bg-slate-300">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Fay7TOHR1sG4JdZi2eZ0VS-JYASqd61ZdA&s" alt="" className="w-full h-96" />
            </div>
            </div>

            {/* Right Section (Sidepattern) */}
            <div className=" max-[1300px]:hidden absolute right-5">
                <Sidepattern />
            </div>
           </div>
        </div>
    );
}
