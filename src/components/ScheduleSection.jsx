import RenaissanceBackground2 from "../assets/renaissance_background_2.jpg";
import VintageFrameBorder from "../assets/vintage_frame_set_16.png";

export default function ScheduleSection() {
    return (
        <div
            className="relative flex-col px-8 py-[8rem] flex items-center max-w-full w-full max-w-3xl"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(https://bride-to-be-website-template.my.canva.site/moody-vintage-romance-wedding-website/_assets/media/f491fea3696d5597ccdbe025e549a5a6.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <p className="text-[3rem] font-[Kapakana] h-8">The</p>
            <p className="text-[3rem] mb-2">Program</p>
            <div
                className="bg-amber-100 opacity-80 w-[12rem] h-[6rem]"
                style={{
                    WebkitMaskImage: `url(${VintageFrameBorder})`,
                    maskImage: `url(${VintageFrameBorder})`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat'
                }}
            />
            <div className="flex justiry-center items-center xt-lg my-4 flex-col lg:flex-row">
                <div className="flex flex-col justify-center items-center w-50 h-30 border-b-2 lg:border-b-0 lg:border-r-2 border-dotted">
                    <p className='text-2xl'>3:00 PM</p>
                    <p className='uppercase'>Ceremony</p>
                </div>

                <div className="flex flex-col justify-center items-center w-50 h-30 border-b-2 lg:border-b-0 lg:border-r-2 border-dotted">
                    <p className='text-2xl'>4:00 PM</p>
                    <p className='uppercase'>Cocktail Hour</p>
                </div>

                <div className="flex flex-col justify-center items-center w-50 h-30 border-b-2 lg:border-b-0 lg:border-r-2 border-dotted">
                    <p className='text-2xl'>5:00 PM</p>
                    <p className='uppercase'>Reception</p>
                </div>

                <div className="flex flex-col justify-center items-center w-50 h-30">
                    <p className='text-2xl'>10:00 PM</p>
                    <p className='uppercase'>After Party</p>
                </div>
            </div>
        </div>
    );
}
