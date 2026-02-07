import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import './LaunchPage.css';
import launchBg from '../assets/launch-page.jpeg';
import logoImg from '../assets/logo.jpg';

const LaunchPage: React.FC = () => {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(10);
    const [isReady, setIsReady] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (countdown > 0) {
            const timer = setInterval(() => {
                setCountdown((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(timer);
        } else {
            setIsReady(true);
        }
    }, [countdown]);

    const handleLaunch = () => {
        console.log("🚀 Launch button clicked!");

        // Play blasting sound with comprehensive debugging
        if (audioRef.current) {
            console.log("✅ Audio element found");
            console.log("📊 Audio ready state:", audioRef.current.readyState);
            console.log("🔊 Audio source:", audioRef.current.src);

            // Set volume to max
            audioRef.current.volume = 1.0;

            // Attempt to play
            const playPromise = audioRef.current.play();

            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        console.log("✅ Audio playing successfully!");
                    })
                    .catch(err => {
                        console.error("❌ Audio play failed:", err);
                        console.error("Error name:", err.name);
                        console.error("Error message:", err.message);

                        // Show user-friendly message
                        alert("Sound couldn't play. Please check your browser's audio settings or try clicking again!");
                    });
            }
        } else {
            console.error("❌ Audio element not found!");
            alert("Audio element not loaded. Please refresh the page.");
        }

        // Fire poppers
        const duration = 5 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 60, spread: 360, ticks: 100, zIndex: 1000 };

        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

        const interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 200 * (timeLeft / duration);
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
                colors: ['#FFD700', '#228B22', '#FFFFFF'],
                scalar: 1.2
            });
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
                colors: ['#FFD700', '#228B22', '#FFFFFF'],
                scalar: 1.2
            });
        }, 150);

        // Redirect after a short delay to allow sound to start
        setTimeout(() => {
            navigate('/home');
        }, 300);
    };

    return (
        <div className="launch-page-container" style={{ backgroundImage: `url(${launchBg})` }}>
            {/* Background Sound - Using local file for reliability */}
            <audio
                ref={audioRef}
                preload="auto"
                onLoadedData={() => console.log("✅ Audio loaded successfully")}
                onError={(e) => console.error("❌ Audio loading error:", e)}
            >
                <source src="/party-popper.mp3" type="audio/mpeg" />
                <source src="https://assets.mixkit.co/sfx/preview/mixkit-party-popper-1329.mp3" type="audio/mpeg" />
            </audio>

            <div className="launch-overlay">
                <motion.div
                    className="launch-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Logo Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col items-center gap-3 mb-8"
                    >
                        <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center p-3 shadow-xl border-4 border-gold/30">
                            <img src={logoImg} alt="Daivaansh Logo" className="w-full h-full object-contain" />
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="font-serif font-bold text-2xl text-cream tracking-wide">Daivaansh</span>
                            <span className="font-serif font-bold text-xl text-cream tracking-wide">Infra</span>
                        </div>
                    </motion.div>

                    <h1 className="launch-h1">Something Remarkable is about to Rise</h1>
                    <h3 className="launch-h3">Built on vision, planning, and trust</h3>

                    <div className="countdown-section">
                        {!isReady ? (
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={countdown}
                                    className="timer-display"
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 1.5, opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {countdown}
                                </motion.div>
                            </AnimatePresence>
                        ) : (
                            <motion.button
                                className="launch-button"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                whileHover={{ scale: 1.1, boxShadow: "0 0 25px rgba(255, 215, 0, 0.6)" }}
                                whileTap={{ scale: 0.9 }}
                                onClick={handleLaunch}
                            >
                                LAUNCH
                            </motion.button>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default LaunchPage;
