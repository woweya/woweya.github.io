"use client"
import { Github, ExternalLink } from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import FadeIn from "../components/FadeIn"
import { motion } from "framer-motion"
import TypewriterEffect from "../components/TypewriteEffect"
import AnimatedBackground from "../components/AnimatedBackground"
export default function ProjectsPage() {

    


    const projects = [
        {
            id: "gestionale",
            name: "Gestionale Amministrativo",
            description: "Applicazione gestionale per la gestione aziendale.",
            longDescription:
                "Un'applicazione gestionale per la gestione aziendale, con funzionalità di reportistica, notifica e gestione utenza con integrazione di API esterne. Include un'interfaccia utente reattiva e un sistema di autenticazione sicuro.",
            video: "videos/Gestionale",
            tech: ["Symfony", "MySQL", "Docker", "Material Tailwind", "OAuth", "WebSocket API", "RESTful Api"],
            featured: true,
        },
        {
            id: "e-commerce",
            name: "Piattaforma E-commerce",
            description: "Una soluzione e-commerce full-stack con elaborazione pagamenti e gestione inventario.",
            longDescription:
                "Questo progetto implementa una piattaforma e-commerce completa con autenticazione utente, catalogo prodotti, carrello acquisti, processo di checkout con integrazione PayPal, e un pannello amministrativo per la gestione dell'inventario.",
            video: "videos/E-commerce",
            tech: ["PHP", "Twig", "Symfony", "MySQL", "RestFul API", "Docker", "JWT", 'PayPal API'],
            featured: true,
        },
        {
            id: "web-radio",
            name: "Radio WEB-APP",
            description: "Applicazione di streaming radio con funzionalità social comuni.",
            longDescription:
                "Un'applicazione web per lo streaming radiofonico che include funzionalità social come chat in tempo reale, commenti e condivisione di brani. Gli utenti possono ascoltare stazioni radio, interagire con altri ascoltatori e condividere le loro canzoni preferite.",
            video: "videos/RepeatRadio",
            tech: ["Laravel", "OpenWeather API", "Geolocation API", "Tailwind CSS", "WebSocket", "MySQL", "Livewire", "RestFul API"],
            featured: true,
        },
        {
            id: "blog",
            name: "Blog Personale",
            description: "Una piattaforma per pubblicazione e condivisione di contenuti.",
            longDescription:
                "Questo è stato il mio primo progetto web creato in gruppo durante il corso di fullstack web developer di Aulab. Una piattaforma di blogging che consente agli utenti di pubblicare e condividere contenuti.",
            video: "videos/Fantasiosi",
            tech: ["Laravel", "JavaScript", "MySQL", "Tailwind CSS", "RestFul API", "Livewire"],
            featured: true,
        },
        {
            id: "portfolio",
            name: "Portfolio Sviluppatore",
            description: "Sito web portfolio personale con design ispirato alla programmazione.",
            longDescription:
                "Questo sito portfolio mostra i miei progetti e competenze con un design ispirato agli editor di codice e agli ambienti di sviluppo. Costruito con React, Vite e Tailwind CSS.",

            tech: ["React", "Vite", "Tailwind CSS", "JavaScript", "Framer Motion"],
            featured: false,
        },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#0f172a8f] to-[#1e293b91] text-gray-200">
            <AnimatedBackground />

            <Header activePage="Projects" />
            <main className="max-w-6xl mx-auto px-4 py-16">
                {/* Titolo della pagina */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: "all" }}  // Attiva con solo 20% visibile
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
                                className="bg-gradient-to-br backdrop-blur-lg hover:cursor-pointer from-indigo-900/20 to-purple-900/20 rounded-lg border border-indigo-800/30 p-6 md:p-8 relative overflow-hidden group"
                                whileHover={{ y: -5 }}
                                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                            >
                                
                                <div className="relative grid md:grid-cols-2 gap-8">
                                    <div>
                                        <div className="code-text text-xs text-indigo-400 mb-2">// Project {index + 1}</div>
                                        <motion.h2
                                            className="text-2xl font-bold mb-4 text-white"
                                            whileHover={{ x: 5 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <span className="code-text text-indigo-400">const</span> {project.name}
                                        </motion.h2>

                                        <motion.p
                                            className="text-gray-300 mb-6"
                                            initial={{ opacity: 0, y: -20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                delay: 0.2,
                                                duration: 0.5,
                                                type: "spring",
                                                stiffness: 100,
                                                damping: 12
                                            }}
                                        >
                                            {project.longDescription}
                                        </motion.p>

                                        <div className="mb-6">
                                            <div className="code-text text-indigo-400 mb-2">// Tech Stack</div>
                                            <div className="flex flex-wrap gap-2">
                                                {project.tech.map((tech, i) => (
                                                    <motion.span
                                                        key={tech}
                                                        className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-indigo-900/50 text-indigo-300 border border-indigo-800/50"
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        {...(index === 0
                                                            ? {
                                                                // First project: animate immediately
                                                                animate: { opacity: 1, scale: 1 },
                                                                transition: { delay: 0.1 * i, duration: 0.3 }
                                                            }
                                                            : {
                                                                // Other projects: animate on scroll
                                                                whileInView: { opacity: 1, scale: 1 },
                                                                viewport: { once: true, margin: "-50px" },
                                                                transition: { delay: 0.1 * i, duration: 0.3 }
                                                            }
                                                        )}
                                                        whileHover={{ scale: 1.1, y: -2 }}
                                                    >
                                                        {tech}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <motion.div
                                        className="bg-[#0f172a]/50 rounded-lg border border-indigo-800/30 p-4 code-text text-sm overflow-hidden relative"
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


                                        {project.id === "portfolio" ? (
                                            <motion.div
                                                className="h-full pt-10 w-[80%]"
                                                initial={{ opacity: 0.6 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ duration: 0.5 }}
                                                viewport={{ once: true}}
                                            >
                                                
                                                    <TypewriterEffect 
                                                    text={`
                                                    <div className="w-full">
                                                        <h1 className="text-3xl font-bold text-center mb-4">
                                                        Currenty Looking at my portfolio!
                                                        </h1>
                                                    </div>
                                                    `
                                                    } />
                                          
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                className="pt-9 px-2"
                                                initial={{ opacity: 0.6 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ duration: 0.5 }}
                                                viewport={{ once: true, amount: 0.1 }}
                                            >
                                                <video
                                                    className="z-[9999] w-full h-full"
                                                    autoPlay
                                                    muted
                                                    playsInline
                                                    loop
                                                    preload="auto"
                                                    src={`${project.video}.mp4`}
                                                >
                                                    Your browser does not support the video tag.
                                                </video>
                                            </motion.div>
                                        )}
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

