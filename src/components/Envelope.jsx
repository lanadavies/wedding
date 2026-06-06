import { motion } from "framer-motion";
import { useState } from "react";
import MontsalvatBackground from "../assets/montsalvat_background.jpg";

export default function Envelope({ onComplete }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-72 h-52 sm:w-96 sm:h-64 cursor-pointer group" onClick={() => setOpen(true)}>
      {/* Back Plate */}
      <div className="absolute inset-0 bg-white shadow-xl rounded-sm" />

      {/* The Invitation Card (reveals on click) */}
      <motion.div
        initial={{ y: 0 }}
        animate={open ? { y: -100 } : { y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        onAnimationComplete={() => open && setTimeout(onComplete, 800)}
        className="absolute inset-x-4 top-4 bottom-4 bg-[#fdfbf7] shadow-md z-10 flex flex-col items-center justify-center border border-stone-200"
      >
        <span className="font-serif text-stone-400 italic">Save the Date</span>
        <h2 className="text-2xl font-serif text-stone-800">A + D</h2>
      </motion.div>

      {/* Bottom & Side Flaps (Static) */}
      <div className="absolute inset-0 z-20" 
           style={{ background: "white", clipPath: "polygon(0% 0%, 50% 50%, 100% 0%, 100% 100%, 0% 100%)" }} />

      {/* Top Flap */}
      <motion.div
        className="absolute inset-0 z-30 origin-top shadow-lg"
        style={{ background: "#f3f3f3", clipPath: "polygon(0 0, 100% 0, 50% 50%)" }}
        animate={open ? { rotateX: 160, zIndex: 0 } : { rotateX: 0 }}
        transition={{ duration: 0.7 }}
      />

      {/* Wax Seal (The "Button") */}
      {!open && (
        <motion.div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40 w-12 h-12 bg-red-800 rounded-full shadow-lg flex items-center justify-center text-white font-serif text-xl border-2 border-red-900"
          whileHover={{ scale: 1.1 }}
          exit={{ opacity: 0, scale: 0.5 }}
        >
          AD
        </motion.div>
      )}
    </div>
  );
}