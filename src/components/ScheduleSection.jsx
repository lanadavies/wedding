import { motion } from "framer-motion";
import VintageFrameBorder2 from "../assets/vintage_frame_set_2_13.png";
import CeremonyIcon from "../assets/ceremony_icon.png";
import CocktailIcon from "../assets/cocktails_icon.png";
import ReceptionIcon from "../assets/reception_icon.png";
import PartyIcon from "../assets/party_icon.png";

export default function ScheduleSection() {
    // 1. Container variants for the staggered timeline
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // Delay between each time slot appearing
                delayChildren: 0.5,    // Waits for the title to fade in first
            }
        }
    };

    // 2. Variants for each individual time block (slides up slightly)
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.5, ease: "easeOut" } 
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
                className="flex justify-center items-center text-lg my-4 flex-col lg:flex-row gap-y-10"
            >
                {/* 3:00 PM */}
                <motion.div variants={itemVariants} className="flex flex-col justify-center items-center w-50">
                    <div
                        className="bg-amber-100 w-[200px] h-[200px] my-2"
                        style={{
                            WebkitMaskImage: `url(${CeremonyIcon})`,
                            maskImage: `url(${CeremonyIcon})`,
                            maskSize: 'contain',
                            maskRepeat: 'no-repeat',
                            maskPosition: 'center'
                        }}
                    />
                    <p className='text-2xl'>3:00 PM</p>
                    <p className='text-[2.2rem] font-[Kapakana] -mt-1'>Ceremony</p>
                </motion.div>

                {/* 4:00 PM */}
                <motion.div variants={itemVariants} className="flex flex-col justify-center items-center w-50">
                    <div
                        className="bg-amber-100 w-[200px] h-[200px] my-2"
                        style={{
                            WebkitMaskImage: `url(${CocktailIcon})`,
                            maskImage: `url(${CocktailIcon})`,
                            maskSize: 'contain',
                            maskRepeat: 'no-repeat',
                            maskPosition: 'center'
                        }}
                    />
                    <p className='text-2xl'>4:00 PM</p>
                    <p className='text-[2.2rem] font-[Kapakana] -mt-1'>Cocktail Hour</p>
                </motion.div>

                {/* 5:00 PM */}
                <motion.div variants={itemVariants} className="flex flex-col justify-center items-center w-60">
                    <div
                        className="bg-amber-100 w-[200px] h-[200px] my-2"
                        style={{
                            WebkitMaskImage: `url(${ReceptionIcon})`,
                            maskImage: `url(${ReceptionIcon})`,
                            maskSize: 'contain',
                            maskRepeat: 'no-repeat',
                            maskPosition: 'center'
                        }}
                    />
                    <p className='text-2xl'>5:00 PM</p>
                    <p className='text-[2.2rem] font-[Kapakana] -mt-1'>Dinner & Speeches</p>
                </motion.div>

                {/* 10:00 PM */}
                <motion.div variants={itemVariants} className="flex flex-col justify-center items-center w-50">
                    <div
                        className="bg-amber-100 w-[200px] h-[200px] my-2"
                        style={{
                            WebkitMaskImage: `url(${PartyIcon})`,
                            maskImage: `url(${PartyIcon})`,
                            maskSize: 'contain',
                            maskRepeat: 'no-repeat',
                            maskPosition: 'center'
                        }}
                    />
                    <p className='text-2xl'>8:00 PM</p>
                    <p className='text-[2.2rem] font-[Kapakana] -mt-1'>Party Time</p>
                </motion.div>
            </motion.div>
            
        </div>
    );
}