"use client"

import { Code, Terminal, Cpu, Globe, Lightbulb, Zap, Palette, LineChart, Server } from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import FadeIn from "../components/FadeIn"
import AnimatedText from "../components/AnimatedText"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import AnimatedBackground from "../components/AnimatedBackground"


export default function SkillsPage() {
  const navigate = useNavigate();

  // Categorie di competenze
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="h-6 w-6" />,
      color: "from-blue-500 to-indigo-600",
      skills: [
        {
          name: "React",
          level: 70,
          description: "Sviluppo di componenti riutilizzabili, hooks personalizzati, gestione dello stato",
        },
        {
          name: "JavaScript",
          level: 85,
          description: "ES6+, async/await, manipolazione DOM, pattern di progettazione",
        },
        { 
          name: "PHP", 
          level: 90, 
          description: "Integrazione con HTML, gestione form, interazione con database, sviluppo plugin" 
        },
        { name: "HTML5 & CSS3", level: 90, description: "Semantica, accessibilità, CSS Grid, Flexbox, animazioni" },
        { name: "Tailwind CSS", level: 95, description: "Utility-first CSS, componenti personalizzati, temi" },
        { name: "Next.js", level: 65, description: "SSR, SSG, ISR, API routes, middleware" },
        { name: "Vite", level: 80, description: "Configurazione, plugin, ottimizzazione build" },
      ],
    },
    {
      title: "Backend",
      icon: <Server className="h-6 w-6" />,
      color: "from-green-500 to-emerald-600",
      skills: [
        { 
          name: "Symfony", 
          level: 80, 
          description: "Controller, Doctrine ORM, form handling, service container, security" 
        },
        { name: "Laravel", level: 85, description: "RESTful API, Caching, Broadcasting, Auth, WebSocket" },
        { name: "MySQL", level: 70, description: "Schema, resolver, query, mutation, subscription" },
        { name: "Node.js", level: 60, description: "Express, middleware, RESTful APIs, WebSocket" },
      ],
    },
    {
      title: "DevOps",
      icon: <Cpu className="h-6 w-6" />,
      color: "from-orange-500 to-red-600",
      skills: [
        { name: "Git & GitHub", level: 90, description: "Branching, merging, CI/CD, GitHub Actions" },
        { name: "Docker", level: 75, description: "Containerizzazione, Dockerfile, Docker Compose" },
        { name: "CI/CD", level: 75, description: "Pipeline automatizzate, test, deployment" },
      ],
    },
    {
      title: "Design",
      icon: <Palette className="h-6 w-6" />,
      color: "from-purple-500 to-pink-600",
      skills: [
        { name: "UI/UX Design", level: 80, description: "User-centered design, wireframing, prototyping" },
        { name: "Figma", level: 85, description: "Design system, componenti, prototipi interattivi" },
        { name: "Responsive Design", level: 90, description: "Mobile-first, media queries, viewport units" },
        { name: "Accessibilità", level: 85, description: "WCAG, ARIA, keyboard navigation, screen readers" },
        { name: "Animazioni", level: 80, description: "CSS animations, Framer Motion, GSAP" },
      ],
    },
    {
      title: "Strumenti",
      icon: <Terminal className="h-6 w-6" />,
      color: "from-cyan-500 to-blue-600",
      skills: [
        { name: "VS Code", level: 95, description: "Estensioni, snippets, debugging, personalizzazione" },
        { name: "npm", level: 90, description: "Gestione pacchetti, script, workspaces" },
        { name: "Webpack", level: 75, description: "Configurazione, loader, plugin, ottimizzazione" },
      ],
    },
    {
      title: "Soft Skills",
      icon: <Lightbulb className="h-6 w-6" />,
      color: "from-amber-500 to-yellow-600",
      skills: [
        { name: "Problem Solving", level: 90, description: "Analisi, scomposizione problemi, soluzioni creative" },
        { name: "Comunicazione", level: 85, description: "Documentazione, presentazioni, spiegazioni tecniche" },
        { name: "Lavoro in Team", level: 90, description: "Collaborazione, code review, pair programming" },
        { name: "Gestione del Tempo", level: 85, description: "Prioritizzazione, deadline, multitasking" },
        {
          name: "Apprendimento Continuo",
          level: 95,
          description: "Aggiornamento costante, sperimentazione, curiosità",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a8f] to-[#1e293b91] text-gray-200">
      <AnimatedBackground />

      <Header activePage="Skills" />

      <main className="max-w-6xl mx-auto px-4 py-16">
        {/* Titolo della pagina */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <AnimatedText text="Le Mie Competenze" className="text-3xl md:text-5xl font-bold text-center mb-4" />
          <motion.p
            className="text-center text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Una panoramica dettagliata delle tecnologie e degli strumenti che utilizzo quotidianamente per creare
            soluzioni web moderne ed efficienti.
          </motion.p>
        </motion.div>

        {/* Introduzione */}
        <FadeIn direction="up" className="mb-16">
          <motion.div
            className="bg-gradient-to-br backdrop-blur-2xl from-indigo-900/20 to-purple-900/20 rounded-lg border border-indigo-800/30 p-8 relative overflow-hidden"
            whileHover={{ boxShadow: "0 0 25px rgba(99, 102, 241, 0.2)" }}
          >
            <motion.div
              className="absolute -top-20 -left-20 w-40 h-40 bg-indigo-600/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            ></motion.div>

            <div className="relative">
              <div className="code-text text-xs text-indigo-400 mb-2">// Approccio</div>
              <h2 className="text-2xl font-bold mb-4 text-white">
                <span className="code-text text-indigo-400">const</span> myApproach
              </h2>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <motion.div
                  className="bg-[#0f172a]/50 rounded-lg border border-indigo-800/30 p-6"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-full bg-indigo-900/50 flex items-center justify-center mb-4 text-indigo-400"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Zap className="h-6 w-6 flex justify-center items-center" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2 text-white">Apprendimento Continuo</h3>
                  <p className="text-gray-300">
                    Mi tengo costantemente aggiornato sulle ultime tecnologie e best practices del settore.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-[#0f172a]/50 rounded-lg border border-indigo-800/30 p-6"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-full bg-indigo-900/50 flex items-center justify-center mb-4 text-indigo-400"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Globe className="h-6 w-6" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2 text-white">Soluzioni Scalabili</h3>
                  <p className="text-gray-300">
                    Progetto architetture che possono crescere e adattarsi alle esigenze future.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-[#0f172a]/50 rounded-lg border border-indigo-800/30 p-6"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-full bg-indigo-900/50 flex items-center justify-center mb-4 text-indigo-400"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <LineChart className="h-6 w-6" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2 text-white">Performance First</h3>
                  <p className="text-gray-300">
                    Ottimizzazione delle prestazioni come priorità in ogni progetto che sviluppo.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </FadeIn>

        {/* Categorie di competenze */}
        {skillCategories.map((category, categoryIndex) => (
          <FadeIn
            key={category.title}
            direction={categoryIndex % 2 === 0 ? "left" : "right"}
            delay={0.1 * categoryIndex}
            className="mb-16"
          >
            <div className="mb-6 flex items-center">
              <div className="h-px flex-1 bg-indigo-900/50"></div>
              <motion.h2
                className="px-6 text-2xl font-bold text-center"
                whileInView={{ scale: [0.9, 1.1, 1] }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="text-indigo-400">&lt;</span>
                {category.title}
                <span className="text-indigo-400">/&gt;</span>
              </motion.h2>
              <div className="h-px flex-1 bg-indigo-900/50"></div>
            </div>

            <motion.div
              className="bg-gradient-to-br backdrop-blur-xl from-indigo-900/20 to-purple-900/20 rounded-lg border border-indigo-800/30 p-6 md:p-8 relative overflow-hidden"
              whileHover={{ boxShadow: "0 0 25px rgba(99, 102, 241, 0.2)" }}
            >

              <div className="relative">
                <div className="flex items-center mb-6">
                  <motion.div
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center mr-4 text-white`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="space-y-8">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="bg-[#0f172a]/50 rounded-lg border border-indigo-800/30 p-6"
                    >
                      <div className="flex flex-wrap justify-between items-center mb-2">
                        <h4 className="text-lg font-bold text-white">{skill.name}</h4>
                        <span className="text-indigo-400 code-text">{skill.level}%</span>
                      </div>

                      <div className="w-full h-2 bg-indigo-900/50 rounded-full mb-4 overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${category.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          viewport={{ once: true }}
                        ></motion.div>
                      </div>

                      <p className="text-gray-300 text-sm">{skill.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </FadeIn>
        ))}

        {/* Call to action */}
        <FadeIn direction="up" className="mt-16">
          <motion.div
            className="bg-gradient-to-br backdrop-blur-xl  from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-800/30 p-8 text-center"
            whileHover={{ boxShadow: "0 0 25px rgba(99, 102, 241, 0.2)" }}
          >
            <motion.h2
              className="text-2xl md:text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Interessato a collaborare?
            </motion.h2>
            <motion.p
              className="text-gray-300 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Sono sempre alla ricerca di nuove sfide e opportunità di collaborazione. Se hai un progetto in mente o
              vuoi discutere di come posso aiutarti, non esitare a contattarmi.
            </motion.p>
            <motion.button
              className="bg-indigo-600 hover:bg-indigo-700 inline-flex items-center justify-center rounded-md font-medium transition-colors h-10 px-6 py-2 text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              onClick={() => {
                // First navigate to the home page
                window.location.href = "/#/home";

                // Store a flag in sessionStorage (survives page reload)
                sessionStorage.setItem('scrollToContacts', 'true');
              }}
            >
              Contattami
            </motion.button>
          </motion.div>
        </FadeIn>
      </main>

      <Footer />
    </div>
  )
}

