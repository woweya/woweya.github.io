import React from "react";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
    const elements = 12; // Number of floating elements

    return (
        <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
            {/* Main floating blobs */}
            {Array.from({ length: elements }).map((_, i) => (
                <motion.div
                    key={i}
                    className={`absolute rounded-full ${i % 3 === 0 ? "bg-indigo-600/20" : i % 3 === 1 ? "bg-purple-600/20" : "bg-blue-600/20"
                        }`}
                    style={{
                        width: `${Math.random() * 300 + 100}px`,
                        height: `${Math.random() * 300 + 100}px`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        x: [
                            Math.random() * 100 - 50,
                            Math.random() * 100 - 50,
                            Math.random() * 100 - 50
                        ],
                        y: [
                            Math.random() * 100 - 50,
                            Math.random() * 100 - 50,
                            Math.random() * 100 - 50
                        ],
                        scale: [0.7, 1.3, 0.7],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: Math.random() * 15 + 10,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                />
            ))}

            {/* Large gradient orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500/25 to-purple-500/25 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-blue-500/25 to-indigo-500/25 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl"></div>

            {/* Small glowing particles */}
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={`bright-${i}`}
                    className="absolute rounded-full bg-indigo-400/40"
                    style={{
                        width: `${Math.random() * 10 + 3}px`,
                        height: `${Math.random() * 10 + 3}px`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        boxShadow: "0 0 8px rgba(129, 140, 248, 0.6)",
                    }}
                    animate={{
                        y: [0, -40, 0],
                        opacity: [0.5, 0.9, 0.5],
                    }}
                    transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: Math.random() * 1,
                    }}
                />
            ))}

            {/* Pulsing circles */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={`pulse-${i}`}
                    className="absolute rounded-full opacity-0 border-2 border-indigo-500/30"
                    style={{
                        width: "100px",
                        height: "100px",
                        left: `${20 + i * 30}%`,
                        top: `${30 + i * 20}%`,
                    }}
                    animate={{
                        scale: [0, 1.5, 3],
                        opacity: [0, 0.5, 0],
                    }}
                    transition={{
                        duration: 4 + i,
                        repeat: Infinity,
                        delay: i * 2,
                    }}
                />
            ))}
        </div>
    );
}