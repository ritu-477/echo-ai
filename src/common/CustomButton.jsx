import React from "react";

const CustomButton = ({ text, classStyle }) => {
    return (
        <button
            className={`bg-gradient-to-r from-blue to-sky-blue shadow-inner shadow-light-purple text-white font-semibold rounded-[57px] transition-all duration-500 hover:scale-105 text-base sm:text-xl sm:leading-custom-2xl ${classStyle}`}>
            {text}</button>
    );
};

export default CustomButton;