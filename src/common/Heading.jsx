const Heading = ({ classStyle, spanText, text, spanTwo }) => {
    return (
        <h2 className={`${classStyle} font-semibold text-white lg:text-5xl lg:leading-custom-5xl md:text-3xl text-2xl`}><span className="font-bold">{spanText}</span> {text} <span className="font-bold">{spanTwo}</span></h2>
    )
}

export default Heading