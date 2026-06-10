import Monogram from "./Monogram";
import Frame from "../assets/vintage_frame_set_2_02.png";

export default function Footer() {
    return (
        <footer className="w-full h-25 flex justify-center items-center relative">
            <div
                className="bg-amber-100 w-[10rem] h-[7rem] absolute -top-6"
                style={{
                    WebkitMaskImage: `url(${Frame})`,
                    maskImage: `url(${Frame})`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat'
                }}
            />
            <div>
                <Monogram size="6rem" />
            </div>
        </footer>
    );
}