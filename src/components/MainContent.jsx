import MontsalvatImage from "../assets/montsalvat_background.jpg";

export default function MainContent() {
    return (
        <div className="h-full w-full flex flex-col items-center">
            <div 
                style={{
                    backgroundImage: `url(https://static.showit.co/2400/HQomN8EVqQuR7DyRn2_FKA/shared/storybook-couple-garden-walk-shauna-maxwell-photography.jpg)`
                }}
                className="p-8 relative max-w-full py-[15rem] w-full text-white max-w-3xl flex flex-col items-center bg-cover bg-center">
                    <h1 className="!text-[6rem] font-[Ballet] mb-6">Allana & Dylan</h1>
                    <p className="text-3xl mb-4 uppercase font-[EB_Garamond]">
                        Are getting married
                    </p>
                    <p className="bottom-0 absolute text-lg mb-4 uppercase font-[EB_Garamond]">
                        Montsalvat, ELtham  |  August 8, 2026
                    </p>
                    <p className="left-0 top-1/2 rotate-270 absolute uppercase font-[EB_Garamond]">
                        Till Death
                    </p>
                    <p className="right-0 top-1/2 rotate-90 absolute uppercase font-[EB_Garamond]">
                        Do us part
                    </p>
            </div>
            <div id="date" className="relative px-8 py-10 flex flex-col items-center max-w-full w-full max-w-3xl">

                <h2 className="text-2xl font-serif mt-8 mb-4">Date & Time</h2>
                <p className="text-lg mb-4">
                    Saturday, September 14th, 2024 at 4:00 PM
                </p>
            </div>
                <h2 className="text-2xl font-serif mt-8 mb-4">Location</h2>
                <p className="text-lg mb-4">
                    The Grand Estate, 1234 Wedding Lane, Cityville
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