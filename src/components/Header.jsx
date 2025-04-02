"use client"

import { Link, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

export default function Header({ activePage }) {
    const navigate = useNavigate();

    const handleNavigation = (item) => {
        if (item === "Contact") {
            navigate("/home", { state: { scrollToContacts: true } });
            // Increase timeout to give more time for animations to render
            setTimeout(() => {
                const contactsSection = document.getElementById("contatti");
                if (contactsSection) {
                    contactsSection.scrollIntoView({ behavior: "smooth" });
                }
            }, 800); // Increased from 100ms to 800ms
        } else {
            navigate(`/${item.toLowerCase()}`);
        }
    };

    return (
        <motion.header
            className="sticky top-0 z-10 backdrop-blur-md bg-[#0f172a]/80 border-b border-indigo-900/30 py-4"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
                <motion.div
                    className="flex items-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    <span className="font-mono text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
                        woweya
                    </span>
                    <span className="text-indigo-400 mx-1">@</span>
                    <span className="font-mono text-indigo-300">portfolio</span>
                </motion.div>
                <nav className="hidden md:flex space-x-8">
                    {["Home", "Projects", "Skills", "Contact"].map((item, index) => (
                        <motion.div
                            key={item}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index, duration: 0.5 }}
                        >
                            <motion.button
                                onClick={() => handleNavigation(item)}
                                className={`font-medium hover:text-white transition-colors ${item === activePage ? "text-white" : "text-gray-300"}`}
                            >
                                <motion.span whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
                                    {item}
                                </motion.span>
                            </motion.button>
                        </motion.div>
                    ))}
                </nav>
            </div>
        </motion.header>
    )
}