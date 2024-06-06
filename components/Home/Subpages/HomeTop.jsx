import React from 'react';
import HeroImg from '@/public/hero.png'
import HeroImg2 from '@/public/hero2.png'

export default function HomeTop() {
    return (
        <section className='bg-gray-50 text-gray-600 w-full bgImage '>
            <div className=' flex py-24 px-48 flex-row max-lg:flex-col max-lg:px-8 max-lg:py-8  items-center justify-around  w-full'>
                <div className='items-start w-[50%] text-left pr-16 flex flex-col  mb-16 md:mb-0  max-lg:w-full max-lg:text-left max-lg:items-center max-lg:pr-0 '>
                    <h1 className=' sm:text-4xl text-3xl mb-4 font-medium text-tertiary'> Online Accountant <br /> Services | UK's Affordable Accounting Firm </h1>
                    <p className='mb-8 leading-relaxed font-semibold text-tertiary/[70] text-lg'> Welcome to the homepage of an affordable accounting firm in the UK made for small and micro-businesses. We are the esteemed ACCA-licensed, reliable accountants and HMRC-authorised agents dedicated to offering steadfast expertise. <br /> <br /> Find the comfort of having reliable accountants dedicated to your financial prosperity greetings from the UK for a new era of trustworthy and affordable accountancy services. </p>
                    <div className='flex justify-center'>
                        <button className='inline-flex text-secondary bg-primary border-0 py-2 px-6 hover:outline-primary outline-1 outline outline-transparent hover:bg-transparent hover:text-primary rounded-md text-lg font-semibold'> Services </button>
                        <button className='ml-4 inline-flex text-primary bg-transparent border-0 py-2 px-6 outline-primary outline-1 outline hover:bg-primary hover:text-secondary rounded-md text-lg font-semibold'> Get a Quote </button>
                    </div>
                </div>

                <div className='lg:max-w-2xl w-full   '>
                    <img
                        className='object-cover object-center rounded  drop-shadow-xl '
                        alt='hero'
                        src={HeroImg2.src}
                    />
                </div>
            </div>
        </section>
    );
}
