export default function Navbar()
{   
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return(
        <div className=" w-full h-14 flex">
            <div className=" w-1/3 h-full bg-black flex justify-end text-center">
            <p className="h-full text-white font-semibold text-2xl flex items-center p-2 font-merriweather ">Chirag Bansal</p>
            </div>
            <div className=" w-2/3 h-full flex items-center bg-white">
            <div className=" h-full text-base font-medium flex justify-center p-3 ml-6 text-[#a3a2a5] items-center font-inter hover:text-black hover:underline transition-all ease-linear delay-100" onClick={() => scrollToSection("home")}>Home</div>
            <div className=" h-full text-base font-medium flex justify-center p-3 ml-6 text-[#a3a2a5] items-center font-inter hover:text-black hover:underline transition-all ease-linear delay-100" onClick={() => scrollToSection("skills")}>Skills</div>
            <div className=" h-full text-base font-medium flex justify-center p-3 ml-6 text-[#a3a2a5] items-center font-inter hover:text-black hover:underline transition-all ease-linear delay-100" onClick={() => scrollToSection("aboutus")}>About</div>
            <div className=" h-full text-base font-medium flex justify-center p-3 ml-6 text-[#a3a2a5] items-center font-inter hover:text-black hover:underline transition-all ease-linear delay-100" onClick={() => scrollToSection("experiencecard")}>Experience</div>
            <div className=" h-full text-base font-medium flex justify-center p-3 ml-6 text-[#a3a2a5] items-center font-inter hover:text-black hover:underline transition-all ease-linear delay-100" onClick={() => scrollToSection("experiencecard")}>Projects</div>
            <div className=" h-full text-base font-medium flex justify-center p-3 ml-6 text-[#a3a2a5] items-center font-inter hover:text-black hover:underline transition-all ease-linear delay-100" onClick={() => scrollToSection("contactus")}>Contact</div>
            <div className=" w-1/6 rounded-3xl h-3/4 text-lg font-normal flex justify-center p-3 ml-10 bg-[#754ef9] items-center text-white font-inter">Download CV</div>
            </div>
        </div>
    );
}