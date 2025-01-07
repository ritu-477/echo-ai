import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
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
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            pagination: {
                                clickable: true,
                            },
                        },
                        768: {
                            slidesPerView: 2,
                            pagination: {
                                clickable: true,
                            },
                        },
                        1024: {
                            slidesPerView: 3,
                            pagination: false,
                        },
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                >
                    {TESTIMONIAL_SLIDER.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-custom-gradient px-6 pt-6 rounded-3xl text-white shadow-lg mb-14 xl:h-[289px]">
                                <h3 className="sm:text-2xl text-xl leading-7 font-medium pb-2">
                                    {testimonial.title}
                                </h3>
                                <p
                                    className={`text-sm sm:text-base max-w-[316px] font-normal ${index === 2 || index === 2 ? "lg:pb-6 pb-4 max-w-[270px]" : "lg:pb-12 pb-6"
                                        } opacity-80`}
                                >
                                    {testimonial.description}
                                </p>
                                <div className="flex items-center gap-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full"
                                    />
                                    <div>
                                        <p className="font-medium text-xl sm:text-2xl leading-7">{testimonial.name}</p>
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