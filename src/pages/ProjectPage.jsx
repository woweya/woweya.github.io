"use client"
import { Github, ExternalLink } from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import FadeIn from "../components/FadeIn"
import { motion } from "motion/react"
export default function ProjectsPage() {
    const projects = [
        {
            id: "e-commerce",
            name: "E-Commerce Platform",
            description: "A full-stack e-commerce solution with payment processing and inventory management.",
            longDescription:
                "This project implements a complete e-commerce platform with user authentication, product catalog, shopping cart, checkout process with Stripe integration, and an admin dashboard for inventory management.",
            tech: ["React", "Node.js", "Express", "MongoDB", "Stripe API", "Redux", "JWT"],
            github: "https://github.com/woweya/e-commerce-platform",
            live: "https://e-commerce-platform.vercel.app",
            featured: true,
        },
        {
            id: "blog",
            name: "Personal Blog",
            description: "A markdown-based blog with comment system and analytics dashboard.",
            longDescription:
                "A modern blog platform built with React that supports markdown content, code syntax highlighting, comment system with moderation, and a dashboard for content management and analytics.",
            tech: ["React", "JavaScript", "Prisma", "PostgreSQL", "Tailwind CSS", "Auth.js"],
            github: "https://github.com/woweya/personal-blog",
            live: "https://personal-blog.vercel.app",
            featured: true,
        },
        {
            id: "weather",
            name: "Weather App",
            description: "Real-time weather forecasting application with location detection.",
            longDescription:
                "A weather application that provides current conditions and forecasts based on user location or search. Features include interactive maps, hourly and daily forecasts, and severe weather alerts.",
            tech: ["React", "OpenWeather API", "Geolocation API", "Tailwind CSS", "Chart.js"],
            github: "https://github.com/woweya/weather-app",
            live: "https://weather-app.vercel.app",
            featured: true,
        },
        {
            id: "task",
            name: "Task Manager",
            description: "Collaborative task management tool with real-time updates.",
            longDescription:
                "A productivity application for managing tasks and projects with real-time collaboration features. Includes drag-and-drop kanban boards, task assignments, due dates, and notifications.",
            tech: ["React", "Firebase", "Redux", "Material UI", "Firebase Auth"],
            github: "https://github.com/woweya/task-manager",
            live: "https://task-manager.vercel.app",
            featured: true,
        },
        {
            id: "portfolio",
            name: "Developer Portfolio",
            description: "Personal portfolio website with coding-inspired design.",
            longDescription:
                "This portfolio website showcases my projects and skills with a design inspired by code editors and development environments. Built with React, Vite and Tailwind CSS.",
            tech: ["React", "Vite", "Tailwind CSS", "JavaScript"],
            github: "https://github.com/woweya/portfolio",
            live: "https://woweya.dev",
            featured: false,
        },
        {
            id: "chat",
            name: "Real-time Chat App",
            description: "Instant messaging application with rooms and direct messages.",
            longDescription:
                "A real-time chat application that supports public chat rooms, private messaging, file sharing, and message history. Built with Socket.io for real-time communication.",
            tech: ["React", "Node.js", "Socket.io", "Express", "MongoDB"],
            github: "https://github.com/woweya/chat-app",
            live: "https://chat-app.vercel.app",
            featured: false,
        },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-gray-200">
            <Header activePage="Projects" />

            <main className="max-w-6xl mx-auto px-4 py-16">
                {/* Titolo della pagina */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.h1
                        className="text-3xl md:text-4xl font-bold text-center mb-4"
                        animate={{ scale: [0.9, 1.05, 1] }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
                            I Miei Progetti
                        </span>
                    </motion.h1>
                    <motion.p
                        className="text-center text-gray-300 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        Una raccolta dei miei lavori di sviluppo, dalle applicazioni web alle soluzioni full-stack. Ogni progetto è
                        un'opportunità per imparare e crescere come sviluppatore.
                    </motion.p>
                </motion.div>

                {/* Progetti */}
                <div className="space-y-16">
                    {projects.map((project, index) => (
                        <FadeIn key={project.id} delay={0.2 * index} direction={index % 2 === 0 ? "left" : "right"}>
                            <motion.div
                                className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-lg border border-indigo-800/30 p-6 md:p-8 relative overflow-hidden group"
                                whileHover={{ y: -5 }}
                                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                            >
                                <motion.div
                                    className="absolute -top-20 -left-20 w-40 h-40 bg-indigo-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Number.POSITIVE_INFINITY,
                                        repeatType: "reverse",
                                    }}
                                ></motion.div>
                                <motion.div
                                    className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Number.POSITIVE_INFINITY,
                                        repeatType: "reverse",
                                        delay: 2,
                                    }}
                                ></motion.div>

                                <div className="relative grid md:grid-cols-2 gap-8">
                                    <div>
                                        <div className="font-mono text-xs text-indigo-400 mb-2">// Project {index + 1}</div>
                                        <motion.h2
                                            className="text-2xl font-bold mb-4 text-white"
                                            whileHover={{ x: 5 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <span className="font-mono text-indigo-400">const</span> {project.name}
                                        </motion.h2>

                                        <motion.p
                                            className="text-gray-300 mb-6"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ delay: 0.2, duration: 0.5 }}
                                            viewport={{ once: true }}
                                        >
                                            {project.longDescription}
                                        </motion.p>

                                        <div className="mb-6">
                                            <div className="font-mono text-indigo-400 mb-2">// Tech Stack</div>
                                            <div className="flex flex-wrap gap-2">
                                                {project.tech.map((tech, i) => (
                                                    <motion.span
                                                        key={tech}
                                                        className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-indigo-900/50 text-indigo-300 border border-indigo-800/50"
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: 0.05 * i, duration: 0.3 }}
                                                        viewport={{ once: true }}
                                                        whileHover={{ scale: 1.1, y: -2 }}
                                                    >
                                                        {tech}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-4">
                                            <motion.a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <motion.button
                                                    className="gap-2 border-indigo-700 text-indigo-400 hover:bg-indigo-950 inline-flex items-center justify-center rounded-md font-medium transition-colors h-10 px-4 py-2 border bg-transparent"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.3, duration: 0.5 }}
                                                    viewport={{ once: true }}
                                                >
                                                    <Github className="h-4 w-4" />
                                                    Codice Sorgente
                                                </motion.button>
                                            </motion.a>
                                            <motion.a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <motion.button
                                                    className="gap-2 bg-indigo-600 hover:bg-indigo-700 inline-flex items-center justify-center rounded-md font-medium transition-colors h-10 px-4 py-2 text-white"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.4, duration: 0.5 }}
                                                    viewport={{ once: true }}
                                                >
                                                    <ExternalLink className="h-4 w-4" />
                                                    Demo Live
                                                </motion.button>
                                            </motion.a>
                                        </div>
                                    </div>

                                    <motion.div
                                        className="bg-[#0f172a]/50 rounded-lg border border-indigo-800/30 p-4 font-mono text-sm overflow-hidden relative"
                                        whileHover={{ boxShadow: "0 0 15px rgba(99, 102, 241, 0.2)" }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="absolute top-0 left-0 right-0 h-10 bg-[#0f172a]/80 border-b border-indigo-900/30 flex items-center px-4">
                                            <div className="flex space-x-2">
                                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                            </div>
                                            <div className="ml-4 text-xs text-gray-400">{project.id}.js</div>
                                        </div>

                                        <motion.div
                                            className="pt-12 px-2"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ delay: 0.3, duration: 0.8 }}
                                            viewport={{ once: true }}
                                        >
                                            <div className="text-indigo-300">
                                                <span className="text-purple-400">const</span> <span className="text-blue-400">project</span> ={" "}
                                                {"{"}
                                            </div>
                                            <div className="pl-6 mb-4">
                                                <motion.div
                                                    initial={{ opacity: 0, y: 5 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.4, duration: 0.3 }}
                                                    viewport={{ once: true }}
                                                >
                                                    <span className="text-green-400">name</span>:{" "}
                                                    <span className="text-orange-300">"{project.name}"</span>,
                                                </motion.div>
                                                <motion.div
                                                    initial={{ opacity: 0, y: 5 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.5, duration: 0.3 }}
                                                    viewport={{ once: true }}
                                                >
                                                    <span className="text-green-400">description</span>:{" "}
                                                    <span className="text-orange-300">"{project.description}"</span>,
                                                </motion.div>
                                                <motion.div
                                                    initial={{ opacity: 0, y: 5 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.6, duration: 0.3 }}
                                                    viewport={{ once: true }}
                                                >
                                                    <span className="text-green-400">technologies</span>: [
                                                    {project.tech.map((t, i) => (
                                                        <span key={i}>
                                                            <span className="text-orange-300">"{t}"</span>
                                                            {i < project.tech.length - 1 ? ", " : ""}
                                                        </span>
                                                    ))}
                                                    ],
                                                </motion.div>
                                                <motion.div
                                                    initial={{ opacity: 0, y: 5 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.7, duration: 0.3 }}
                                                    viewport={{ once: true }}
                                                >
                                                    <span className="text-green-400">github</span>:{" "}
                                                    <span className="text-orange-300">"{project.github}"</span>,
                                                </motion.div>
                                                <motion.div
                                                    initial={{ opacity: 0, y: 5 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.8, duration: 0.3 }}
                                                    viewport={{ once: true }}
                                                >
                                                    <span className="text-green-400">demo</span>:{" "}
                                                    <span className="text-orange-300">"{project.live}"</span>,
                                                </motion.div>
                                            </div>
                                            <div className="text-indigo-300">{"}"};</div>
                                        </motion.div>

                                        {/* Animated cursor */}
                                        <div className="absolute bottom-6 right-6 w-2 h-5 bg-indigo-400 animate-pulse"></div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </FadeIn>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    )
}

