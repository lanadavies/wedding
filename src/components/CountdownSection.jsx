import { useEffect, useState } from "react";

const targetDate = new Date("2026-08-08T00:00:00");

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

    return (
        <div className='my-12 mx-15 w-full relative flex items-center justify-center'>
            <div className='text-center text-amber-100 max-w-3xl w-[20rem] lg:w-[30rem]'>
                <p className='text-2xl mb-5 uppercase'>the countdown is on</p>
                <div className='grid grid-cols-4 text-left sm:text-center px-2'>
                    <div>
                        <p className='text-3xl lg:text-5xl font-semibold'>{timeLeft.days}</p>
                        <p className='uppercase text-sm tracking-widest'>Days</p>
                    </div>
                    <div>
                        <p className='text-3xl lg:text-5xl font-semibold'>{String(timeLeft.hours).padStart(2, "0")}</p>
                        <p className='uppercase text-sm tracking-widest'>Hours</p>
                    </div>
                    <div>
                        <p className='text-3xl lg:text-5xl font-semibold'>{String(timeLeft.minutes).padStart(2, "0")}</p>
                        <p className='uppercase text-sm tracking-widest'>Minutes</p>
                    </div>
                    <div>
                        <p className='text-3xl lg:text-5xl font-semibold'>{String(timeLeft.seconds).padStart(2, "0")}</p>
                        <p className='uppercase text-sm tracking-widest'>Seconds</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
