import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Routes, Route, useNavigate } from "react-router-dom";
import Envelope from './components/Envelope';
import MainContent from "./components/MainContent";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import RSVP from "./components/RSVP";
import Background from "./assets/renaissance_background.jpg";

// 1. The Landing Page with the Envelope
function EnvelopeLanding() {
    const [isOpened, setIsOpened] = useState(false);
    const navigate = useNavigate();

    const handleEnvelopeComplete = () => {
        // Trigger the exit animation
        setIsOpened(true);
        
        // Wait for the 1.2s exit animation to finish before changing the URL
        setTimeout(() => {
            navigate("/invitation");
        }, 1200);
    };

    return (
        <AnimatePresence>
            {!isOpened && (
                <motion.div
                    key="envelope-view"
                    exit={{ scale: 4, opacity: 0, filter: "blur(20px)" }}
                    transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
                    className="flex flex-col pt-10 h-[100vh] items-center justify-center"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${Background})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <Envelope onComplete={handleEnvelopeComplete} />
                </motion.div>
            )}
        </AnimatePresence>
    );
}

// 2. The Main Invitation Content Page
function InvitationDetails() {
    return (
        <motion.div
            key="content-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen w-full overflow-y-auto overflow-x-hidden"
        >
            <NavBar />
            <MainContent />
            <Footer />
        </motion.div>
    );
}

// 3. Main App Component with updated Routes
export default function App() {
    return (
        <div className="relative min-h-screen overflow-y-auto w-full paper-background">
            <Routes>
                {/* Envelope opens here */}
                <Route path="/" element={<EnvelopeLanding />} />
                
                {/* Main content lives here, so refreshing won't show the envelope */}
                <Route path="/invitation" element={<InvitationDetails />} />
                
                {/* RSVP Page works on direct load or refresh */}
                <Route
                    path="/rsvp"
                    element={
                        <>
                            <NavBar />
                            <RSVP />
                            <Footer />
                        </>
                    }
                />
            </Routes>
        </div>
    );
}