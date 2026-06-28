import VintageFloralCorner from "../assets/vintage_frame_set_10.png";
const details = [
	{
		title: "Arriving at Montsalvat",
		content: "Please arrive by 2:30 PM to park and settle in before our 3:00 PM ceremony. Montsalvat offers ample on-site parking, at the main entrance (7 Hillcrest Avenue, Eltham).",
	},
    {
        title: "Dress Code",
        content: "Black Tie Optional. \n As the evening air can be quite crisp, we kindly recommend bringing a warm wrap or jacket to stay comfortable.",
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
		<div className='min-h-[40rem] w-full white-paper-background relative'>
			<div
				className="bg-[#552021] opacity-50 w-[20rem] h-[20rem] lg:w-[25rem] lg:h-[25rem] -bottom-6 -right-27 lg:-bottom-6 lg:-right-33 absolute rotate-270"
				style={{
					WebkitMaskImage: `url(${VintageFloralCorner})`,
					maskImage: `url(${VintageFloralCorner})`,
					maskSize: 'contain',
					maskRepeat: 'no-repeat'
				}}
			/>
			<div
				className="bg-[#552021] opacity-50 w-[20rem] h-[20rem] lg:w-[25rem] lg:h-[25rem] -top-6 -left-27 lg:-top-6 lg:-left-33 absolute rotate-90"
				style={{
					WebkitMaskImage: `url(${VintageFloralCorner})`,
					maskImage: `url(${VintageFloralCorner})`,
					maskSize: 'contain',
					maskRepeat: 'no-repeat'
				}}
			/>

			<div className="grid text-[#552021] lg:grid-cols-2 grid-cols-1 gap-4 text-center lg:mx-[10rem] my-[7rem] px-10 lg:px-12 text-[#2a1d0f]">
				{details.map((item) => (
					<div key={item.title} className=" p-6 flex flex-col items-center justify-center">
						<h3 className="mb-4 text-[2.5rem] font-[Kapakana] font-medium">{item.title}</h3>
						<p className=" leading-6">{item.content}</p>
					</div>
				))}
			</div>
		</div>
	);
}
