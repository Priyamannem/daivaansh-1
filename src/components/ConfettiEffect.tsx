import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

const ConfettiEffect: React.FC = () => {
    useEffect(() => {
        const fireConfetti = () => {
            const duration = 12 * 1000; // Even longer duration
            const animationEnd = Date.now() + duration;
            const defaults = { startVelocity: 50, spread: 360, ticks: 150, zIndex: 1000 };

            const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

            // Massive initial sequence
            const sequence = [
                { delay: 0, x: 0.1, y: 0.1, count: 300 },
                { delay: 150, x: 0.9, y: 0.1, count: 300 },
                { delay: 400, x: 0.5, y: 0.5, count: 500 },
                { delay: 700, x: 0.2, y: 0.8, count: 350 },
                { delay: 850, x: 0.8, y: 0.8, count: 350 },
                { delay: 2000, x: 0.3, y: 0.3, count: 250 },
                { delay: 2200, x: 0.7, y: 0.3, count: 250 },
                { delay: 4000, x: 0.5, y: 0.2, count: 400 },
            ];

            sequence.forEach((s) => {
                setTimeout(() => {
                    confetti({
                        ...defaults,
                        particleCount: s.count,
                        origin: { x: s.x, y: s.y },
                        colors: ['#FFD700', '#DAA520', '#FFA500', '#228B22', '#32CD32', '#008000', '#90EE90', '#FFFFFF', '#FFD700'],
                        gravity: 1.0,
                        scalar: 1.5,
                    });
                }, s.delay);
            });

            // Constant celebration effect
            const interval = setInterval(function () {
                const timeLeft = animationEnd - Date.now();

                if (timeLeft <= 0) {
                    return clearInterval(interval);
                }

                const particleCount = 100 * (timeLeft / duration);

                // Active side cannons
                confetti({
                    ...defaults,
                    particleCount: particleCount * 0.9,
                    origin: { x: 0, y: 0.9 },
                    angle: 65,
                    spread: 65,
                    colors: ['#FFD700', '#DAA520', '#228B22', '#32CD32'],
                    scalar: 1.2,
                });
                confetti({
                    ...defaults,
                    particleCount: particleCount * 0.9,
                    origin: { x: 1, y: 0.9 },
                    angle: 115,
                    spread: 65,
                    colors: ['#FFD700', '#DAA520', '#228B22', '#32CD32'],
                    scalar: 1.2,
                });

                // Periodic center pops
                if (Math.random() > 0.5) {
                    confetti({
                        ...defaults,
                        particleCount: 80,
                        origin: { x: randomInRange(0.1, 0.9), y: randomInRange(0.1, 0.4) },
                        colors: ['#DAA520', '#008000', '#FFD700', '#FFFFFF'],
                        gravity: 0.7,
                        scalar: 1.3,
                    });
                }
            }, 180);
        };

        fireConfetti();
    }, []);

    return null;
};

export default ConfettiEffect;
