import React, { useEffect, useState } from "react";
import { BUSINESS_DATA } from "../utils/helper";

const BusinessCounter = () => {
    const AnimateCount = ({ start, end }) => {
        const [value, setValue] = useState(start);

        useEffect(() => {
            let startTimestamp = null;
            const duration = 2000;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                setValue(progress * (end - start) + start);
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };

            window.requestAnimationFrame(step);
        }, [end, start]);

        return <span>{Number(value).toFixed(value % 1 === 0 ? 0 : 1)}</span>;
        
    };

    return (
        <div className="text-white lg:pt-14 pt-12  xl:pb-[87px] md:py-14 py-6 relative" id="solution">
            <div className="container mx-auto px-4 relative z-10">
                <div className="gap-8 text-center flex max-md:flex-wrap items-center justify-center">
                    {BUSINESS_DATA.map(({ number, prefix = "", unit = "", description }, index) => (
                        <div
                            key={index}
                            className={`lg:w-[41%] w-full px-3 flex flex-col justify-center items-center max-lg:mb-6 ${index !== BUSINESS_DATA.length - 1 ? "border-gradient" : ""
                                }`}
                        >
                            <div className="flex items-center justify-center lg:text-5xl text-2xl font-semibold">
                                {prefix && <span className="lg:text-5xl lg:leading-custom-5xl text-2xl">{prefix}</span>}
                                {index < 3 ? (
                                    <AnimateCount start={0} end={number} />
                                ) : (
                                    <span>{number}</span>
                                )}
                                {unit && <span className="lg:text-5xl text-2xl">{unit}</span>}
                            </div>
                            <p className="sm:text-base text-sm text-white font-normal pt-2 md:max-w-[187px]">
                                {description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BusinessCounter;
