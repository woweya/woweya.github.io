"use client"

import { motion } from "motion/react"

export default function AnimatedText({ text, className = "", delay = 0 }) {
    const words = text.split(" ")

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: delay * i },
        }),
    }

    const child = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    }

    return (
        <motion.div className={className} variants={container} initial="hidden" animate="visible">
            {words.map((word, index) => (
                <motion.span key={index} variants={child} className="inline-block mr-1">
                    {word}
                </motion.span>
            ))}
        </motion.div>
    )
}

