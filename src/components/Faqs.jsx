import React, { useState } from 'react'
import Heading from '../common/Heading';
import { ACCORDION_ITEMS_LIST } from '../utils/helper'

const Faqs = () => {
    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };
    return (
        <div className="bg-rich-black pb-[178px] pt-[105px]">
            <div className="container">
                <Heading  classStyle={'text-center'} text="FAQs"/>
                <div className="pt-[60px]">
                    {
                        ACCORDION_ITEMS_LIST.map((item, index) => (
                            <div key={index} className="max-w-[1022px] mx-auto">
                                <div className={`border mb-6 rounded-xl transition-all ${openAccordion === index
                                        ? "border-transparent bg-gradient-to-r from-blue-500 to-cyan-400 p-[1px]"
                                        : "border-white border-opacity-10"
                                    }`}>
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className={`font-medium text-xl leading-7 text-white flex justify-between items-center text-start pl-6 py-6 max-w-[974px] w-full ${openAccordion === index ? "pb-4" : "pb-6"}`}
                                    >
                                        {item.heading}
                                        <img
                                            src="/assets/images/svg/faq-svg.svg"
                                            alt={openAccordion === index ? "Collapse" : "Expand"}
                                            className={`w-6 h-6 ml-3 size-5 transition-transform duration-500 transform ${openAccordion === index ? "rotate-180" : "rotate-0"
                                                }`}
                                        />
                                    </button>
                                    <div
                                        className={`transition-all duration-700 ease-in-out overflow-hidden ${openAccordion === index
                                            ? "opacity-100"
                                            : "max-h-0 opacity-0"
                                            }`}>
                                        <div className="transition-all duration-700 ease-in-out">
                                            {item.description && <p className="text-white font-normal text-base leading-7 pl-6 pb-6 max-w-[950px]">{item.description}</p>}
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

export default Faqs