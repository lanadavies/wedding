import { motion } from "framer-motion";
import { useState } from "react";
import Monogram from "./Monogram";

// Assuming these are placed in your assets folder
import EnvelopeBackImg from "../assets/envelope_back.png";
import EnvelopeTopFlapImg from "../assets/envelope_top.png";
import EnvelopeBottomFlapImg from "../assets/envelope_flap.png";
import PaperImg from "../assets/paper.jpg";
import WaxStampImg from "../assets/wax_seal.png";


export default function Envelope({ onComplete }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={`mx-auto px-10 text-center pt-4 lg:pt-0 font-[Kapakana] text-amber-100 text-[4rem] lg:text-[3rem]`}>You're invited</div>
      <div className="relative w-72 h-50 sm:w-96 sm:h-64 cursor-pointer group" onClick={() => setOpen(true)}>
        
        {/* 1. Back Plate (Deepest layer) */}
        <img 
          src={EnvelopeBackImg} 
          alt="Envelope back" 
          className="absolute inset-0 w-full h-full object-contain drop-shadow-xl z-0" 
        />

        {/* 3. Bottom & Side Flaps (Static front pocket) */}
        <img 
          src={EnvelopeBottomFlapImg} 
          alt="Envelope front" 
          className="absolute inset-0 w-full h-full object-contain z-30 pointer-events-none" 
        />

        {/* 4. Top Flap */}
        <motion.img
          src={EnvelopeTopFlapImg}
          alt="Envelope top flap"
          className="absolute left-0 right-0 w-full object-contain drop-shadow-md"
          style={{ 
            top: "14px", 
            transformOrigin: "50% 0%" 
          }} 
          initial={{ rotateX: 0, zIndex: 40 }}
          // THE FIX: transitionEnd guarantees zIndex doesn't change until the rotation is 100% complete
          animate={
            open 
              ? { rotateX: 180, transitionEnd: { zIndex: 10 } } 
              : { rotateX: 0, zIndex: 40 }
          }
          onAnimationComplete={() => open && onComplete()}
          transition={{ 
            duration: 0.6, 
            ease: "easeInOut" 
          }}
        />

        {/* 5. Wax Seal */}
        {!open && (
          <motion.div 
            className="absolute left-1/2 top-35 sm:top-45 -translate-x-1/2 -translate-y-1/2 z-50 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            <img 
              src={WaxStampImg} 
              alt="Wax seal" 
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-xl" 
            />
          </motion.div>
        )}
      </div>
      <div className={`mx-auto px-10 text-center pt-4 lg:pt-0 font-[EB_Garamond] text-amber-100 text-2xl lg:text-lg uppercase`}>Click the envelope to open</div>
    </>

  );
}