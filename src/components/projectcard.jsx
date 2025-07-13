import { div } from "framer-motion/client";

export default function Projectcard()
{
    return (
        <div className=" w-full h-full flex flex-col justify-end hover:bg-orange-300 transition-all duration-500 grayscale hover:grayscale-0" style={{ backgroundImage: `url('https://cdn.prod.website-files.com/5e6bef9160e290b99b7644b5/63e4ba3649397b3b0e246d8c_Essayservice%20_%20What%20is%20Capstone%20Project_.png')` , backgroundSize : "cover" , backgroundRepeat : "no-repeat" }}>
           <div className="max-[1300px]:text-base font-inter w-full text-lg text-white font-semibold px-4 mb-1">Lorem ipsum dolor sit amet.</div>
            <div className="max-[1300px]:text-xs font-montserrat w-full text-white px-4 max-[1300px]:px-2 mb-2 text-sm text-justify max-[1300px]:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id repudiandae dignissimos sunt eum magni perspiciatis itaque assumenda, beatae laborum deleniti?</div>
        </div>
    );
}