import React from 'react'
import { FOOTER_LIST,SOCIAL_LINKS } from '../utils/helper'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <div className='xl:pt-[182px] lg:pt-20 md:pt-14 pt-6' id='benefits'>
            <div className='container'>
                <div className='flex justify-between max-sm:flex-col max-sm:justify-center max-sm:gap-10'>
                    <a href='/'>
                        <img
                            src="/assets/images/webp/footer-logo.webp"
                            alt='footer-Logo'
                            className='sm:max-w-[150px] max-w-[100px] pointer-events-none max-sm:text-center'
                        />
                    </a>
                    <div className='max-sm:flex flex justify-between sm:w-[55%]'>
                        <div className='flex flex-col gap-[14px] max-sm:w-[50%'>
                            <p className='leading-5 max-sm:leading-4 text-white'>Quick Links</p>
                            {FOOTER_LIST.map((obj, i) => (
                                <a
                                    key={i}
                                    className='max-sm:text-sm max-sm:leading-4 text-white hover:text-light-blue transition-all duration-300 opacity-70 cursor-pointer'
                                    href={obj.link}
                                >
                                    {obj.title}
                                </a>
                            ))}
                        </div>
                        <div className='flex flex-col max-sm:w-[50%'>
                            <p className='text-white leading-5 max-sm:leading-4 pb-3 text-whit max-sm:text-sm'>
                                Send Us An E-mail
                            </p>
                            <a
                                className='text-white leading-6 max-sm:leading-4 opacity-70 cursor-pointer hover:text-light-blue transition-all duration-300'
                                href='mailto:info@echoai.ai'
                            >
                                info@echoai.ai
                            </a>
                            <p className='text-white leading-5 max-sm:leading-4 max-sm:text-sm pt-8'>
                                Follow Us On
                            </p>
                            <div className='flex items-center gap-3 pt-[18px]'>
                                {SOCIAL_LINKS.map((obj, index) => (
                                    <a
                                        key={index}
                                        href={obj.href}
                                        target='_blank'
                                        className='hover:scale-110 transition-all duration-300 size-10 rounded-full bg-circle-gradient flex justify-center items-center'
                                    >
                                        {obj.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                   </div>
                </div>
                <div className='pb-[30px] pt-[60px] max-sm:pt-10'>
                    <div className='h-0.5 bottom-line w-full'></div>
                    <p className='text-white opacity-80 text-center max-sm:text-sm pt-5'>
                        Copyright ECHO AI © {currentYear} | All Rights Reserved
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer