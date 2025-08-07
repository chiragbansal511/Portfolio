import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false); // Close menu after scroll
    };

    // ✅ Prevent background scroll on mobile menu open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        // Cleanup on component unmount
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [menuOpen]);

    return (
        <div className="w-full h-14 flex items-center justify-between bg-white md:bg-transparent z-50 relative pr-4">
            {/* Logo */}
            <div className=" w-1/3 h-full bg-black flex justify-end text-center max-[1300px]:justify-center">
                <p className="h-full text-white font-semibold text-2xl flex items-center p-2 font-merriweather max-[1300px]:text-base max-[1300px]:font-medium max-[1300px]:text-center">Chirag Bansal</p>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex w-2/3 h-full items-center justify-end">
                {["home", "skills", "aboutus", "experiencecard", "projects", "contactus"].map((section, idx) => (
                    <div
                        key={idx}
                        className="cursor-pointer text-base font-medium mx-3 text-[#a3a2a5] hover:text-black hover:underline transition-all ease-linear"
                        onClick={() => scrollToSection(section)}
                    >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                    </div>
                ))}
                <a
                    href="/Chirag_Bansal_Resume.pdf"
                    download
                    className="ml-10 px-4 py-2 rounded-3xl bg-[#754ef9] text-white font-inter text-base cursor-pointer"
                >
                    Download CV
                </a>

            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden">
                {menuOpen ? (
                    <FiX
                        size={28}
                        onClick={() => setMenuOpen(false)}
                        className="text-black cursor-pointer"
                    />
                ) : (
                    <FiMenu
                        size={28}
                        onClick={() => setMenuOpen(true)}
                        className="text-black cursor-pointer"
                    />
                )}
            </div>

            {/* Fullscreen Mobile Menu */}
            {menuOpen && (
                <div className="fixed inset-0 bg-white flex flex-col justify-center items-center z-50 gap-8 text-xl font-inter">
                    {["home", "skills", "aboutus", "experiencecard", "projects", "contactus"].map((section, idx) => (
                        <div
                            key={idx}
                            className="text-[#754ef9] hover:text-black cursor-pointer transition-all"
                            onClick={() => scrollToSection(section)}
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </div>
                    ))}
                    <div className=" max-[1300px]:animate-pulse mt-8 px-6 py-3 bg-[#754ef9] text-white rounded-3xl text-lg cursor-pointer">
                        Download CV
                    </div>
                </div>
            )}
        </div>
    );
}
