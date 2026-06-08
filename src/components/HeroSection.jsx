export default function HeroSection() {
    return (
        <div
            style={{
                backgroundImage: `url(https://static.showit.co/2400/HQomN8EVqQuR7DyRn2_FKA/shared/storybook-couple-garden-walk-shauna-maxwell-photography.jpg)`
            }}
            className="p-8 lg:mx-[3rem] relative py-[15rem] w-full lg:w-[calc(100%-3rem)] flex flex-col items-center bg-cover bg-center"
        >
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
    );
}
