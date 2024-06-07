import React from 'react';

import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import Link from 'next/link';

const contactArr = [{name: 'Phone', icon: <LuPhoneCall /> , link:'tel:2081446811',  value: '020 8144 6811', timings: '07:00 - 18:00 | Monday to Friday' }, {name: 'Email', icon: <MdOutlineMailOutline className='mt-1'/> ,link: 'mailto:info@affotax.com', value: 'info@affotax.com', timings: '07:00 - 18:00 | Monday to Friday' }, {name: 'Whatsapp', icon: <FaWhatsapp /> ,link: 'https://wa.me/447723143223', value: '+44 7723 143223', timings: '07:00 - 18:00 | Monday to Friday' }]



const EmailPhone = () => {
    return (
        <div className='flex flex-col justify-center items-center  w-full  bg-slate-100 '>
            <div className='flex justify-between items-center py-8 w-full border-b-2 border  px-60 max-2xl:px-40 max-xl:px-20  max-lg:px-8  max-lg:flex-col max-lg:gap-2  '>
                <div>
                    <h3 className='text-2xl text-tertiary font-semibold '>
                        Speak to one of our expert team members
                    </h3>
                </div>
                <div>
                <button className='drop-shadow-md transition-all inline-flex text-secondary bg-primary border-0 py-2 px-6 hover:outline-primary outline-1 outline outline-transparent hover:bg-transparent hover:text-primary rounded-md text-lg font-semibold hover:scale-105 active:scale-95  '> Get a Quote </button>
                </div>
            </div>

            <div className='w-full py-8 px-60 max-2xl:px-40 max-xl:px-20  max-lg:px-8'>
                <ul className='flex justify-between  items-center w-full max-lg:flex-col max-lg:gap-2'>
                    {
                        contactArr.map((el) => {
                            return (
                                <li key={el.name} className='flex flex-col justify-center items-center '>
                                    <h2 className='text-primary font-medium '>{el.name}</h2>
                                    <Link href={el.link}>
                                    <div className='flex justify-center items-center gap-1 text-black '>
                                        {el.icon}
                                        <h3>{el.value}</h3>
                                    </div>
                                    </Link>
                                    <p className='text-gray-600'>{el.timings}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
};

export default EmailPhone;






//px-60 max-2xl:px-40 max-xl:px-10  max-lg:px-8