import { motion } from "framer-motion";
import VintageFrameBorder from "../assets/vintage_frame_set_16.png";
import VintageFrameBorder2 from "../assets/vintage_frame_set_2_13.png";

export default function ScheduleSection() {
    // 1. Container variants for the staggered timeline
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15, // Delay between each time slot appearing
                delayChildren: 0.4,    // Waits for the title to fade in first
            }
        }
    };

    // 2. Variants for each individual time block (slides up slightly)
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.6, ease: "easeOut" } 
        }
    };

    return (
        <div className="relative flex-col px-8 py-[70px] flex items-center max-w-full w-full max-w-3xl paper-background">
            
            {/* Title Section - Fades in and slides down slightly */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
                className="flex flex-col items-center"
            >
                <p className="text-[3rem] font-[Kapakana] h-8">The</p>
                <p className="text-[3rem] mb-0">Program</p>
            </motion.div>

            {/* Decorative Border - Slow fade in */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-amber-100 opacity-80 w-[300px] h-[100px] rotate-180 -mt-4 ml-4"
                style={{
                    WebkitMaskImage: `url(${VintageFrameBorder2})`,
                    maskImage: `url(${VintageFrameBorder2})`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center'
                }}
            />

            {/* Timeline Events - Staggered fade in */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="flex justify-center items-center text-lg my-4 flex-col lg:flex-row"
            >
                {/* 3:00 PM */}
                <motion.div variants={itemVariants} className="flex flex-col justify-center items-center w-50 h-30 border-b-2 lg:border-b-0 lg:border-r-2 border-dotted">
                    <p className='text-2xl'>3:00 PM</p>
                    <p className='uppercase'>Ceremony</p>
                </motion.div>

                {/* 4:00 PM */}
                <motion.div variants={itemVariants} className="flex flex-col justify-center items-center w-50 h-30 border-b-2 lg:border-b-0 lg:border-r-2 border-dotted">
                    <p className='text-2xl'>4:00 PM</p>
                    <p className='uppercase'>Cocktail Hour</p>
                </motion.div>

                {/* 5:00 PM */}
                <motion.div variants={itemVariants} className="flex flex-col justify-center items-center w-50 h-30 border-b-2 lg:border-b-0 lg:border-r-2 border-dotted">
                    <p className='text-2xl'>5:00 PM</p>
                    <p className='uppercase'>Reception</p>
                </motion.div>

                {/* 10:00 PM */}
                <motion.div variants={itemVariants} className="flex flex-col justify-center items-center w-50 h-30">
                    <p className='text-2xl'>10:00 PM</p>
                    <p className='uppercase'>After Party</p>
                </motion.div>
            </motion.div>
            
        </div>
    );
}