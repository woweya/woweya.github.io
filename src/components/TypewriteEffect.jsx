import React, { useState, useEffect, useRef } from 'react';

const TypewriterEffect = ({ text }) => {
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

    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const componentRef = useRef(null);

    // Set up Intersection Observer to detect when component is visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 } // Trigger when at least 10% of component is visible
        );

        if (componentRef.current) {
            observer.observe(componentRef.current);
        }

        return () => {
            if (componentRef.current) {
                observer.unobserve(componentRef.current);
            }
        };
    }, []);

    // Only start typing when component is visible
    useEffect(() => {
        if (!isVisible || currentIndex >= cleanText.length) return;

        const timeout = setTimeout(() => {
            setDisplayedText(prev => prev + cleanText[currentIndex]);
            setCurrentIndex(currentIndex + 1);
        }, 30); // Velocità digitazione

        return () => clearTimeout(timeout);
    }, [currentIndex, cleanText, isVisible]);

    return (
        <pre ref={componentRef} className="font-mono m-0 p-0 whitespace-pre">
            {displayedText}
            <span className="animate-pulse">|</span>
        </pre>
    );
};

export default TypewriterEffect;