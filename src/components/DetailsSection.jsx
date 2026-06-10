import VintageFloralCorner from "../assets/vintage_frame_set_10.png";
import LaceFrame from "../assets/lace_frame.png";

const details = [
	{
		title: "Dress Code",
		content: "Black Tie Optional. \n Please keep in mind that it may be chilly, so we recommend bringing a wrap or jacket",
	},
	{
		title: "Children",
		content: "Although we love our little ones, our celebration is adults only.",
	},
	{
		title: "Parking & Transport",
		content: "On-site parking is available at Montsalvat.",
	},
	{
		title: "When to arrive?",
		content: "Please arrive at 2:30pm to allow time for parking and settling in before the ceremony begins at 3:00pm.",
	},
	{
		title: "After Party",
		content: "Join us after dinner for late-night cocktails and snacks from 10:00 PM onward at Bar Conexão. We will arrange transport for those who would like to attend, so please let us know if you plan to join the after party when you RSVP.",
	},
];

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
			<div className="grid gap-6 text-center px-6 py-12 lg:grid-cols-5 xl:px-12 text-amber-50">
				{details.map((item) => (
					<div key={item.title} className="rounded-[10rem] border bg-red-950 p-6 backdrop-blur-xl shadow-xl flex flex-col items-center justify-center">
						<h3 className="mb-4 text-xl uppercase tracking-[0.18em] text-amber-100">{item.title}</h3>
						<p className="text-sm leading-6">{item.content}</p>
					</div>
				))}
			</div>
		</div>
	);
}
