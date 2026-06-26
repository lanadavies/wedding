import VintageFloralCorner from "../assets/vintage_frame_set_10.png";
import LaceFrame from "../assets/lace_frame.png";

const details = [
	{
		title: "Dress Code",
		content: "Black Tie Optional. \n Please keep in mind that it may be chilly, so we recommend bringing a wrap or jacket.",
	},
	{
		title: "Gifting",
		content: "We are so lucky to already have everything we need for our home! If you would like to give a gift, a wishing well will be available on the night to help us build our future together.",
	},
	{
		title: "Children",
		content: "Although we love our little ones, our celebration is adults only. We hope you can arrange babysitting.",
	},
	{
		title: "Arriving at Montsalvat",
		content: "Please arrive at 2:30pm to allow time for parking and settling in before the ceremony begins at 3:00pm. On-site parking is available at Montsalvat. The closest train station is Eltham.",
	},
	{
		title: "After Party",
		content: "Party on from 10:00 PM onward at Bar Conexão (5 minutes from Montsalvat). We will arrange transport for those who would like to attend.",
	},
];

export default function DetailsSection() {
	return (
		<div className='min-h-[40rem] w-full white-paper-background relative'>
			<div className="grid w-full text-[#552021] place-items-center mt-[5rem] lg:mt-8">
				<span className="text-[4.5rem] lg:text-[5.5rem] font-[Kapakana] h-15 lg:h-17 w-fit mr-[4rem] lg:mr-[10rem]">
					Details
				</span>
				<span className="text-[2.0rem] lg:text-[2.5rem] mb-2 w-fit ml-[4rem] lg:ml-[10rem]">
					you should know
				</span>
			</div>
			<div
				className="bg-[#552021] opacity-40 w-[20rem] h-[20rem] lg:w-[25rem] lg:h-[25rem] -bottom-6 -right-27 lg:-bottom-6 lg:-right-33 absolute rotate-270"
				style={{
					WebkitMaskImage: `url(${VintageFloralCorner})`,
					maskImage: `url(${VintageFloralCorner})`,
					maskSize: 'contain',
					maskRepeat: 'no-repeat'
				}}
			/>
			<div
				className="bg-[#552021] opacity-40 w-[20rem] h-[20rem] lg:w-[25rem] lg:h-[25rem] -top-6 -left-27 lg:-top-6 lg:-left-33 absolute rotate-90"
				style={{
					WebkitMaskImage: `url(${VintageFloralCorner})`,
					maskImage: `url(${VintageFloralCorner})`,
					maskSize: 'contain',
					maskRepeat: 'no-repeat'
				}}
			/>

			<div className="grid lg:grid-cols-2 grid-cols-1 gap-4 text-center lg:mx-[10rem] mt-[3rem] mb-[7rem] px-10 lg:px-12 text-[#2a1d0f]">
				{details.map((item) => (
					<div key={item.title} className=" p-6 flex flex-col items-center justify-center">
						<h3 className="mb-4 text-xl uppercase tracking-[0.18em] font-medium">{item.title}</h3>
						<p className=" leading-6">{item.content}</p>
					</div>
				))}
			</div>
		</div>
	);
}
