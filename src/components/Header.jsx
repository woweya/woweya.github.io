"use client"

import { Link } from "react-router-dom"
import { motion } from "motion/react"

export default function Header({ activePage }) {
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
                    {["Home", "Projects", "Skills", "About", "Contact"].map((item, index) => (
                        <motion.div
                            key={item}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index, duration: 0.5 }}
                        >
                            <Link
                                to={`/${item.toLowerCase()}`}
                                className={`font-medium hover:text-white transition-colors ${item === activePage ? "text-white" : "text-gray-300"}`}
                            >
                                <motion.span whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
                                    {item}
                                </motion.span>
                            </Link>
                        </motion.div>
                    ))}
                </nav>
            </div>
        </motion.header>
    )
}

