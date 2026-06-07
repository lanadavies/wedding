import Monogram from "./Monogram";
import Decor from "../assets/vintage_frame_18_half.png";


export default function NavBar() {
    return (
        <nav className="w-full paper-background h-16 flex justify-center items-center">
            <div className="bg-amber-100 w-[2rem] h-[1rem] -mr-3"
                style={{
                    WebkitMaskImage: `url(${Decor})`,
                    maskImage: `url(${Decor})`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat'
                }}
            />
            <Monogram size="100px" />
            <div className="bg-amber-100 w-[2rem] h-[1rem] -ml-3"
                style={{
                    WebkitMaskImage: `url(${Decor})`,
                    maskImage: `url(${Decor})`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    transform: 'scaleX(-1)'
                }}
            />
        </nav>
    );
}