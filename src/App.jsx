import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Modern import
import Envelope from './components/Envelope';
import MainContent from "./components/MainContent";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Background from "./assets/renaissance_background.jpg";

export default function App() {
	const [isZoomed, setIsZoomed] = useState(false);

	return (
		<div className="relative h-screen overflow-y-auto w-full paper-background">
			<AnimatePresence>
				{!isZoomed ? (
					<motion.div
						key="envelope-view"
						exit={{ scale: 4, opacity: 0, filter: "blur(20px)" }}
						transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
						className="flex flex-col pt-10 h-full items-center justify-center"
						style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${Background})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
					>
						<Envelope onComplete={() => setIsZoomed(true)} />
					</motion.div>
				) : (
					<motion.div
						key="content-view"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className="min-h-screen w-full overflow-y-auto"
					>
						<NavBar />
						<MainContent />
						<Footer />
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
