import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import EnvelopeTopFlap from "../assets/envelope_top_flap_burgandy.png";
import EnvelopeFlap from "../assets/envelope_flap_burgandy.png";
import Bow from "../assets/bow.png";
import Tape from "../assets/scotch.png";
import Flower from "../assets/flower.png";

export default function RSVPSection() {
    return (
        <div
            className='h-[25rem] w-full grid place-items-center relative'
        >
			<img src={Flower} className="absolute w-[6rem] left-0 lg:left-110 top-30 object-contain pointer-events-none -rotate-15" />
            <img src={Tape} className="absolute w-[6rem] left-0 lg:left-110 top-55 object-contain z-5 pointer-events-none -rotate-10" />
            <Link to="/rsvp" aria-label="RSVP">
                <motion.div className="text-amber-100 h-[11rem] w-[21rem] relative" whileHover={{ scale: 1.05 }}>
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
                    <img
                        src={Bow}
                        alt="Bow"
                        className="absolute w-[6rem] left-0 right-0 m-auto top-28 object-contain z-15 pointer-events-none"
                    />
                    <div className="text-xl absolute left-0 right-0 text-center m-auto w-[12rem] h-[8rem] flex flex-col justify-center items-center z-20">
                        <p className="mr-2 pb-1 font-[Kapakana] text-[2.2rem] -mb-6 pr-[2rem]">Click me</p>
                        <p className="text-[1.4rem] pl-[2rem]">to RSVP</p>
                    </div>
                </motion.div>
            </Link>
        </div>
    );
}
