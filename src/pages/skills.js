import { useState } from "react";

export default function Skills() {
    const [hoveredCategory, setHoveredCategory] = useState(null);

    const skills = {
        "Languages": ["https://img.icons8.com/color/480/javascript--v1.png", "https://img.icons8.com/color/480/python--v1.png", "https://img.icons8.com/color/480/c-plus-plus-logo.png", "https://img.icons8.com/color/480/c-programming.png", 'https://img.icons8.com/color/480/dart.png'],
        "Frontend": ["https://img.icons8.com/color/480/react-native.png", "https://img.icons8.com/color/480/tailwindcss.png", "https://img.icons8.com/color/144/html-5.png", "https://img.icons8.com/color/480/css3.png", "https://img.icons8.com/fluency/240/flutter.png"],
        "Backend": ["https://img.icons8.com/fluency/240/node-js.png", "https://img.icons8.com/fluency/240/express-js.png", "https://img.icons8.com/ios/500/flask.png"],
        "AI/ML": ["https://img.icons8.com/color/480/tensorflow.png", "https://img.icons8.com/fluency/240/pytorch.png"],
        "Database": ["https://img.icons8.com/color/480/mongodb.png", "https://img.icons8.com/color/480/postgreesql.png", "https://img.icons8.com/color/480/mysql-logo.png"]
    };

    return (
        <div id="skills" className="w-full h-fit flex flex-col justify-center items-center mt-10">
            {/* Skills Heading */}
            <div className="w-full h-16 mb-5 flex justify-center items-center">
                <div className="w-40 max-[1300px]:w-28 text-[#754ef9] rounded-3xl text-lg max-[1300px]:text-base flex justify-center items-center font-normal bg-[#f1edfe] py-2 mb-5 font-inter">
                    MY SKILLS   
                </div>
            </div>

            {/* Skill Categories */}
            <div className=" z-30 w-full h-16 flex max-[1300px]:flex-wrap justify-evenly ">
                {Object.keys(skills).map((category, index) => (
                    <div
                        key={index}
                        className="text-lg max-[1300px]:text-base font-medium text-[#a3a2a5] px-4 font-inter transition-all duration-300 ease-in-out hover:text-black hover:underline cursor-pointer"
                        onMouseEnter={() => setHoveredCategory(category)}
                        onMouseLeave={() => setHoveredCategory(null)}
                    >
                        {category}
                    </div>
                ))}
            </div>

            {/* Skill Items */}
            <div className=" z-30 w-full h-fit flex justify-center ">
                <div className=" w-11/12 max-[1300px]:w-full h-fit bg-white flex flex-wrap justify-center">
                    {Object.entries(skills).map(([category, techs]) =>
                        techs.map((tech, index) => (
                            <img
                                key={index}
                                src={tech}
                                alt={`Skill ${index}`}
                                className={` p-4 max-[1300px]:p-2 w-36 h-36 m-4 max-[1300px]:h-20 max-[1300px]:w-20 object-contain transition-all duration-300 ease-in-out
                                    ${hoveredCategory === null || hoveredCategory === category
                                        ? "scale-105"
                                        : "opacity-40"}`}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
