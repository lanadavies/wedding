import MontsalvatImage from "../assets/montsalvat_background.jpg";
import FloralCornerImage from "../assets/vintage_frame_2_05.png";
import ImageBorder from "../assets/vintage_frame_15.png";

export default function MainContent() {
    return (
        <div className="h-full w-full flex flex-col items-center text-amber-100 font-[EB_Garamond]">
            <div 
                style={{
                    backgroundImage: `url(https://static.showit.co/2400/HQomN8EVqQuR7DyRn2_FKA/shared/storybook-couple-garden-walk-shauna-maxwell-photography.jpg)`
                }}
                className="p-8 relative max-w-full py-[15rem] w-full max-w-3xl flex flex-col items-center bg-cover bg-center">
                    <h1 className="!text-[6rem] font-[Ballet] mb-6">Allana & Dylan</h1>
                    <p className="text-3xl mb-4 uppercase font-[EB_Garamond]">
                        Are getting married
                    </p>
                    <p className="bottom-0 absolute text-lg mb-4 uppercase">
                        Montsalvat, ELtham  |  August 8, 2026
                    </p>
                    <p className="left-0 top-1/2 rotate-270 absolute uppercase ">
                        Till Death
                    </p>
                    <p className="right-0 top-1/2 rotate-90 absolute uppercase">
                        Do us part
                    </p>
            </div>
            <div className="relative paper-background justify-evenly px-8 py-[8rem] flex items-center max-w-full w-full max-w-3xl">
                <div className="bg-amber-100 w-[20rem] opacity-80 h-[20rem] absolute -bottom-10 -left-15"
                    style={{
                        WebkitMaskImage: `url(${FloralCornerImage})`,
                        maskImage: `url(${FloralCornerImage})`,
                        maskSize: 'contain',
                        maskRepeat: 'no-repeat'
                    }}
                 />
                <div className="flex flex-col w-[20rem]">   
                    <h2 className="text-3xl font-serif my-4 uppercase">Lorem ipsum dolor sit amet</h2>
                    <p className="text-lg mb-8 mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div className="w-[20rem] relative">
                    <div className="h-[25rem] w-[20rem] rounded-full inset-0 m-auto"
                        style={{
                            backgroundImage: `url(https://static.showit.co/1200/s8_Vdu2LHYCuGn40EVsoPQ/334279/wedding-couple-with-flowers.jpg)`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            borderRadius: '50%',
                        }}
                        >
                        <div className="bg-amber-100 opacity-80 w-[15rem] h-[10rem] absolute top-105 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-180"
                            style={{
                                WebkitMaskImage: `url(${ImageBorder})`,
                                maskImage: `url(${ImageBorder})`,
                                maskSize: 'contain',
                                maskRepeat: 'no-repeat'
                            }}
                        />
                        <div className="bg-amber-100 opacity-80 w-[15rem] h-[10rem] absolute bottom-65 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            style={{
                                WebkitMaskImage: `url(${ImageBorder})`,
                                maskImage: `url(${ImageBorder})`,
                                maskSize: 'contain',
                                maskRepeat: 'no-repeat'
                            }}
                        />
                    </div>
                </div>
            </div>
                <p className="!text-lg font-[Ballet]">
                    The
                </p>
                <p className="!text-lg">
                    Program
                </p>
                <h2 className="text-2xl font-serif mt-8 mb-4">Schedule of Events</h2>
                <ul className="list-disc list-inside text-lg mb-4">
                    <li>4:00 PM - Ceremony</li>
                    <li>5:30 PM - Cocktail Hour</li>
                    <li>7:00 PM - Dinner & Dancing</li>
                </ul>
                <p className="text-lgmt-8">
                    We can't wait to celebrate with you!
                </p>
        </div>
    );
}