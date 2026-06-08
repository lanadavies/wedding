import VintageFloralCorner from "../assets/vintage_frame_set_10.png";
import LaceFrame from "../assets/lace_frame.png";

export default function DetailsSection() {
	return (
		<div className='min-h-[40rem] w-full white-paper-background relative'>
			<div className="grid w-full place-items-center mt-[10rem] lg:mt-8">
				<span className="text-[4rem] lg:text-[5.5rem] text-red-900 font-[Kapakana] h-15 lg:h-17 w-fit mr-[4rem] lg:mr-[10rem]">
					Details
				</span>
				<span className="text-[2.0rem] lg:text-[2.5rem] text-red-900 mb-2 w-fit ml-[3rem] lg:ml-[10rem]">
					you should know
				</span>
			</div>
			<div
				className="bg-red-900 opacity-40 w-[20rem] h-[20rem] lg:w-[25rem] lg:h-[25rem] -bottom-6 -right-27 lg:-bottom-6 lg:-right-33 absolute rotate-270"
				style={{
					WebkitMaskImage: `url(${VintageFloralCorner})`,
					maskImage: `url(${VintageFloralCorner})`,
					maskSize: 'contain',
					maskRepeat: 'no-repeat'
				}}
			/>
			<div
				className="bg-red-900 opacity-40 w-[20rem] h-[20rem] lg:w-[25rem] lg:h-[25rem] -top-6 -left-27 lg:-top-6 lg:-left-33 absolute rotate-90"
				style={{
					WebkitMaskImage: `url(${VintageFloralCorner})`,
					maskImage: `url(${VintageFloralCorner})`,
					maskSize: 'contain',
					maskRepeat: 'no-repeat'
				}}
			/>
			<div className="flex text-red-900 justify-center items-center mt-12 gap-12 flex-col lg:flex-row">
				<div className="flex">
                    <div className="relative w-[30rem] h-[30rem]">
                        <div
                            className="bg-red-900 opacity-90 w-[235px] h-[330px] absolute pt-5 inset-0 m-auto rotate-90"
                            style={{
                                WebkitMaskImage: `url(${LaceFrame})`,
                                maskImage: `url(${LaceFrame})`,
                                maskSize: 'contain',
                                maskRepeat: 'no-repeat'
                            }}
                        ></div>
                        <div className="bg-red-900 rounded-[50%] w-[250px] h-[150px] absolute inset-0 m-auto">
                            Dress code
                        </div>
                    </div>
                </div>

				<div className="">
					Children
				</div>
				<div className="">
					Parking & Transport
				</div>
				<div className="">
					Location
				</div>
				<div className="">
					After Party
				</div>
			</div>
		</div>
	);
}
