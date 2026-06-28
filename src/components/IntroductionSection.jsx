import { motion } from "framer-motion";
import FloralCornerImage from "../assets/vintage_frame_2_05.png";
import ImageBorder from "../assets/vintage_frame_15.png";

export default function IntroductionSection() {
    // 1. Store the text for the typing effect
    const heading = "It's Finally happening";
    const p1 = "Together with our parents Kathy and Michael Davies and Lexie and Alan Smith, we invite you to celebrate our marriage. Here you will find all the information you need as we prepare to celebrate our wedding.";
    const p2 = "Thank you for being a part of our lives, and we can't wait to celebrate with you on our special day.";

    // 2. Set up the animation variants
    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: { 
                staggerChildren: 0.02, 
                delayChildren: 0.2, 
            }
        }
    };

    const charVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    // 3. Helper function to animate characters
    // 3. Helper function to animate characters while respecting word wrap
    const renderTyping = (text) => {
        // Split the text into words first
        return text.split(" ").map((word, wordIndex) => (
            // inline-block ensures a whole word stays together and wraps cleanly
            // mr-[0.25em] adds a natural-looking space between each word
            <span key={wordIndex} className="inline-block mr-[0.25em]">
                {word.split("").map((char, charIndex) => (
                    <motion.span key={charIndex} variants={charVariants}>
                        {char}
                    </motion.span>
                ))}
            </span>
        ));
    };

    return (
        <div className="relative paper-background justify-evenly px-8 py-[8rem] flex lg:flex-row flex-col-reverse items-center max-w-full w-full max-w-3xl">
            
            {/* Floral Corner Mask */}
            <div
                className="bg-amber-100 w-[15rem] lg:w-[20rem] opacity-80 h-[15rem] lg:h-[22rem] my-5 absolute -bottom-14 lg:-bottom-25 -left-10 lg:-left-15"
                style={{
                    WebkitMaskImage: `url(${FloralCornerImage})`,
                    maskImage: `url(${FloralCornerImage})`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat'
                }}
            />
            
            {/* Animated Text Section */}
            <motion.div 
                className="flex flex-col w-[16rem] lg:w-[20rem] mb-5 mt-[4rem] lg:mt-6 text-center lg:text-left"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible" // Triggers the animation when scrolled into view
                viewport={{ once: true, amount: 0.3 }} // Ensures it only types out once when 30% visible
            >
                <h2 className="text-3xl font-serif my-4 uppercase">
                    {renderTyping(heading)}
                </h2>
                <p className="text-lg mb-4 lg:mb-8 mt-4">
                    {renderTyping(p1)}
                    <br />
                    <br />
                    {renderTyping(p2)}
                </p>
            </motion.div>

            {/* Images and Borders Section */}
            <div className="w-[22rem] h-[20rem] relative lg:my-0 mb-16">
                <div
                    className="h-[27rem] w-[22rem] inset-0 m-auto absolute border border-amber-100 border-1 rounded-[50%]"
                    style={{
                        clipPath: 'ellipse(90% 46.75% at 50% 50%)',
                    }}
                />
                <div
                    className="h-[25rem] w-[20rem] inset-0 m-auto absolute"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(pic2.webp)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: '50%',
                    }}
                />
                <div
                    className="bg-amber-100 opacity-80 w-[12.75rem] h-[8rem] absolute -bottom-27 left-1/2 rotate-180 -translate-x-1/2"
                    style={{
                        WebkitMaskImage: `url(${ImageBorder})`,
                        maskImage: `url(${ImageBorder})`,
                        maskSize: 'contain',
                        maskRepeat: 'no-repeat'
                    }}
                />
                <div
                    className="bg-amber-100 opacity-80 w-[12.75rem] h-[8rem] absolute -top-27 left-1/2 -translate-x-1/2"
                    style={{
                        WebkitMaskImage: `url(${ImageBorder})`,
                        maskImage: `url(${ImageBorder})`,
                        maskSize: 'contain',
                        maskRepeat: 'no-repeat'
                    }}
                />
            </div>
        </div>
    );
}