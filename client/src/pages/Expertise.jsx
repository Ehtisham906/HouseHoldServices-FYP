import { useState, useEffect } from "react";

// images
import HeroImg from "../assets/images/expertisePageHeroImg.webp";
import subtractImg from "../assets/images/Subtract.webp";
import DocumentLocalization from "../assets/images/AI/Designers.webp"
import AudioVisualLocalization from "../assets/images/AI/AudioVisualLocalization.webp"
import Counsulting from "../assets/images/AI/Counsulting.webp"
import feedback from "../assets/images/AI/feedback.webp"
import fastTrunarounds from "../assets/images/AI/fastTurnarounds.webp"

// components
import OurExpertise from "../components/OurExpertiseComponent";

export default function Expertise() {
    // for headings
    const headings = [
        <h1 className="text-center">Industry-Specific <br /> Localization</h1>,
        "Document Localization",
        <h1 className="text-center">Audiovisual Content <br /> Localization</h1>,
        <h1 className="text-center">Process and <br /> Expertise</h1>,
        "Technological Integration",
        <h1 className="text-center">Business Expansion <br /> Goals</h1>
    ];
    const [activeHeading, setActiveHeading] = useState(2);
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveHeading((prev) => (prev + 1) % headings.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    // for waht we offer section
    const [currentIndex, setCurrentIndex] = useState(0);

    const divs = [
        <div key="1" className="w-full h-full p-4 rounded-xl flex flex-col items-center justify-center border shadow-[0_10px_22px_rgba(29,_78,_216,_0.4)]">
            <h1 className="text-4xl font-semibold text-center ">Document Localization</h1>
            <p className="text-center">Specializing in translating and localizing various types of documents, ensuring accuracy, cultural appropriateness, and professional formatting.</p>
            <div className="mt-2">
                <img src={DocumentLocalization} loading="lazy" className="shadow-[0_10px_22px_rgba(29,_78,_216,_0.4)] rounded-xl" width={"400px"} height={"400px"} alt="Document Localization Image" />
            </div>
        </div>,
        <div key="2" className="w-full h-full p-4 rounded-xl flex flex-col items-center justify-center border shadow-[0_10px_22px_rgba(29,_78,_216,_0.4)]">
            <h1 className="text-4xl font-semibold text-center ">Audiovisual Localization</h1>
            <p className="text-center">Translating and adapting video and audio content, ensuring it is accurately localized and culturally appropriate.</p>
            <div className="mt-2">
                <img src={AudioVisualLocalization} loading="lazy" className="shadow-[0_10px_22px_rgba(29,_78,_216,_0.4)] rounded-xl" width={"400px"} height={"400px"} alt="Audio Visual Localization Image" />
            </div>
        </div>,
        <div key="3" className="w-full h-full p-4 rounded-xl flex flex-col items-center justify-center border shadow-[0_10px_22px_rgba(29,_78,_216,_0.4)]">
            <h1 className="text-4xl font-semibold text-center ">Consulting</h1>
            <p className="text-center">Offering expert consultation to adapt content according to the target country's needs and preferences, ensuring cultural appropriateness.</p>
            <div className="mt-2">
                <img src={Counsulting} loading="lazy" className="shadow-[0_10px_22px_rgba(29,_78,_216,_0.4)] rounded-xl" width={"400px"} height={"400px"} alt="Consulting Image" />
            </div>
        </div>,
        <div key="4" className="w-full h-full p-4 rounded-xl flex flex-col items-center justify-center border shadow-[0_10px_22px_rgba(29,_78,_216,_0.4)]">
            <h1 className="text-4xl font-semibold text-center">Professional Feedback</h1>
            <p className="text-center">Providing expert feedback from professionals actively working in the relevant fields to ensure content accuracy and appropriateness.</p>
            <div className="mt-2">
                <img src={feedback} loading="lazy" className="shadow-[0_10px_22px_rgba(29,_78,_216,_0.4)] rounded-xl" width={"400px"} height={"400px"} alt="Professional Feedback Image" />
            </div>
        </div>,
        <div key="5" className="w-full h-full p-4 rounded-xl flex flex-col items-center justify-center border shadow-[0_10px_22px_rgba(29,_78,_216,_0.4)]">
            <h1 className="text-4xl font-semibold text-center ">Fast Turnaround</h1>
            <p className="text-center">Delivering high-quality work within shorter timeframes, thanks to our efficient and experienced team.</p>
            <div className="mt-2">
                <img src={fastTrunarounds} loading="lazy" className="shadow-[0_10px_22px_rgba(29,_78,_216,_0.4)] rounded-xl" width={"400px"} height={"400px"} alt="Fast Trunaround Image" />
            </div>
        </div>,
    ];
    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? divs.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === divs.length - 1 ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "ArrowLeft") {
                handlePrev();
            } else if (event.key === "ArrowRight") {
                handleNext();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <main>
            <section className="sm:clip-ellipse bg-primary">
                <div className="md:flex justify-around items-center  py-20  text-white">
                    <div className="md:w-[45%] relative mx-4 md:mx-0">
                        <div className="relative">
                            <div className="relative">
                                <h1 className="text-3xl sm:text-1xl text-center md:text-start text-white relative font-bold">
                                    Unlock Your Potential  <br />
                                    <span className="text-secondary">
                                        With Our Professional&nbsp;
                                    </span>
                                    Translation Services
                                </h1>
                            </div>
                            <p className="text-sm sm:text-base text-center md:text-start">
                                We cover both document and audiovisual content (e.g., books, research papers, videos) and all educational material from K-12 to university subjects. Our professional team of scholars and PhDs has you covered in every domain.
                            </p>
                        </div>
                    </div>

                    <div className="mt-4 sm:mt-0 md:w-[45%] flex justify-center relative">
                        <div>
                            <img src={subtractImg} loading="lazy" width={"70px"} height={"88px"} alt="Stars Picture" className="absolute left-0 md:left-10 md:top-0" />
                        </div>
                        <div>
                            <img src={HeroImg} loading="eager" className="w-[250px] sm:w-[360px] rounded-2xl shadow-[0_10px_22px_rgba(29,_78,_216,_0.4)]" width={"360px"} height={"360px"} alt="Main Image" />
                        </div>
                        <div>

                            <img src={subtractImg} loading="lazy" width={"70px"} height={"88px"} alt="Stars Picture" className="absolute right-0 bottom-0 md:bottom-0 md:right-9" />
                        </div>
                    </div>

                </div>
            </section>

            <section className="mt-40 flex flex-col justify-around  items-center  bg-[url] ">
                <div className="text-center lg:w-[50%]">
                    <h1 className="text-3xl sm:text-1xl text-primary">Entire
                        <span className="text-secondary font-extrabold"> Localization Solutions </span>
                        Personalized for Your Sector</h1>
                </div>
                <div className="flex shadow-[0_10px_22px_rgba(29,_78,_216,_0.4)] justify-center items-center rounded-full  border-[8px]  bg-primary border-secondary w-[340px] h-[340px] sm:h-[480px] sm:w-[480px]  md:h-[390px] md:w-[390px] ">
                    {headings.map((heading, index) => (
                        <div
                            key={index}
                            className={`heading text-4xl text-[#fff] md:text-3xl ${index === activeHeading ? "center" : index === (activeHeading - 1 + headings.length) % headings.length || index === (activeHeading + 1) % headings.length ? "side" : "hidden"
                                }`}
                        >
                            {heading}
                        </div>
                    ))}
                </div>
            </section>


            <section className="mt-40">
                <div className="flex flex-col items-center">
                    <div className="text-center lg:w-[50%]">
                        <h1 className="text-3xl sm:text-1xl text-primary font-semibold">
                            Do More With <span className="text-secondary font-extrabold">Tongue Twist Expert</span>
                            <br /> Localization Services
                        </h1>
                        <p>
                            Whether it's expert feedback, consultation, or ensuring your documents
                            and audiovisuals are perfectly localized, our team of experts has you
                            covered every step of the way.
                        </p>
                    </div>
                    <div className="self-end flex gap-4 px-4 mt-6">
                        <button
                            onClick={handlePrev}
                            className={`rotate-180`}
                            aria-label="Previous Slide"
                            role="button"
                            disabled={currentIndex === 0}
                        >
                            <svg className={`rounded-full ${currentIndex === 0 ? " text-white bg-[#EBEBE4]" : "bg-primary text-white  transition-transform ease-in-out duration-300 sm:hover:scale-110"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="44" height="44" color="#ffffff" fill="none">
                                <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        <button
                            onClick={handleNext}
                            aria-label="Next Slide"
                            role="button"
                            disabled={currentIndex === divs.length - 1}
                        >
                            <svg className={`rounded-full ${currentIndex === divs.length - 1 ? "text-white bg-[#EBEBE4]" : "bg-primary text-white  transition-transform ease-in-out duration-300 sm:hover:scale-110"}  rounded-full`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="44" height="44" color="#ffffff" fill="none">
                                <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div className="w-full flex justify-around pb-8 overflow-hidden">
                        <div className="w-full sm:w-[70%] md:w-[50%] flex items-center justify-center">
                            {divs[currentIndex]} 
                        </div>
                    </div> 
                </div>
            </section>
            <section className="mt-40 ">
                <div className="text-center lg:w-[40%] mx-auto">
                    <h1 className="text-4xl sm:text-1xl font-semibold text-primary">Our <span className="text-secondary font-extrabold">Expertise</span></h1>
                    <p>Industry-Leading Localization Services Tailored to Your Needs.</p>
                </div>
                <div>
                    <OurExpertise />
                </div>  
            </section>

            <section className="mt-40"></section>
        </main>
    )
}
