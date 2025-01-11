
import React, { useState } from "react";
import { DoubleArrow } from "../utils/icons";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    window.onscroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-5 right-5 z-30 bg-white p-2 sm:size-12 size-8 border-blue-500 border rounded-lg flex justify-center items-center">
                    <DoubleArrow/>
                </button>
            )}
        </div>
    );
};

export default BackToTop;

