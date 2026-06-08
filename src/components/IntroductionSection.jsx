import FloralCornerImage from "../assets/vintage_frame_2_05.png";
import ImageBorder from "../assets/vintage_frame_15.png";

export default function IntroductionSection() {
    return (
        <div className="relative justify-evenly px-8 py-[8rem] flex lg:flex-row flex-col-reverse items-center max-w-full w-full max-w-3xl">
            <div
                className="bg-amber-100 w-[15rem] lg:w-[20rem] opacity-80 h-[15rem] lg:h-[22rem] my-5 absolute -bottom-14 lg:-bottom-25 -left-10 lg:-left-15"
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
            <div className="w-[22rem] h-[20rem] relative lg:my-0 mb-16">
                <div
                    className="h-[27rem] w-[22rem] inset-0 m-auto absolute border border-amber-100 border-1 rounded-[50%]"
                    style={{
                        clipPath: 'ellipse(90% 46.75% at 50% 50%)',
                    }}
                />
                <div
                    className="h-[25rem] w-[20rem] inset-0 m-auto absolute"
                    style={{
                        backgroundImage: `url(https://static.showit.co/1200/s8_Vdu2LHYCuGn40EVsoPQ/334279/wedding-couple-with-flowers.jpg)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: '50%',
                    }}
                />
                <div
                    className="bg-amber-100 opacity-80 w-[12.75rem] h-[8rem] absolute -bottom-27 left-1/2 rotate-180 -translate-x-1/2"
                    style={{
                        WebkitMaskImage: `url(${ImageBorder})`,
                        maskImage: `url(${ImageBorder})`,
                        maskSize: 'contain',
                        maskRepeat: 'no-repeat'
                    }}
                />
                <div
                    className="bg-amber-100 opacity-80 w-[12.75rem] h-[8rem] absolute -top-27 left-1/2 -translate-x-1/2"
                    style={{
                        WebkitMaskImage: `url(${ImageBorder})`,
                        maskImage: `url(${ImageBorder})`,
                        maskSize: 'contain',
                        maskRepeat: 'no-repeat'
                    }}
                />
            </div>
        </div>
    );
}
