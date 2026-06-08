import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import EnvelopeTopFlap from "../assets/envelope_top_flap_burgandy.png";
import EnvelopeFlap from "../assets/envelope_flap_burgandy.png";

export default function RSVPSection() {
    return (
        <div
            className='h-[25rem] w-full grid place-items-center'
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(https://static.showit.co/2400/HQomN8EVqQuR7DyRn2_FKA/shared/storybook-couple-garden-walk-shauna-maxwell-photography.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Link to="/rsvp" aria-label="RSVP">
                <motion.div className="text-amber-100 h-[13rem] w-[21rem] relative" whileHover={{ scale: 1.05 }}>
                    <img
                        src={EnvelopeTopFlap}
                        alt="Envelope back"
                        className="absolute left-1/2 w-[20rem] -translate-x-1/2 object-contain drop-shadow-2xl z-10"
                        style={{
                            filter: 'hue-rotate(-10deg) sepia(0.3) saturate(2.0) brightness(0.8)',
                        }}
                    />
                    <img
                        src={EnvelopeFlap}
                        alt="Envelope front"
                        className="absolute w-[21rem] top-0 object-contain z-5 pointer-events-none"
                        style={{
                            filter: 'hue-rotate(-10deg) sepia(0.3) saturate(2.0) brightness(0.8)',
                        }}
                    />
                    <div className="text-xl absolute left-0 right-0 text-center m-auto w-[12rem] h-[8rem] flex justify-center items-center z-20">
                        <p className="mr-2 pb-1 font-[Kapakana] text-[1.6rem] w-full">Click me</p>
                        <p className="text-[1.2rem] w-full">to RSVP</p>
                    </div>
                </motion.div>
            </Link>
        </div>
    );
}
