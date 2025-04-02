import React, { useState, useEffect } from 'react';

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

    useEffect(() => {
        if (currentIndex < cleanText.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + cleanText[currentIndex]);
                setCurrentIndex(currentIndex + 1);
            }, 30); // Velocità digitazione

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, cleanText]);

    return (
        <pre className="font-mono m-0 p-0 whitespace-pre">
            {displayedText}
            <span className="animate-pulse">|</span>
        </pre>
    );
};

export default TypewriterEffect;
