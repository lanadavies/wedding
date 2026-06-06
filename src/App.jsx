import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Modern import
import Envelope from './components/Envelope';
import MainContent from "./components/MainContent";

export default function App() {
	const [isZoomed, setIsZoomed] = useState(false);

	return (
		<div className="relative h-screen overflow-y-auto w-full bg-stone-200">
			<AnimatePresence>
				{!isZoomed ? (
					<motion.div
						key="envelope-view"
						exit={{ scale: 4, opacity: 0, filter: "blur(20px)" }}
						transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
						className="flex h-full items-center justify-center"
					>
						<Envelope onComplete={() => setIsZoomed(true)} />
					</motion.div>
				) : (
					<motion.div
						key="content-view"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className="h-screen w-full overflow-y-auto bg-white"
					>
						<MainContent />
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
