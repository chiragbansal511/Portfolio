import Sidepattern from "../components/sidepattern";
import chirag from "../assets/chirag_bansal_aboutus.jpg";

export default function Aboutus() {
  return (
    <div id="aboutus" className=" mb-14 w-full h-fit flex flex-col justify-center items-center mt-10">
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

      <div className=" w-full h-4/6 flex max-[1300px]:flex-col justify-center items-center">
        <div className="w-2/6 max-[1300px]:w-full h-full max-[1300px]:h-2/3 bg-white flex flex-col justify-center items-center p-10 text-white">

          <div className="text-center">
            <div className="text-3xl max-[1300px]:text-xl font-semibold py-2 text-black font-montserrat text-justify mb-2">Why Hire Me for Your Next Project?</div>
            <p className=" text-base  max-[1300px]:text-sm leading-relaxed font-medium  font-inter text-[#a3a2a5] text-justify p-2">
              I'm a dedicated web developer who loves creating thoughtful, efficient, and user-friendly applications. With both frontend and backend experience, I've delivered real-world projects that enabled teams to streamline their work and enhance user experience. I enjoy resolving problems using clean code, and I'm always up for learning, collaboration, and turning ideas into reality. If you're looking for a reliable, curious, and easy-to-get-along-with developer—I'd be delighted to be a part of your next project.
            </p>
          </div>

          <div className=" w-40 max-[1300px]:w-32 h-10 max-[1300px]:py-1.5  mt-5 rounded-3xl bg-[#754ef9] flex justify-center items-center text-white text-lg max-[1300px]:text-base animate-pulse font-inter">View Portfolio</div>

        </div>

        {/* Middle Section (Could be an image or additional content) */}
        <div className=" w-2/6 max-[1300px]:w-5/6  h-full flex justify-center items-center">
          <div className=" w-3/4 h-3/5 bg-slate-300 bg-cover">
            <img src={chirag} alt="" className="w-full h-96" />
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
