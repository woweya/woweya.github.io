"use client"

import { Link } from "react-router-dom"
import { ChevronRight, Github, Linkedin, Mail, FileText, Code, Layers, Database, Terminal } from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import FadeIn from "../components/FadeIn"
import AnimatedText from "../components/AnimatedText"
import { motion } from "framer-motion"
import React, { useState, useEffect } from "react"
import AnimatedBackground from "../components/AnimatedBackground"
import ContactForm from "../components/ContactForm"
import {Helmet} from "react-helmet";


export default function HomePage() {

  useEffect(() => {
    // Check if we should scroll to contacts section
    if (sessionStorage.getItem('scrollToContacts') === 'true' ||
      (location.state && location.state.scrollToContacts)) {
      // Clear the flag
      sessionStorage.removeItem('scrollToContacts');

      // Scroll after a delay to ensure the page is rendered
      setTimeout(() => {
        const contactsSection = document.getElementById('contatti');
        if (contactsSection) {
          contactsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a8f] to-[#1e293b91]  text-gray-200">
      <Helmet>
        <title>Fabiano - Portfolio | Full Stack Developer</title>
        <meta name="description" content="Fabiano - Portfolio: progetti e competenze in Symfony, Laravel, React, MySQL e Docker. Scopri il mio lavoro e contattami." />
        <meta property="og:title" content="Fabiano - Portfolio | Full Stack Developer" />
        <meta property="og:description" content="Progetti e competenze di uno sviluppatore full stack." />
      </Helmet>
      <AnimatedBackground />
      <Header activePage="Home" />

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-24">
          <FadeIn className="md:w-1/2" direction="left">
            {/* H1 unico per SEO (nascosto visivamente, accessibile agli screen reader) */}
            <h1 className="sr-only">Fabiano - Portfolio | Full Stack Developer</h1>
            <div className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider text-indigo-400 uppercase bg-indigo-900/30 rounded-full">
              Full Stack Developer
            </div>
            <AnimatedText
              text="Codice   elegante, soluzioni   creative"
              className="text-4xl header-text font-bold mb-6 leading-tight"
            />
            <motion.p
              className="text-gray-300 text-lg mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Sviluppatore appassionato con focus sulla creazione di applicazioni web moderne, performanti e accessibili
              utilizzando le tecnologie più recenti.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <Link to="/projects">
                <motion.button
                  className="bg-indigo-600 hover:bg-indigo-700 text-white inline-flex items-center justify-center rounded-md font-medium transition-colors h-10 px-4 py-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Visualizza Progetti <ChevronRight className="ml-1 h-4 w-4" />
                </motion.button>
              </Link>
              <motion.button
                onClick={() => {
                  document.getElementById('contatti').scrollIntoView({ behavior: 'smooth' });
                }}
                className="border border-indigo-500 text-indigo-400 hover:bg-indigo-950 inline-flex items-center justify-center rounded-md font-medium transition-colors h-10 px-4 py-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contattami
              </motion.button>
            </motion.div>
          </FadeIn>
          <FadeIn className="md:w-1/2 relative" direction="right" delay={0.3}>
            <motion.div
              className="w-full overflow-auto h-80 md:h-96 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-lg border border-indigo-800/50 p-6 code-text text-sm  relative"
              whileHover={{ boxShadow: "0 0 25px rgba(99, 102, 241, 0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-0 left-0 right-0 h-10 bg-[#0f172a]/80 border-b border-indigo-900/30 flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-xs text-gray-400">developer.js</div>
              </div>
              <motion.div
                className="pt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <TypewriterEffect />
              </motion.div>

              {/* Animated cursor */}
              <div className="absolute bottom-[50px]   right-[260px] w-2 h-5 bg-indigo-400 animate-pulse"></div>


            </motion.div>
          </FadeIn>
        </div>

        {/* Skills Section */}
        <section className="mb-24">
          <div className="flex items-center mb-12">
            <div className="h-px flex-1 bg-indigo-900/50"></div>
            <motion.h2
              className="px-6 text-2xl font-bold text-center"
              whileInView={{ scale: [0.9, 1.1, 1] }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-indigo-400">&lt;</span>
              Competenze
              <span className="text-indigo-400">/&gt;</span>
            </motion.h2>
            <div className="h-px flex-1 bg-indigo-900/50"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Code className="h-6 w-6" />,
                title: "Front-end",
                skills: ["React", "JavaScript", "Tailwind CSS", "Bootstrap"],
              },
              {
                icon: <Database className="h-6 w-6" />,
                title: "Back-end",
                skills: ["Symfony", "Laravel", "MySQL", "restAPI"],
              },
              {
                icon: <Layers className="h-6 w-6" />,
                title: "Design",
                skills: ["UI/UX", "Figma", "Responsive Design", "Accessibility"],
              },
              {
                icon: <Terminal className="h-6 w-6" />,
                title: "Tools",
                skills: ["Git", "Docker", "CI/CD", "Postman"],
              },
            ].map((category, index) => (
              <FadeIn key={index} delay={0.2 * index} direction="up">
                <motion.div
                  className="group bg-gradient-to-br backdrop-blur-lg from-indigo-900/20 to-purple-900/20 rounded-lg border border-indigo-800/30 p-6 hover:border-indigo-600/50 transition-all duration-300"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-full bg-indigo-900/50 flex items-center justify-center mb-4 text-indigo-400 group-hover:text-indigo-300 group-hover:bg-indigo-800/50 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-white">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center text-gray-300"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i, duration: 0.3 }}
                      >
                        <span className="text-indigo-400 mr-2">•</span> {skill}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section className="mb-24">
          <div className="flex items-center mb-12">
            <div className="h-px flex-1 bg-indigo-900/50"></div>
            <motion.h2
              className="px-6 text-2xl font-bold text-center"
              whileInView={{ scale: [0.9, 1.1, 1] }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-indigo-400">&lt;</span>
              Progetti in Evidenza
              <span className="text-indigo-400">/&gt;</span>
            </motion.h2>
            <div className="h-px flex-1 bg-indigo-900/50"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "E-Commerce Platform",
                tech: "Symfony, Docker, MySQL, restAPI, Websockets API",
                desc: "Una soluzione e-commerce completa con gestione pagamenti e inventario.",
              },
              {
                name: "Personal Blog",
                tech: "Laravel, JavaScript, MySQL, Tailwind CSS",
                desc: "Un blog basato su funzionalità di pubblicazione, condivisione e gestion dei contenuti.",
              },
              {
                name: "Web Radio",
                tech: "Laravel, OpenWeather API, Websockets API, JavaScript, Tailwind CSS, MySQL",
                desc: "Applicazione Web che permetteva lo streaming in live di una stazione radio ed includeva tutte le funzionalità social basate su una community.",
              },
              {
                name: "Gestionale Amministrativo",
                tech: "Symfony, JavaScript, MySQL, Tailwind CSS, Docker, restAPI, Websockets API",
                desc: "Applicativo di gestione attività amministrative con aggiornamenti in tempo reale e con varie interfacce user-friendly per una buona gestione di dati.",
              },
            ].map((project, index) => (
              <FadeIn key={index} delay={0.2 * index} direction={index % 2 === 0 ? "left" : "right"}>
                <motion.div
                  className="group backdrop-blur-2xl  bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-lg border border-indigo-800/30 p-6 hover:border-indigo-600/50 transition-all duration-300 relative overflow-hidden"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  {/* Decorative code line numbers */}
                  <div className="absolute left-3 top-6 bottom-6 flex flex-col justify-between text-xs text-indigo-800 code-text">
                    {Array.from({ length: 5 }, (_, i) => (
                      <div key={i}>{i + 1}</div>
                    ))}
                  </div>

                  <div className="ml-6">
                    <motion.h3
                      className="text-xl font-bold mb-3 text-white group-hover:text-indigo-300 transition-colors"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="code-text text-indigo-400">const</span> {project.name}
                    </motion.h3>

                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.tech.split(", ").map((tech, i) => (
                        <motion.span
                          key={tech}
                          className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-indigo-900/50 text-indigo-300 border border-indigo-800/50"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ delay: 0.1 * i, duration: 0.3 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <p className="text-gray-300 mb-6">{project.desc}</p>

                    <div className="flex justify-end">
                      <motion.button
                        className="text-xs border-indigo-700 text-indigo-400 hover:bg-indigo-950 inline-flex items-center justify-center rounded-md font-medium transition-colors h-9 px-3 border bg-transparent"
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => { window.location.href = "/#/projects"}}
                      >
                        Visualizza Dettagli <ChevronRight className="ml-1 h-3 w-3" />
                      </motion.button>
                    </div>
                  </div>

                </motion.div>
              </FadeIn>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <FadeIn direction="up" delay={0.5}>
              <Link to="/projects">
                <motion.button
                  className="bg-indigo-600 hover:bg-indigo-700 inline-flex items-center justify-center rounded-md font-medium transition-colors h-10 px-4 py-2 text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Tutti i Progetti <ChevronRight className="ml-1 h-4 w-4" />
                </motion.button>
              </Link>
            </FadeIn>
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center mb-8">
            <div className="h-px flex-1 bg-indigo-900/50"></div>
            <h2 className="px-6 text-2xl font-bold text-center">
              <span className="text-indigo-400">&lt;</span>
              Formazione
              <span className="text-indigo-400">/&gt;</span>
            </h2>
            <div className="h-px flex-1 bg-indigo-900/50"></div>
          </div>

          <div className="bg-gradient-to-br backdrop-blur-2xl from-indigo-900/20 to-purple-900/20 rounded-lg border border-indigo-800/30 p-6 hover:border-indigo-600/50 transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4 flex justify-center">
                <img src="/images/1713343779745.jpeg" className=" h-32" alt="Certificato Aulab - Master in Fullstack Web Development" />
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold mb-2 text-white">
                  <span className="code-text text-indigo-400">const</span> masterCertificate
                </h3>
                <div className="mb-4">
                  <div className="text-lg font-semibold text-white">Master in Fullstack Web Development</div>
                  <div className="text-indigo-300">Aulab</div>
                  <div className="text-gray-400">2023 - 2024</div>
                </div>
                <p className="text-gray-300 mb-4">
                  Ho completato un master specializzato in sviluppo web fullstack con Aulab, acquisendo competenze approfondite
                  in tecnologie frontend e backend, sviluppo di API, database relazionali e metodologie di lavoro agile
                  per progetti web moderni.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "HTML&CSS",
                    "JavaScript",
                    "PHP",
                    "Laravel",
                    "MySQL",
                    "Architetture Scalabili",
                    "Performance Optimization",
                    "UX Research",
                    "Responsive Design",
                    "Agile Methodologies",
                    "RESTful APIs",
                    "Git",
                    "CI/CD",
                  ].map((skill, i) => (
                    <motion.span
                      key={skill}
                      className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-indigo-900/50 text-indigo-300 border border-indigo-800/50"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: 0.1 * i, duration: 0.3 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contatti">
          <div className="flex items-center mb-12">
            <div className="h-px flex-1 bg-indigo-900/50"></div>
            <motion.h2
              className="px-6 text-2xl font-bold text-center"
              whileInView={{ scale: [0.9, 1.1, 1] }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-indigo-400">&lt;</span>
              Contatti
              <span className="text-indigo-400">/&gt;</span>
            </motion.h2>
            <div className="h-px flex-1 bg-indigo-900/50"></div>
          </div>

          <FadeIn direction="up">
            <motion.div
              className="bg-gradient-to-br contactInfo-container backdrop-blur-2xl from-indigo-900/20 to-purple-900/20 rounded-lg border border-indigo-800/30 p-8 relative overflow-hidden"
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
              <motion.div
                className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: 2,
                }}
              ></motion.div>

              <div className="relative grid md:grid-cols-2 gap-8">
                <div className="conactInfo">
                  <h3 className="text-xl font-bold mb-6 text-white">
                    <span className="code-text text-indigo-400">const</span> contactInfo
                  </h3>

                  <div className="space-y-6">
                    {[
                      {
                        icon: <Github className="h-5 w-5" />,
                        label: "GitHub",
                        value: "github.com/woweya",
                        target: "_blank",
                        href: "https://github.com/woweya",
                      },
                      {
                        icon: <Linkedin className="h-5 w-5" />,
                        label: "LinkedIn",
                        value: "linkedin.com/in/woweya",
                        target: "_blank",
                        href: "https://www.linkedin.com/in/fabiano-buscemideveloper/",
                      },
                      {
                        icon: <Mail className="h-5 w-5" />,
                        label: "Email",
                        value: "fabianobuscemi1@gmail.com",
                        target: "_blank",
                        href: "mailto:fabianobuscemi2@gmail.com?subject=Richiesta%20dal%20Portfolio&body=Ciao%20Fabiano%2C%0A%0AVorrei%20contattarti%20riguardo%20a..."
                      },
                      { icon: <FileText className="h-5 w-5" />, label: "CV", value: "Scarica PDF", href: "#" },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center group"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className="w-10 h-10 rounded-full bg-indigo-900/50 flex items-center justify-center mr-4 text-indigo-400 group-hover:text-indigo-300 group-hover:bg-indigo-800/50 transition-colors"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          {item.icon}
                        </motion.div>
                        <div>
                          <div className="text-sm text-indigo-400">{item.label}</div>
                          <motion.a
                            href={item.href}
                            className="text-white hover:text-indigo-300 transition-colors"
                            whileHover={{ x: 3 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            {item.value}
                          </motion.a>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="code-text form-contact text-sm">
                  <div className="text-indigo-300 mb-2">
                    <span className="text-purple-400">function</span>{" "}
                    <span className="text-yellow-300">sendMessage</span>() {"{"}
                  </div>
                  <ContactForm />
                  <div className="text-indigo-300">{"}"};</div>
                </div>
              </div>
            </motion.div>
          </FadeIn>
        </section>
      </main>

      <Footer />
    </div>
  )
}

// Componente per l'effetto di scrittura automatica
function TypewriterEffect() {
  const codeLines = [
    {
      text: (
        <div className="text-indigo-300">
          <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = {"{"}
        </div>
      ),
      delay: 0,
    },
    {
      text: (
        <div>
          <span className="text-green-400">name</span>: <span className="text-orange-300">"Fabiano Buscemi"</span>,
        </div>
      ),
      delay: 0.1,
    },
    {
      text: (
        <div>
          <span className="text-green-400">role</span>: <span className="text-orange-300">"Full Stack Developer"</span>,
        </div>
      ),
      delay: 0.2,
    },
    {
      text: (
        <div>
          <span className="text-green-400">location</span>: <span className="text-orange-300">"Sicilia, Palermo (PA)"</span>,
        </div>
      ),
      delay: 0.3,
    },
    {
      text: (
        <div>
          <span className="text-green-400">skills</span>: [<span className="text-orange-300">"JavaScript"</span>,{" "}
          <span className="text-orange-300">"React"</span>, <span className="text-orange-300">"PHP"</span>],
        </div>
      ),
      delay: 0.4,
    },
    {
      text: (
        <div>
          <span className="text-green-400">interests</span>: [<span className="text-orange-300">"Web Development"</span>
          , <span className="text-orange-300">"UI/UX Design"</span>,{" "}
          <span className="text-orange-300">"Open Source"</span>],
        </div>
      ),
      delay: 0.5,
    },
    {
      text: (
        <div className="text-indigo-300 mb-2">
          <span className="text-purple-400">function</span> <span className="text-yellow-300">getIntroduction</span>(){" "}
          {"{"}
        </div>
      ),
      delay: 0.7,
    },
    {
      text: (
        <div>
          <span className="text-purple-400">return</span>{" "}
          <span className="text-orange-300">
            "Ciao! Sono uno sviluppatore appassionato e focalizzato in creare soluzioni eleganti e creative!."
          </span>
          ;
        </div>
      ),
      delay: 0.8,
    },
    { text: <div className="text-indigo-300 mb-2">{"}"};</div>, delay: 0.9 },
    {
      text: (
        <div className="text-indigo-300">
          <span className="text-purple-400">export default</span> developer;
        </div>
      ),
      delay: 1,
    },
  ]

  return (
    <div className="pl-6 mb-4">
      {codeLines.map((line, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: line.delay, duration: 0.3 }}
        >
          {line.text}
        </motion.div>
      ))}
    </div>
  )
}


