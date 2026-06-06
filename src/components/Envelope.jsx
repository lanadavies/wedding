import { motion } from "framer-motion";
import { useState } from "react";
import Monogram from "./Monogram";

// Assuming these are placed in your assets folder
import EnvelopeBackImg from "../assets/envelope_back.png";
import EnvelopeTopFlapImg from "../assets/envelope_top.png";
import EnvelopeBottomFlapImg from "../assets/envelope_flap.png";
import PaperImg from "../assets/paper.jpg";
import WaxStampImg from "../assets/wax_stamp.png";

export default function Envelope({ onComplete }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-72 h-50 sm:w-96 sm:h-64 cursor-pointer group" onClick={() => setOpen(true)}>
      
      {/* 1. Back Plate (Deepest layer) */}
      <img 
        src={EnvelopeBackImg} 
        alt="Envelope back" 
        className="absolute inset-0 w-full h-full object-contain drop-shadow-xl z-0" 
      />

      {/* 2. The Invitation Card (Paper) */}
      <motion.div
        initial={{ y: 0 }}
        animate={open ? { y: -160 } : { y: 0 }} 
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        onAnimationComplete={() => open && setTimeout(onComplete, 600)}
        className="absolute inset-x-4 top-4 bottom-4 z-20 flex flex-col items-center justify-center overflow-hidden rounded-sm"
      >
        <img 
          src={PaperImg} 
          alt="Paper texture" 
          className="absolute inset-0 w-full h-full object-cover -z-10" 
        />
        <div className="z-10 flex flex-col items-center justify-center relative drop-shadow-sm">
          <span className="font-serif text-stone-500 italic">You're invited!</span>
          <h2 className="text-2xl font-serif text-stone-800">A + D</h2>
        </div>
      </motion.div>

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
        transition={{ 
          duration: 0.6, 
          ease: "easeInOut" 
        }}
      />

      {/* 5. Wax Seal */}
      {!open && (
        <motion.div 
          className="absolute left-1/2 top-30 -translate-x-1/2 -translate-y-1/2 z-50 flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          exit={{ opacity: 0, scale: 0.5 }}
        >
          <img 
            src={WaxStampImg} 
            alt="Wax seal" 
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-xl" 
          />
          
          <div className="absolute flex items-center justify-center pointer-events-none opacity-80 mix-blend-overlay">
            <Monogram size="100px" oval={false} />
          </div>
        </motion.div>
      )}
    </div>
  );
}