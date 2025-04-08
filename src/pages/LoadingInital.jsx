import React, { useState, useEffect } from 'react'
import { MatrixRainingLetters } from "react-mdr";


export const LoadingInital = () => {
    const [text, setText] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    const [typingComplete, setTypingComplete] = useState(false);
    const [pressedEnter, setPressedEnter] = useState(false);
    const [buildStarted, setBuildStarted] = useState(false);
    const [buildOutput, setBuildOutput] = useState([]);
    const [isBuildComplete, setIsBuildComplete] = useState(false);
    const fullText = 'npm run build';

    // Cursore blinking effect
    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 530);

        return () => clearInterval(cursorInterval);
    }, []);

    // Handle typing effect
    useEffect(() => {
        if (text.length < fullText.length) {
            const typingTimeout = setTimeout(() => {
                setText(fullText.substring(0, text.length + 1));
            }, 150);

            return () => clearTimeout(typingTimeout);
        } else if (!typingComplete) {
            setTypingComplete(true);

            // Simulate waiting before pressing Enter
            setTimeout(() => {
                setPressedEnter(true);
            }, 800);
        }
    }, [text, typingComplete]);

    // Handle build simulation
    const startBuild = () => {
        if (buildStarted) return;

        setBuildStarted(true);
        setShowCursor(false);

        const buildLines = [
            "",
            "> github-portfolio@0.1.0 build",
            "> react-scripts build",
            "",
            "Creating an optimized production build...",
            "Compiled successfully.",
            "",
            "File sizes after gzip:",
            "",
            "  512.32 KB  build/static/js/main.f5b85ce3.js",
            "  28.56 KB   build/static/css/main.e7c22c32.css",
            "",
            "The project was built assuming it is hosted at /.",
            "You can control this with the homepage field in your package.json.",
            "",
            "The build folder is ready to be deployed.",
            "Find out more about deployment here:",
            "",
            "  https://react.dev/",
            "",
            "Done in 8.36s."
        ];

        let index = 0;
        const interval = setInterval(() => {
            if (index < buildLines.length) {
                setBuildOutput(prev => [...prev, buildLines[index]]);
                index++;
            } else {
                clearInterval(interval);
                setIsBuildComplete(true);
                // After build completes, show transition animation before redirecting
                setTimeout(() => {
                    window.location.href = '/#/home';  // Aggiungi un # prima di /home
                }, 2500); // Increased delay to show animation
            }
        }, 200);
    };

    // Handle keyboard Enter press
    useEffect(() => {
        const handleKeyDown = (event) => {

            if (event.key === 'Enter' && typingComplete && !buildStarted) {
                startBuild();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [typingComplete, buildStarted]);

    return (
        <div className="w-full min-h-screen flex justify-center items-center p-4">
            <div className='innercard-loading border-2 border-gray-700 bg-gray-900 rounded-lg w-[50%] shadow-lg'>
                <div className='flex flex-wrap justify-start items-center border-b border-gray-600 gap-2 sm:gap-4 px-2 sm:px-4 py-2 text-xs sm:text-sm lg:text-base'>
                    <h2 className="text-gray-400 font-semibold">PROBLEMS</h2>
                    <h2 className="text-gray-400 font-semibold">OUTPUT</h2>
                    <h2 className="text-gray-400 font-semibold">DEBUG CONSOLE</h2>
                    <h2 className="text-gray-200 font-semibold border-b-2 border-violet-500">TERMINAL</h2>
                </div>

                {isBuildComplete && (
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/90 text-green-400 code-text overflow-hidden p-4">
                        <MatrixRainingLetters custom_class="m-0 p-0 z-0 code-rain" />
                        <div className="text-center flex flex-col sm:flex-row gap-4 justify-center items-center rounded-lg bg-gray-800 p-6 border border-gray-700 w-full max-w-xs sm:max-w-md">
                            <h3 className="text-xl sm:text-2xl text-white">Build Complete</h3>
                            <p className="text-sm sm:text-lg animate-pulse duration-500">Launching Application</p>                       
                         </div>
                    </div>
                )}

                <div className='p-4 bg-gray-800 rounded-b-lg text-xs sm:text-base'>
                    <div className='flex flex-col sm:flex-row justify-between items-center gap-2'>
                        <div className="w-full">
                            <div>
                                <span className='text-gray-400'>woweya@github-portfolio: <span className='text-white'>{text}</span></span>
                                <span className={`text-violet-500 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
                            </div>
                            {buildStarted && (
                                <div className="mt-4 code-text text-xs sm:text-sm text-green-400">
                                    {buildOutput.map((line, index) => (
                                        <div key={index} className="whitespace-pre">{line}</div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {pressedEnter && !buildStarted && (
                            <button
                                onClick={startBuild}
                                className="p-2 animate-pulse flex justify-center items-center gap-1 duration-1000 border rounded bg-gray-100 text-black code-text lg:w-[30%] text-xs sm:text-sm hover:bg-gray-200 w-[50%]"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                                </svg>
                            
                                Enter
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoadingInital