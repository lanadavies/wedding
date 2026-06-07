import MontsalvatImage from "../assets/montsalvat_background.jpg";
import FloralCornerImage from "../assets/vintage_frame_2_05.png";
import ImageBorder from "../assets/vintage_frame_15.png";
import VintageFrameBorder from "../assets/vintage_frame_set_16.png";
import RenaissanceBackground from "../assets/renaissance_background_2.jpg";

export default function MainContent() {
    return (
        <div className="h-full w-full flex flex-col items-center text-amber-100 font-[EB_Garamond]">
            <div 
                style={{
                    backgroundImage: `url(https://static.showit.co/2400/HQomN8EVqQuR7DyRn2_FKA/shared/storybook-couple-garden-walk-shauna-maxwell-photography.jpg)`
                }}
                className="p-8 lg:mx-[3rem] relative py-[15rem] w-full lg:w-[calc(100%-3rem)] flex flex-col items-center bg-cover bg-center">
                    <p className="lg:text-[4rem] mx-6 text-center text-[5rem] font-[Ballet] mb-6">Allana & Dylan</p>
                    <p className="lg:text-3xl text-2xl mb-4 uppercase font-[EB_Garamond]">
                        Are getting married
                    </p>
                    <p className="bottom-0 absolute lg:text-lg text-md mb-4 uppercase">
                        Montsalvat, ELtham  |  August 8, 2026
                    </p>
                    <p className="-left-5 lg:-left-3 top-1/2 rotate-270 absolute uppercase ">
                        Till Death
                    </p>
                    <p className="-right-5 lg:-right-3 top-1/2 rotate-90 absolute uppercase">
                        Do us part
                    </p>
            </div>
            <div className="relative justify-evenly px-8 py-[8rem] flex lg:flex-row flex-col-reverse items-center max-w-full w-full max-w-3xl">
                <div className="bg-amber-100 w-[15rem] lg:w-[20rem] opacity-80 h-[15rem] lg:h-[20rem] my-5 absolute -bottom-14 lg:-bottom-17 -left-10 lg:-left-15"
                    style={{
                        WebkitMaskImage: `url(${FloralCornerImage})`,
                        maskImage: `url(${FloralCornerImage})`,
                        maskSize: 'contain',
                        maskRepeat: 'no-repeat'
                    }}
                 />
                <div className="flex flex-col w-[16rem] lg:w-[20rem] mb-5 mt-[4rem] lg:mt-6 text-center lg:text-left">   
                    <h2 className="text-3xl font-serif my-4 uppercase">It's Finally happening</h2>
                    <p className="text-lg mb-4 lg:mb-8 mt-4">
                        We are delighted to welcome you to our wedding website. Here you will find all the information you need as we prepare to celebrate our marrige.
                        <br />
                        Thank you for being a part of our lives, and we can't wait to celebrate with you on our special day.
                    </p>
                </div>
                <div className="w-[22rem] relative lg:my-0 mb-16">
                    <div className="h-[27rem] w-[22rem] inset-0 m-auto absolute border border-amber-100 border-1 rounded-[50%]"
                        style={{
                            clipPath: 'ellipse(90% 46.5% at 50% 50%)',
                        }}
                    >
                    </div>
                    <div className="h-[25rem] w-[20rem] inset-0 m-auto absolute"
                        style={{
                            backgroundImage: `url(https://static.showit.co/1200/s8_Vdu2LHYCuGn40EVsoPQ/334279/wedding-couple-with-flowers.jpg)`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            borderRadius: '50%',
                        }}
                        >
                    </div>
                    <div className="bg-amber-100 opacity-80 w-[15rem] h-[10rem] absolute top-53 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-180"
                        style={{
                            WebkitMaskImage: `url(${ImageBorder})`,
                            maskImage: `url(${ImageBorder})`,
                            maskSize: 'contain',
                            maskRepeat: 'no-repeat'
                        }}
                    />
                    <div className="bg-amber-100 opacity-80 w-[15rem] h-[10rem] absolute bottom-13 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        style={{
                            WebkitMaskImage: `url(${ImageBorder})`,
                            maskImage: `url(${ImageBorder})`,
                            maskSize: 'contain',
                            maskRepeat: 'no-repeat'
                        }}
                    />

                </div>
            </div>
            <div className="relative flex-col px-8 py-[8rem] flex items-center max-w-full w-full max-w-3xl"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${RenaissanceBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <p className="text-[3rem] font-[Kapakana] h-8">
                    The
                </p>
                <p className="text-[3rem] mb-2">
                    Program
                </p>
                <div className="flex justiry-center items-center xt-lg my-4">
                    <div className="mx-2 flex flex-col justify-center items-center">
                        3:00 PM - Ceremony
                        <div className="bg-amber-100 opacity-80 w-[12rem] h-[12rem]"
                            style={{
                                WebkitMaskImage: `url(${VintageFrameBorder})`,
                                maskImage: `url(${VintageFrameBorder})`,
                                maskSize: 'contain',
                                maskRepeat: 'no-repeat'
                            }}
                        />
                    </div>
                    <div className="mx-2 flex flex-col justify-center items-center">4:00 PM - Cocktail Hour
                        <div className="bg-amber-100 opacity-80 w-[12rem] h-[12rem]"
                            style={{
                                WebkitMaskImage: `url(${VintageFrameBorder})`,
                                maskImage: `url(${VintageFrameBorder})`,
                                maskSize: 'contain',
                                maskRepeat: 'no-repeat'
                            }}
                        />
                    </div>
                    <div className="mx-2 flex flex-col justify-center items-center">5:00 PM - Dinner & Dancing
                            <div className="bg-amber-100 opacity-80 w-[12rem] h-[12rem]"
                            style={{
                                WebkitMaskImage: `url(${VintageFrameBorder})`,
                                maskImage: `url(${VintageFrameBorder})`,
                                maskSize: 'contain',
                                maskRepeat: 'no-repeat'
                            }}
                        />
                    </div>
                    <div className="mx-2 flex flex-col justify-center items-center">10:00 PM - After Party
                        <div className="bg-amber-100 opacity-80 w-[12rem] h-[12rem]"
                            style={{
                                WebkitMaskImage: `url(${VintageFrameBorder})`,
                                maskImage: `url(${VintageFrameBorder})`,
                                maskSize: 'contain',
                                maskRepeat: 'no-repeat'
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}