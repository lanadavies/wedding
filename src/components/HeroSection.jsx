import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <div
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("DSC_1378.webp")`
            }}
            className="p-8 lg:mx-[3rem] relative pb-[50px] h-[600px] w-full lg:w-[calc(100%-3rem)] flex flex-col items-center justify-center bg-cover bg-center overflow-hidden"
        >
            {/* Blurs in over 1.2 seconds */}
            <motion.p 
                initial={{ opacity: 0, filter: "blur(12px)", scale: 0.95 }}
                animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                transition={{ duration: 3, ease: "easeOut" }}
                className="lg:text-[4rem] mx-6 text-center text-[5rem] font-[Ballet] mb-6"
            >
                Allana & Dylan
            </motion.p>
            
            {/* Waits exactly 1.2 seconds before sliding up */}
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 3, ease: "easeOut" }}
                className="lg:text-3xl text-2xl mb-4 uppercase font-[EB_Garamond]"
            >
                Are getting married
            </motion.p>
            
            {/* Cascades after the subtitle */}
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 4, ease: "easeOut" }}
                className="bottom-0 absolute lg:text-lg text-md mb-4 uppercase"
            >
                Montsalvat, Eltham  |  August 8, 2026
            </motion.p>
            
            {/* Fades in last */}
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 3 }}
                className="-left-5 lg:-left-3 top-1/2 rotate-270 absolute uppercase "
            >
                Till Death
            </motion.p>
            
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 3 }}
                className="-right-5 lg:-right-3 top-1/2 rotate-90 absolute uppercase"
            >
                Do us part
            </motion.p>
        </div>
    );
}