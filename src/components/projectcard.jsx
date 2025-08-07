import { useState } from "react";

export default function Projectcard({github , name , about}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className=" w-full h-full flex flex-col justify-end transition-all duration-500 grayscale hover:grayscale-0"
      style={{
        backgroundImage: `url('https://cdn.prod.website-files.com/5e6bef9160e290b99b7644b5/63e4ba3649397b3b0e246d8c_Essayservice%20_%20What%20is%20Capstone%20Project_.png')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* ROLLER TEXT FIX */}
      <div className="h-[40px] overflow-hidden px-4 mb-1 font-inter w-full max-[1300px]:text-base text-lg font-semibold text-white">
        <div
          className={`transition-transform duration-500 ease-in-out`}
          style={{
            transform: isHovered ? "translateY(-40px)" : "translateY(0px)",
          }}
        >
          {/* Default text */}
          <div className="h-[40px] flex items-center">
            {name}
          </div>

          {/* Hover link */}
          <div className="h-[40px] flex items-center">
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-purple-200"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>

      {/* DESCRIPTION */}
      <div className="px-4 mb-2 font-montserrat w-full max-[1300px]:px-2 max-[1300px]:text-xs text-white text-sm text-justify max-[1300px]:text-left">
        {about}
      </div>
    </div>
  );
}
