import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import './LaunchPage.css';
import launchBg from '../assets/launch-page.jpeg';

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
        // Play blasting sound
        if (audioRef.current) {
            audioRef.current.play().catch(err => console.log("Audio play failed:", err));
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

        // Redirect after a short delay to see the poppers
        setTimeout(() => {
            navigate('/home');
        }, 1500);
    };

    return (
        <div className="launch-page-container" style={{ backgroundImage: `url(${launchBg})` }}>
            {/* Background Sound */}
            <audio
                ref={audioRef}
                src="https://assets.mixkit.co/sfx/preview/mixkit-party-popper-1329.mp3"
                preload="auto"
            />

            <div className="launch-overlay">
                <motion.div
                    className="launch-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
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
