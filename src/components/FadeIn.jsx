"use client"

import { motion, useReducedMotion } from "motion/react"
import { useEffect, useState } from "react"

export default function FadeIn({ children, delay = 0, duration = 0.5, className = "", direction = null }) {
    const shouldReduceMotion = useReducedMotion()
    const [shouldUseAnimate, setShouldUseAnimate] = useState(true)

    useEffect(() => {
        // Imposta un timer per passare a whileInView dopo il caricamento iniziale
        const timer = setTimeout(() => {
            setShouldUseAnimate(false)
        }, 1000)

        return () => clearTimeout(timer)
    }, [])

    const variants = {
        hidden: {
            opacity: 0,
            y: shouldReduceMotion ? 0 : direction === "up" ? 20 : direction === "down" ? -20 : 0,
            x: shouldReduceMotion ? 0 : direction === "left" ? 20 : direction === "right" ? -20 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: duration,
                delay: delay,
                ease: [0.25, 0.1, 0.25, 1.0],
            },
        },
    }

    return (
        <motion.div
            className={className}
            variants={variants}
            initial="hidden"
            animate={shouldUseAnimate ? "visible" : undefined}
            whileInView={!shouldUseAnimate ? "visible" : undefined}
            viewport={{ once: true, margin: "10%" }}
        >
            {children}
        </motion.div>
    )
}