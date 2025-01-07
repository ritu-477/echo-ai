import React, { useState } from 'react'
import Heading from '../common/Heading';
import { ACCORDION_ITEMS_LIST } from '../utils/helper'

const FrequentlyAskedQuestions = () => {
    const [openAccordion, setOpenAccordion] = useState(0);

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };
    return (
        <div className="bg-rich-black xl:pb-[183px] md:py-14 lg:py-20 xl:pt-[105px] max-sm:py-6" id='faq'>
            <div className="container">
                <Heading  classStyle={'text-center'} text="FAQs"/>
                <div className="lg:pt-[60px] pt-10">
                    {
                        ACCORDION_ITEMS_LIST.map((item, index) => (
                            <div key={index} className="max-w-[1022px] mx-auto">
                                <div
                                    className={`border mb-6 rounded-xl transition-all ${openAccordion === index
                                        ? "faq-gradient-border"
                                            : "border-white border-opacity-10"
                                        }`}
                                >
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className={`font-medium sm:text-xl leading-6 text-base text-white flex justify-between items-center text-start p-4 sm:px-6 py-6 max-w-[1022px] w-full ${openAccordion === index ? "pb-4" : "pb-6"
                                            }`}
                                    >
                                        {item.heading}
                                        <img
                                            src="/assets/images/svg/faq-svg.svg"
                                            alt={openAccordion === index ? "Collapse" : "Expand"}
                                            className={`w-[15px] h-[8.55px] ml-3 size-5 transition-transform duration-500 transform ${openAccordion === index ? "rotate-180" : "rotate-0"
                                                }`}
                                        />
                                    </button>
                                    <div
                                        className={`transition-all duration-700 ease-in-out overflow-hidden ${openAccordion === index
                                            ? "opacity-100"
                                            : "max-h-0 opacity-0"
                                            }`}>
                                        <div className="transition-all duration-700 ease-in-out">
                                            {item.description && <p className="text-white font-normal text-sm sm:text-base leading-7 px-4 sm:px-6 pb-6 sn:max-w-[990px] w-full">{item.description}</p>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default FrequentlyAskedQuestions