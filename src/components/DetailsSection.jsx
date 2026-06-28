import VintageFloralCorner from "../assets/vintage_frame_set_10.png";
import Butterfly from "../assets/butterfly.png";
import Moth from "../assets/moth.png";
const details = [
	{
		title: "Arrival",
		content: "Please arrive by 2:30 PM to park and settle in before our 3:00 PM ceremony. Montsalvat offers ample on-site parking at the main entrance (7 Hillcrest Avenue, Eltham).",
	},
	{
		title: "Dress Code",
		content: "Black Tie Optional. \n Although the wedding is all in doors, we kindly recommend bringing a warm wrap or jacket to stay comfortable.",
	},
	{
		title: "Gifting",
		content: "Your presence is the greatest gift! Should you wish to honor us with a contribution, a wishing well will be available at the reception to help fund our future together.",
	},
	{
		title: "Children",
		content: "While we adore your little ones, our wedding will be an adults-only celebration. We hope this allows you to let your hair down and enjoy a relaxed evening!",
	},
	{
		title: "After Party",
		content: "Keep the celebration going from 10:00 PM at Bar Conexão, just 5 minutes away. We will be organizing transport from the venue for anyone wishing to join us.",
	},
];

export default function DetailsSection() {
	return (
		<div className='min-h-[38rem] w-full white-paper-background relative'>
			<div
				className="bg-[#552021] opacity-30 w-[20rem] h-[20rem] lg:w-[25rem] lg:h-[25rem] -bottom-6 -right-27 lg:-bottom-6 lg:-right-33 absolute rotate-270"
				style={{
					WebkitMaskImage: `url(${VintageFloralCorner})`,
					maskImage: `url(${VintageFloralCorner})`,
					maskSize: 'contain',
					maskRepeat: 'no-repeat'
				}}
			/>
			<div
				className="bg-[#552021] opacity-30 w-[20rem] h-[20rem] lg:w-[25rem] lg:h-[25rem] -top-6 -left-27 lg:-top-6 lg:-left-33 absolute rotate-90"
				style={{
					WebkitMaskImage: `url(${VintageFloralCorner})`,
					maskImage: `url(${VintageFloralCorner})`,
					maskSize: 'contain',
					maskRepeat: 'no-repeat'
				}}
			/>
			<div
				className="bg-[#552021] opacity-40 w-[6rem] h-[6rem] lg:w-[8rem] lg:h-[8rem] top-70 right-8 lg:top-30 lg:right-12 absolute rotate-25"
				style={{
					WebkitMaskImage: `url(${Moth})`,
					maskImage: `url(${Moth})`,
					maskSize: 'contain',
					maskRepeat: 'no-repeat'
				}}
			/>
			<div
				className="bg-[#552021] opacity-40 w-[5rem] h-[5rem] lg:w-[8rem] lg:h-[8rem] bottom-127 left-10 lg:top-118 lg:left-10 absolute -rotate-20"
				style={{
					WebkitMaskImage: `url(${Butterfly})`,
					maskImage: `url(${Butterfly})`,
					maskSize: 'contain',
					maskRepeat: 'no-repeat'
				}}
			/>
			<div className="grid lg:grid-cols-2 text-[#552021] tracking-wide grid-cols-1 gap-4 text-center lg:mx-[10rem] mt-[5rem] mb-[7rem] px-10 lg:px-12 text-[#2a1d0f]">
				{details.map((item) => (
					<div key={item.title} className="p-6 flex flex-col items-center justify-center">
						<h3 className="text-[1.8rem] mb-3 uppercase font-medium">{item.title}</h3>
						<p className=" leading-6 whitespace-pre-line font-medium text-[1rem] !text[#2a1d0f] ">{item.content}</p>
					</div>
				))}
			</div>
		</div>
	);
}
