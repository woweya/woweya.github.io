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
            <div className="w-full min-h-[95vh] flex justify-center items-center rounded-lg p-4">
                <div className='innercard-loading border-2 border-[#374151] bg-[#252526] rounded-lg w-[45%] shadow-black/30 shadow-lg'>
                    <div className=' flex justify-start items-center border-b border-slate-600/40 gap-10 px-4 py-2'>
                        <h2 className="text-lg text-gray-400 font-semibold">PROBLEMS</h2>
                        <h2 className="text-lg text-gray-400 font-semibold">OUTPUT</h2>
                        <h2 className="text-lg text-gray-400 font-semibold">DEBUG CONSOLE</h2>
                        <h2 className="text-lg text-gray-200 font-semibold border-b-2 border-violet-500 ">TERMINAL</h2>
                    </div>

                    {/* Add the transition animation when build is complete */}
                    {isBuildComplete && (
                        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/90 z-10 text-green-400 font-mono overflow-hidden">
                            <MatrixRainingLetters key="foo-bar" custom_class="m-0 p-0 z-0 code-rain" />
                            <div className="text-center mb-4 flex gap-4 justify-center items-center bg-[#1c1f1e] p-6 border rounded-lg ">
                                <div className="left-side float-left">
                                    <div className="spinner mr-3"></div>
                                </div>
                                <div className='right-side float-right'>
                                    <h3 className="text-4xl mb-2 text-start text-white z-[9999]">Build Complete</h3>
                                    <p className="text-start text-2xl">Launching Application</p>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className='p-4 bg-[#1E1E1E] rounded-b-lg'>
                        <div className='flex justify-between items-start gap-2'>
                            <div className="w-full">
                                <div>
                                    <span className='text-2xl text-gray-400'>woweya@github-portfolio: <span className='text-white'>{text}</span></span>
                                    <span className={`text-2xl text-violet-500 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
                                </div>

                                {buildStarted && (
                                    <div className="mt-4 font-mono text-sm text-green-400">
                                        {buildOutput.map((line, index) => (
                                            <div key={index} className="whitespace-pre">
                                                {line}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {pressedEnter && !buildStarted && (
                                <div className='flex flex-col'>
                                    <div className='flex justify-start items-start' style={{
                                        position: "relative",
                                        width: "100px",
                                    }}>
                                        <button
                                            onClick={startBuild}
                                            style={{
                                                padding: "0.3rem 0.6rem",
                                                borderRadius: "4px",
                                                width: "100%",
                                                border: "1px solid #ccc",
                                                backgroundColor: "#f9f9f9",
                                                fontFamily: "monospace",
                                                fontSize: "0.9rem",
                                                cursor: "pointer",
                                                color: "black"
                                            }}
                                        >
                                            <span className='flex justify-center items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                                            </svg>
                                                Enter
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default LoadingInital