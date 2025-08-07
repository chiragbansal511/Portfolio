import Experiencecard from "../components/experiencecard";
import Sidepattern from "../components/sidepattern";

export default function Myexperience()
{   

    return (
        <div className="w-full h-full max-[1300px]:h-fit bg-white flex flex-col justify-center items-center ">
        {/* Skills Heading */}
        <div className="w-full h-16 flex justify-center items-center">
            <div className="w-40 text-[#754ef9] rounded-3xl text-lg max-[1300px]:text-base flex justify-center items-center font-normal bg-[#f1edfe] py-2 mb-5 font-inter px-2">
                MY EXPERIENCE
            </div>
        </div>

        {/* Skill Categories */}
        <div className=" z-30 w-full h-16 flex justify-evenly ">
        <div className="text-xl max-[1300px]:text-lg font-medium text-[#a3a2a5] px-4 font-inter ">My Professional Journey</div>
        </div>

        {/* Skill Items */}
        <div className=" z-30 w-4/5 h-4/6 flex  max-[1300px]:flex-col justify-center items-center">
            <div className=" max-[1300px]:hidden"><Sidepattern/></div>
            <Experiencecard logo="https://media.licdn.com/dms/image/v2/D560BAQHn2ZH_RSocQQ/company-logo_200_200/B56ZVHDxwPGoAI-/0/1740653927964?e=2147483647&v=beta&t=ejS3pRGkTlougS23l2PlWc2FnTK5YbPXr4P6RHvHOO4" name="Tradify Pvt. Ltd." work="Developed a scalable Node.js app with 4 microservices for real-time news fetch, AI summarization, and image generation. Ensured fault-tolerant design and secured APIs with JWT and Zod validation." link="https://fintradify.com/"/>
            <Experiencecard logo="https://act.thapar.edu/assets/logo-yKCxflNb.webp" name="Thapar TSLAS" work="Built a research paper management system using Node.js and Appwrite BLOB, used by 500+ faculty. Designed a 3-tier hierarchy and a React UI with debounced search for faster access." link-="https://tslas.thapar.edu/"/>
            <Experiencecard logo="https://www.notatmrp.com/_next/image?url=%2Fassets%2Fblogo.png&w=640&q=75" name="NOTATMRP Pvt. Ltd." work="Developed a full-stack food ordering platform with Node.js and React, integrating Razorpay and real-time order processing. Enhanced UX with lazy loading and interactive components." link="https://www.notatmrp.com/"/>
        </div>
    </div>
);
}
