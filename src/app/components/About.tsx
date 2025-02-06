import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface ImageType {
    id: number;
    src: string;
    title: string;
    description: string;
}

export default function AboutContent() {
    const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

    const timelineData = [
        {
            year: "2024 - 2025",
            title: "AI Engineer",
            place: "PT.Bosnet Distribution Indonesia",
            type: "work",
            description: "Pengembangan Model Untuk Program Artificial Intelligence"
        },
        {
            year: "2020 - 2023",
            title: "Sekolah Menengah Pertama",
            place: "SMPN 22 KOTA BEKASI",
            type: "education",
            description: "Menempuh Sekolah Menengah Pertama Di Kota Bekasi"
        },
        {
            year: "2023-2026",
            title: "Sekolah Menengah Kejuruan",
            place: "SMK Nurul Islam Jakarta",
            type: "education",
            description: "Memperdalam Ilmu Pengetahuan Dan Skill Programming."
        },
    ];

    const galleryImages: ImageType[] = [
        {
            id: 1,
            src: "/doc2.webp",
            title: "AI Team",
            description: "AI Team PT.Bosnet Distribution Indonesia"
        },
        {
            id: 2,
            src: "/doc2.png",
            title: "FESDIKGANA 2024",
            description: "Juara 1 KTI Festival Pendidikan Kesiapsiagaan Bencana 2024"
        },
        {
            id: 3,
            src: "/api/placeholder/600/400",
            title: "Mobile App",
            description: "Aplikasi mobile untuk manajemen tugas"
        },
        {
            id: 4,
            src: "/api/placeholder/600/400",
            title: "Company Website",
            description: "Website perusahaan dengan desain modern"
        }
    ];

    return (
        <div className="min-h-screen w-full py-12 px-4">
            <motion.div 
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8 }}
                className="max-w-6xl mx-auto relative"
            >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-gray-900 opacity-60 blur-3xl z-[-1]"></div>

                {/* Main Content Container */}
          
                    <motion.h2 
                        className="text-5xl font-bold text-blue-400 drop-shadow-lg mb-8"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        About Me
                    </motion.h2>

                    {/* Timeline Section */}
                    <div className="w-full mb-12">
                        <h3 className="text-2xl font-semibold text-blue-300 mb-6">Perjalanan Karir</h3>
                        <div className="relative">
                            {timelineData.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.2 }}
                                    className="ml-6 mb-8 relative"
                                >
                                    <div className="absolute -left-[28px] w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                                        <div className="w-6 h-6 text-blue-400">
                                            {item.type === 'education' ? '🎓' : '💼'}
                                        </div>
                                    </div>
                                    <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                                        <span className="text-blue-400 font-medium">{item.year}</span>
                                        <h4 className="text-xl font-semibold text-white mt-1">{item.title}</h4>
                                        <p className="text-gray-300">{item.place}</p>
                                        <p className="text-gray-400 mt-2">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Gallery Section */}
                    <div className="w-full">
                        <h3 className="text-2xl font-semibold text-blue-300 mb-6">Portfolio Gallery</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                            {galleryImages.map((image, index) => (
                                <motion.div
                                    key={image.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative group cursor-pointer"
                                    onClick={() => setSelectedImage(image)}
                                >
                                    <div className="overflow-hidden rounded-lg border border-white/20">
                                        <img
                                            src={image.src}
                                            alt={image.title}
                                            className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                                            <h4 className="text-white font-semibold">{image.title}</h4>
                                            <p className="text-gray-200 text-sm">{image.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                

                {/* Image Modal */}
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
                            onClick={() => setSelectedImage(null)}
                        >
                            <div className="relative max-w-4xl w-full">
                                <button
                                    className="absolute -top-12 right-0 text-white hover:text-blue-400 transition-colors"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedImage(null);
                                    }}
                                >
                                    <span className="text-2xl">×</span>
                                </button>
                                <motion.div
                                    initial={{ scale: 0.9 }}
                                    animate={{ scale: 1 }}
                                    className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden"
                                >
                                    <img
                                        src={selectedImage.src}
                                        alt={selectedImage.title}
                                        className="w-full max-h-[80vh] object-contain"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-xl font-semibold text-white">{selectedImage.title}</h3>
                                        <p className="text-gray-300 mt-2">{selectedImage.description}</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}