import React, { useState } from "react";
// images
import REST from "../assets/images/AI/expertisePage/Designer.webp";
import REST2 from "../assets/images/AI/expertisePage/Designer2.webp";
import REST3 from "../assets/images/AI/expertisePage/Designer3.webp";
import REST4 from "../assets/images/AI/expertisePage/Designer4.webp";
import REST5 from "../assets/images/AI/expertisePage/Designer5.webp";
import REST6 from "../assets/images/AI/expertisePage/Designer6.webp";
import REST7 from "../assets/images/AI/expertisePage/Designer7.webp";
import REST8 from "../assets/images/AI/expertisePage/Designer8.webp";
import REST9 from "../assets/images/AI/expertisePage/Designer9.webp";
import REST10 from "../assets/images/AI/expertisePage/Designer10.webp";

const expertiseItems = [
    {
        heading: "Expert Localization for Documents and Media",
        image: REST,
        text: "We specialize in the localization of both document and audiovisual content, including books, clinical histories, research papers, and videos."
    },
    {
        heading: "Complete Localization for Educational Content",
        image: REST2,
        text: "We provide comprehensive localization services for all educational content, ranging from K-12 curricula to university-level subjects."
    },
    {
        heading: "Specialized Medical and Health Localization by Expert Doctors",
        image: REST3,
        text: "Our most requested localization services are in the medical and health sectors. Expert doctors handle translations of research papers, medical documents, and related content."
    },
    {
        heading: "Finance and Marketing Localization with Industry Expertise",
        image: REST4,
        text: "Our engineering team is highly skilled, with professional engineers specializing in the field ensuring that content is localized with precise and accurate terminology."
    },
    {
        heading: "Expert Finance and Marketing Localization with Precision",
        image: REST5,
        text: "Our finance and marketing teams, utilizing their industry-specific terminology, meticulously review each file word by word to ensure precise localization."
    },
    {
        heading: "Specialized Medical and Health Localization by Expert Doctors",
        image: REST6,
        text: "We exclusively hire translators who possess advanced degrees, including Master’s, PhD, or professional qualifications (e.g., Doctor of Medicine, Doctor of Law)."
    },
    {
        heading: "Only Advanced Degree Translators: Master’s, PhDs, and Professionals",
        image: REST7,
        text: "As experts in the field, we provide feedback from the perspective of active professionals."
    },
    {
        heading: "Tailored Localization by Experts for Country-Specific Needs",
        image: REST8,
        text: "Content may need adjustments for different countries. Our experts, familiar with each target language, provide consulting to tailor your content to local preferences and ensure effective localization."
    },
    {
        heading: "Average Advanced Study Duration: 7+ Years",
        image: REST9,
        text: "Average duration of advanced-level studies in the field: 7+ years."
    },
    {
        heading: "Average Experience: 8+ Years",
        image: REST10,
        text: "Average years of experience in the field: 8+ years."
    },

];

export default function OurExpertiseComponent() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="flex justify-around flex-wrap gap-y-8 mt-4">
            {expertiseItems.map((item, index) => (
                <div
                    key={index}
                    className="flex flex-col gap-2 py-8 items-center w-[90%] sm:w-[45%] lg:w-[30%] text-center shadow-[0_10px_22px_rgba(29,_78,_216,_0.4)] transition-transform duration-300 ease-in-out sm:hover:scale-105 rounded-lg cursor-pointer"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <div className="relative"> 
                        <img 
                            src={item.image}
                            width="150px"
                            height="150px"
                            className={`rounded-full shadow-[0_10px_22px_rgba(29,_78,_216,_0.4)] transition-transform duration-500 ${hoveredIndex === index ? "rotate-y-360" : ""}`}
                            alt={`Expertise ${index + 1}`}
                            loading="lazy"
                            style={{ transformStyle: "preserve-3d" }}
                        />
                    </div>
                    <div className="px-2">
                        <h1 className="text-4xl text-primary ">
                            {item.heading}
                        </h1>
                        <p className="text-sm">
                            {item.text}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}