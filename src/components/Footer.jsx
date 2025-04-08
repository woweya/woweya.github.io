"use client"

import { motion } from "motion/react"

export default function Footer() {
    return (
        <motion.footer
            className="bg-[#21213cce] border-t border-indigo-900/30 py-8 mt-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="max-w-6xl mx-auto px-4 text-center">
                <motion.div
                    className="mb-4 code-text text-sm text-indigo-400"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <span className="text-purple-400">const</span> <span className="text-blue-400">copyright</span> =
                    <span className="text-orange-300"> `© {new Date().getFullYear()} woweya. All rights reserved.`</span>;
                </motion.div>
                <motion.div
                    className="text-gray-500 text-sm"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Realizzato con React, Vite e Tailwind CSS
                </motion.div>
            </div>
        </motion.footer>
    )
}

