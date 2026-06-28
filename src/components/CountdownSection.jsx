import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const targetDate = new Date("2026-08-08T15:00:00");

function getTimeRemaining() {
    const now = new Date();
    const total = Math.max(targetDate - now, 0);
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return { total, days, hours, minutes, seconds };
}

export default function CountdownSection() {
    const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(getTimeRemaining());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // 1. Set up the animation variants
    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: { 
                staggerChildren: 0.04, // Slightly slower for this shorter phrase
                delayChildren: 0.2, 
            }
        }
    };

    const charVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    // 2. The same helper function to animate characters and wrap words beautifully
    const renderTyping = (text) => {
        return text.split(" ").map((word, wordIndex) => (
            // Added last:mr-0 so the final word doesn't have unnecessary trailing space
            <span key={wordIndex} className="inline-block mr-[0.25em] last:mr-0">
                {word.split("").map((char, charIndex) => (
                    <motion.span key={charIndex} variants={charVariants}>
                        {char}
                    </motion.span>
                ))}
            </span>
        ));
    };

    return (
        <div className='h-[20rem] w-full relative flex items-center justify-center bg-center bg-cover'
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(pic4.webp)`,
                backgroundRepeat: 'no-repeat',
            }}>
            <div className='text-center text-amber-100 max-w-3xl w-[22rem] lg:w-[30rem]'>
                
                {/* 3. Wrap the text in motion.p and apply the variants */}
                <motion.p 
                    className='text-[2.2rem] lg:text-[3rem] mb-5 font-medium font-[Ballet]'
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }} // Triggers when 50% visible
                >
                    {renderTyping("Happily ever after starts in...")}
                </motion.p>

                <div className='grid grid-cols-4 text-left sm:text-center px-2'>
                    <div className='flex flex-col justify-center items-center'>
                        <p className='text-5xl font-semibold'>{timeLeft.days}</p>
                        <p className='uppercase text-xs tracking-widest'>Days</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <p className='text-5xl font-semibold'>{String(timeLeft.hours).padStart(2, "0")}</p>
                        <p className='uppercase text-xs tracking-widest'>Hours</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <p className='text-5xl font-semibold'>{String(timeLeft.minutes).padStart(2, "0")}</p>
                        <p className='uppercase text-xs tracking-widest'>Minutes</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <p className='text-5xl font-semibold'>{String(timeLeft.seconds).padStart(2, "0")}</p>
                        <p className='uppercase text-xs tracking-widest'>Seconds</p>
                    </div>
                </div>
            </div>
        </div>
    );
}