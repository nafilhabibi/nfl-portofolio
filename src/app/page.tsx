"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiHome, FiUser, FiMail } from "react-icons/fi";
import { GiNetworkBars } from "react-icons/gi";
import { GrNetwork } from "react-icons/gr";
import HomeContent from "./components/Home";
import MetaData from "./components/MetaData";

export { MetaData };

export default function Home() {
    const typingTexts = ["It's Me", "I'm Programmer", "I'm Engineer"];
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [activeCard, setActiveCard] = useState("home");
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setIsNavbarVisible(false); // Scroll ke bawah, sembunyikan navbar
            } else {
                setIsNavbarVisible(true); // Scroll ke atas, tampilkan navbar
            }
            setLastScrollY(window.scrollY);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    useEffect(() => {
        const typingSpeed = isDeleting ? 50 : 100;
        const timeout = setTimeout(() => {
            if (!isDeleting && charIndex === typingTexts[textIndex].length) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setTextIndex((prev) => (prev + 1) % typingTexts.length);
            }
            setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, textIndex]);

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
        exit: { opacity: 0, y: -50, transition: { duration: 0.4, ease: "easeIn" } }
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-6 relative">
          <header className="w-full bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white rounded-xl shadow-lg">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center px-4 md:px-8 py-3 md:py-6">
                {/* Logo and Title Container */}
                <motion.div 
                    className="flex items-center space-x-3 md:space-x-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Logo Container */}
                    <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative bg-black rounded-full p-1 md:p-2">
                        <img
                        src="https://hydrotectearthguard.site/gambar/Logo_ori.jpg"
                        alt="Logo"
                        className="w-8 h-8 md:w-12 md:h-12 rounded-full object-cover"
                        />
                    </div>
                    </div>
                    
                    {/* Title */}
                    <div className="flex flex-col">
                    <h1 className="text-xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 tracking-tight">
                        Nafiru Portfolio
                    </h1>
                    <span className="text-xs md:text-sm text-gray-400 font-medium">Creative Developer</span>
                    </div>
                </motion.div>
                </div>
            </div>
            </header>
            
            {!showContent ? (
            <motion.main
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center text-center mt-24"
            >
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="bg-gray-800 p-10 w-[400px] md:w-[500px] rounded-3xl shadow-xl flex flex-col justify-center items-center"
            >
                <div className="relative w-40 h-40 mb-6">
                    <Image
                        src="/profil.jpg"
                        alt="Profile Picture"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full border-4 border-blue-400"
                    />
                </div>
                <h2 className="text-3xl font-bold text-blue-300">
                    {typingTexts[textIndex].substring(0, charIndex)}
                    <span className="animate-blink">|</span>
                </h2>
                <p className="text-gray-300 text-lg mt-4">Nafil Habibi Mulyadi</p>
                <motion.button
                    className="mt-6 px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-xl 
                    hover:from-blue-600 hover:to-indigo-700 transition-all transform hover:scale-105 active:scale-95 
                    border-2 border-transparent hover:border-blue-300 focus:ring-4 focus:ring-blue-300"
                    whileHover={{ scale: 1.08, boxShadow: "0px 5px 20px rgba(59, 130, 246, 0.6)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowContent(true)}
                    >
                    Get Started
                    </motion.button>
            </motion.div>
        </motion.main>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-20 w-full shadow-lg items-center max-w-5xl mx-auto justify-center">
                    <AnimatePresence mode="wait">
                        <motion.section key={activeCard} variants={cardVariants} initial="hidden" animate="visible" exit="exit" className="bg-gray-800 p-8 rounded-2xl shadow-lg flex flex-col items-center text-center">
                            {activeCard === "home" && <HomeContent onStart={() => setShowContent(true)} />}
                            {activeCard === "about" && <h2 className="text-4xl font-semibold text-blue-300">About Me</h2>}
                            {activeCard === "skills" && <h2 className="text-4xl font-semibold text-blue-300">Skills</h2>}
                            {activeCard === "projects" && <h2 className="text-4xl font-semibold text-blue-300">Projects</h2>}
                            {activeCard === "contact" && <h2 className="text-4xl font-semibold text-blue-300">Contact</h2>}
                        </motion.section>
                    </AnimatePresence>
                </div>
            )}

        {showContent && (
            <motion.nav 
                initial={{ opacity: 1, y: 0 }} 
                animate={{ opacity: isNavbarVisible ? 1 : 0, y: isNavbarVisible ? 0 : 50 }} 
                transition={{ duration: 0.5 }} 
                className="fixed bottom-4 inset-x-0 flex justify-center"
            >
                <div className="bg-gray-900 py-3 px-6 flex justify-between items-center text-white w-[90%] max-w-lg rounded-xl shadow-xl border border-gray-700">
                    {['home', 'about', 'skills', 'projects', 'contact'].map((item, index) => (
                        <button key={index} onClick={() => setActiveCard(item)} 
                            className={`flex flex-col items-center text-blue-400 hover:text-blue-300 transition duration-300 ${activeCard === item ? 'text-blue-500 scale-110' : 'hover:scale-110'}`}>
                            {item === 'home' && <FiHome size={24} />}
                            {item === 'about' && <FiUser size={24} />}
                            {item === 'skills' && <GiNetworkBars size={24} />}
                            {item === 'projects' && <GrNetwork size={24} />}
                            {item === 'contact' && <FiMail size={24} />}
                            <span className="text-sm capitalize">{item}</span>
                        </button>
                    ))}
                </div>
            </motion.nav>
        )}



            {/* CSS Animations */}
            <style jsx>{`
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
                .animate-blink {
                    animation: blink 1s infinite;
                }
            `}</style>
        </div>
    );
}
