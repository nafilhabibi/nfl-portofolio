import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaPython, FaPhp, FaDatabase, FaGithub, FaRobot } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiPytorch, SiVercel, SiCplusplus, SiLua } from "react-icons/si";
import { TbBrandLaravel, TbBrandDjango, TbWorld } from "react-icons/tb";

const skills = [
    {
        category: "Front End",
        data: [
            { name: "HTML", level: 90, icon: <FaHtml5 className="text-orange-500" /> },
            { name: "CSS Native", level: 50, icon: <FaCss3Alt className="text-blue-500" /> },
            { name: "Bootstrap (Framework)", level: 95, icon: <FaBootstrap className="text-purple-600" /> },
            { name: "Next.js", level: 30, icon: <SiNextdotjs className="text-black" /> },
            { name: "Tailwind CSS", level: 30, icon: <SiTailwindcss className="text-blue-400" /> },
            { name: "React", level: 75, icon: <FaReact className="text-blue-500" /> }
        ]
    },
    {
        category: "Back End",
        data: [
            { name: "PHP", level: 85, icon: <FaPhp className="text-indigo-500" /> },
            { name: "Node.js", level: 20, icon: <FaNodeJs className="text-green-600" /> },
            { name: "Python", level: 90, icon: <FaPython className="text-yellow-500" /> },
            { name: "MySQL", level: 70, icon: <FaDatabase className="text-blue-600" /> }
        ]
    },
    {
        category: "AI / Machine Learning",
        data: [
            { name: "PyTorch", level: 60, icon: <SiPytorch className="text-red-500" /> },
            { name: "Machine Learning", level: 66, icon: <FaRobot className="text-gray-500" /> }
        ]
    },
    {
        category: "Tools / DevOps",
        data: [
            { name: "GitHub", level: 60, icon: <FaGithub className="text-white" /> },
            { name: "Vercel", level: 70, icon: <SiVercel className="text-black" /> }
        ]
    },
    {
        category: "Robotika & IoT",
        data: [
            { name: "C++", level: 75, icon: <SiCplusplus className="text-blue-700" /> },
            { name: "Lua Script", level: 65, icon: <SiLua className="text-green-500" /> },
            { name: "HTTP & IoT", level: 80, icon: <TbWorld className="text-gray-600" /> }
        ]
    }
];

const frameworks = [
    { name: "Laravel", icon: <TbBrandLaravel className="text-red-500 text-4xl" /> },
    { name: "Django", icon: <TbBrandDjango className="text-green-700 text-4xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
    { name: "React", icon: <FaReact className="text-blue-500 text-4xl" /> }
];

export default function SkillsShowcase() {
    return (
        <div className="min-h-screen py-12 px-4 bg-gray-900 text-white">
            <motion.h2 
                className="text-5xl font-bold text-blue-400 mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                My Skills
            </motion.h2>
            
            <div className="space-y-12">
                {skills.map((skillCategory, index) => (
                    <div key={index}>
                        <h3 className="text-3xl font-semibold text-blue-300 mb-4">
                            {skillCategory.category}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {skillCategory.data.map((skill, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-4 bg-gray-800 rounded-lg shadow-md flex items-center space-x-4"
                                >
                                    <div className="text-4xl">{skill.icon}</div>
                                    <div className="w-full">
                                        <h4 className="text-xl font-semibold">{skill.name}</h4>
                                        <div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">
                                            <motion.div 
                                                className="bg-blue-500 h-2.5 rounded-full"
                                                initial={{ width: 0 }}
                                                animate={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, delay: idx * 0.1 }}
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Frameworks Section */}
            <div className="mt-16">
                <h3 className="text-3xl font-semibold text-blue-300 mb-4">Frameworks</h3>
                <div className="flex flex-wrap gap-6 justify-center">
                    {frameworks.map((framework, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex flex-col items-center"
                        >
                            {framework.icon}
                            <span className="mt-2 text-sm">{framework.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}