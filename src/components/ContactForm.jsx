import { motion } from "framer-motion"  // Correct import
import React, { useState } from "react"; // Correct import


const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Preparazione dei contenuti dell'email
        const subject = encodeURIComponent(`Contatto dal Portfolio: ${formData.name}`);
        const body = encodeURIComponent(`Nome: ${formData.name}\n\nEmail: ${formData.email}\n\nMessaggio: ${formData.message}`);

        // Rilevamento dispositivo mobile
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        if (isMobile) {
            // Utilizzo del protocollo mailto: per dispositivi mobili
            window.location.href = `mailto:fabianobuscemi2@gmail.com?subject=${subject}&body=${body}`;
        } else {
            // Utilizzo dell'URL Gmail per desktop
            const emailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=fabianobuscemi2@gmail.com&su=${subject}&body=${body}`;
            window.open(emailUrl, "_blank");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="pl-6 mb-2">
            <motion.div
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true, margin: "10%" }}
            >
                <div className="text-green-400 mb-1">// Il tuo nome</div>
                <motion.div
                    className="bg-indigo-900/30 name-form border border-indigo-800/50 rounded p-2 text-white flex items-center gap-1"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <span>const name =</span> <input
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-transparent border-none focus:outline-none text-orange-300 w-fit"
                        placeholder="Il tuo nome"
                        required
                    />;
                </motion.div>
            </motion.div>

            <motion.div
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
            >
                <div className="text-green-400 mb-1">// La tua email</div>
                <motion.div
                    className="bg-indigo-900/30 border email-form border-indigo-800/50 rounded p-2 text-white flex items-center gap-1"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <span>const email =</span> <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-transparent border-none focus:outline-none text-orange-300 w-fit"
                        placeholder="la-tua-email@example.com"
                        required
                    />;
                </motion.div>
            </motion.div>

            <motion.div
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
            >
                <div className="text-green-400 mb-1">// Il tuo messaggio</div>
                <motion.div
                    className="bg-indigo-900/30 border border-indigo-800/50 rounded p-2 text-white"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    const message = <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="bg-transparent border-none focus:outline-none text-orange-300 w-[80%]"
                        placeholder="Ciao! Vorrei collaborare con te.."
                        rows={3}
                        required
                    />;
                </motion.div>
            </motion.div>

            <div className="flex justify-end">
                <motion.button
                    className="bg-indigo-600 hover:bg-indigo-700 inline-flex items-center justify-center rounded-md font-medium transition-colors h-10 px-4 py-2 text-white"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Invia Messaggio
                </motion.button>
            </div>
        </form>
    );
};

export default ContactForm;