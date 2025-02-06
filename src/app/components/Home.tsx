import { motion } from "framer-motion";
import { useState } from "react";

export default function HomeContent({ onStart }: { onStart: () => void }) {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-12 mt-22 w-full max-w-6xl text-center md:text-left relative"
        >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-gray-900 opacity-60 blur-3xl z-[-1]"></div>

            {/* Text Content */}
            <div className="bg-white/10 p-10 rounded-3xl shadow-xl backdrop-blur-md flex flex-col items-center md:items-start border border-white/20">
                <motion.h2 
                    className="text-5xl font-bold text-blue-400 drop-shadow-lg"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Holaa, Visitor
                </motion.h2>
                <motion.p 
                    className="text-gray-300 mt-4 text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    Discover my work, skills, and projects.
                </motion.p>
                <motion.h1
                    className="mt-6 px-6 py-3 text-3xl font-bold text-gray-900 border-4 border-blue-500 rounded-lg shadow-lg bg-gradient-to-r from-blue-400 to-blue-600 text-white 
                    hover:from-blue-500 hover:to-blue-700 transition-all transform hover:scale-105"
                    whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(59, 130, 246, 0.8)" }}
                    whileTap={{ scale: 0.95 }}
                    >
                    Welcome
                    </motion.h1>
            </div>
            
            {/* Illustration */}
            <div 
                className="relative"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <motion.img
                    whileHover={{ scale: 1.05 }}
                    src="/robot-illus.png" 
                    alt="Illustration"
                    className="w-[350px] md:w-[400px] object-cover drop-shadow-lg"
                />
                <motion.div 
                    className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-30 rounded-full blur-3xl" 
                    animate={{ opacity: hovered ? 0.4 : 0.3 }}
                />
            </div>
        </motion.div>
    );
}