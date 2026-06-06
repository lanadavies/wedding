import MontsalvatImage from "../assets/montsalvat_background.jpg";

export default function MainContent() {
    return (
        <div className="h-full w-full flex flex-col items-center">
            <div 
                style={{
                    backgroundImage: `url(${MontsalvatImage})`
                }}
                className="p-8 max-w-full py-[15rem] w-full text-white max-w-3xl flex flex-col items-center bg-cover bg-center">
                <h1 className="text-4xl font-serif mb-6">Welcome to Our Wedding</h1>
                <p className="text-lg mb-4">
                    We are so excited to share this special day with you! Below you'll find all the details about our wedding, including the date, location, and schedule of events.
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