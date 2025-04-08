import React, { useState, useEffect, useRef } from 'react';

const TypewriterEffect = ({ text }) => {
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    // Normalizza l'indentazione: rimuove lo spazio in eccesso a sinistra
    const normalizeIndentation = (str) => {
        const lines = str.split("\n");

        // Trova il minimo spazio a sinistra ignorando la prima riga vuota
        const minIndent = lines
            .filter(line => line.trim().length > 0) // Ignora righe vuote
            .reduce((min, line) => {
                const match = line.match(/^(\s*)\S/);
                return match ? Math.min(min, match[1].length) : min;
            }, Infinity);

        // Rimuove quell'indentazione da tutte le righe
        return lines.map(line => line.slice(minIndent)).join("\n");
    };

    const cleanText = normalizeIndentation(text.trimEnd()); // Rimuove solo gli spazi finali

    // Set up intersection observer to detect when component is in viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Once visible, no need to keep observing
                    observer.disconnect();
                }
            },
            { threshold: 0.1 } // Trigger when at least 10% of the element is visible
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Only start typing effect when element is visible
    useEffect(() => {
        if (!isVisible) return; // Skip if not yet visible

        if (currentIndex < cleanText.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + cleanText[currentIndex]);
                setCurrentIndex(currentIndex + 1);
            }, 30); // Velocità digitazione

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, cleanText, isVisible]);

    return (
        <pre ref={elementRef} className="code-text m-0 p-0 whitespace-pre">
            {displayedText}
            <span className="animate-pulse">|</span>
        </pre>
    );
};

export default TypewriterEffect;