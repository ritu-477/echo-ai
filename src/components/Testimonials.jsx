import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { TESTIMONIAL_SLIDER } from "../utils/helper";
import Heading from "../common/Heading";

const Testimonials = () => {
    return (
        <div className="bg-rich-black xl:pb-[105px] lg:py-20 md:py-14 py-6 xl:pt-[88px]" id="testimonials">
            <div className="container">
                <Heading classStyle={'text-center pb-10'} text={'Testimonials'} />
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                            pagination:"false"
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {TESTIMONIAL_SLIDER.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-custom-gradient px-6 pt-6 rounded-3xl text-white shadow-lg mb-14 h-60 sm:h-64 lg:h-[289px] flex flex-col !justify-between">
                                <div className="flex flex-col">
                                    <h3 className="sm:text-2xl text-xl leading-7 font-medium pb-2">
                                        {testimonial.title}
                                    </h3>
                                    <p
                                        className={`text-sm sm:text-base max-w-[316px] font-normal ${index === 2 ? "max-w-[270px]" : ""
                                            } opacity-80`}
                                    >
                                        {testimonial.description}
                                    </p>
                               </div>
                                <div className="flex items-center gap-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full"
                                    />
                                    <div>
                                        <p className="font-medium text-xl leading-7">{testimonial.name}</p>
                                        <p className="text-base font-normal">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;
