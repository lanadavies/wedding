import HeroSection from "./HeroSection";
import IntroductionSection from "./IntroductionSection";
import ScheduleSection from "./ScheduleSection";
import DetailsSection from "./DetailsSection";
import RSVPSection from "./RSVPSection";
import CountdownSection from "./CountdownSection";
import ContactSection from "./ContactSection";

export default function MainContent() {
    return (
        <div className="h-full w-full flex flex-col items-center text-amber-100 font-[EB_Garamond]">
            <HeroSection />
            <IntroductionSection />
            <ScheduleSection />
            <DetailsSection />
            <RSVPSection />
            <CountdownSection />
            {/* <ContactSection /> */}
        </div>
    );
}
