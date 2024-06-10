'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import { FaAngleDoubleRight } from "react-icons/fa";

const menu = [
    {
        name: 'Accounts',
        submenu: [
            { name: 'Annual Accounts', link: '/annual-accounts' },
            { name: 'Dormant Accounts', link: '/dormant-accounts' },
            { name: 'LLP Accounts', link: '/llp-accounts' },
            {
                name: 'Company Dissolution Service',
                link: '/company-dissolution-service',
            },
        ],
    },
    {
        name: 'Corporation Tax',
        submenu: [
            { name: 'Corporation Tax', link: '/corporation-tax-ct600' },
            {
                name: 'File Corporation Tax Return Online',
                link: '/file-corporation-tax',
            },
            {
                name: 'Register for Corporation Tax',
                link: '/register-for-corporation-tax',
            },
        ],
    },
    {
        name: 'Self Assessment',
        submenu: [
            {
                name: 'Self Assessment Tax Return (SA100)',
                link: '/self-assessment-tax-return-sa100',
            },
            {
                name: 'Submit Self Assessment Tax Return Online',
                link: '/submit-self-assessment-tax-return',
            },
            {
                name: 'Register for Self Assessment Tax Return Online',
                link: '/register-for-self-assessment',
            },
            {
                name: 'Self Assessment Change of Address',
                link: '/self-assessment-change-of-address',
            },
        ],
    },
    {
        name: 'Company Secreterial',
        submenu: [
            {
                name: 'Annual Confirmation Statement',
                link: '//annual-confirmation-statement',
            },
            {
                name: 'Registered Office Address UK',
                link: '/registered-office-address-uk',
            },
            {
                name: 'Directors Service Address UK',
                link: '/directors-service-address-uk',
            },
            { name: 'PSC Register', link: '/psc-register' },
            { name: 'Change Company Name', link: '/change-company-name' },
            {
                name: 'Companies House Change of Address',
                link: '/companies-house-change-of-address',
            },
            { name: 'Selling Shares', link: '/selling-shares' },
            {
                name: 'Director Appointment & Resignation',
                link: '/director-appointment-resignation',
            },
        ],
    },
    {
        name: 'Payroll',
        submenu: [
            {
                name: 'Register for PAYE',
                link: '/register-for-paye',
            },
            {
                name: 'Directors Payroll',
                link: '/directors-payroll',
            },
            { name: 'PAYE Employee', link: '/paye-employee' },
            { name: 'Auto Enrollment Pension', link: '/auto-enrollment-pension' },
            { name: 'Online P11D Form', link: '/p11d-form' },
            {
                name: 'P45 and P60 Form',
                link: '/p60-form',
            },
            { name: 'UK Payslip Generator', link: '/payslip-generator' },
        ],
    },

    {
        name: 'VAT',
        submenu: [
            {
                name: 'UK VAT Registration Online',
                link: '/vat-registration',
            },
            {
                name: 'Quarterly VAT Return',
                link: '/quarterly-vat-return',
            },
            { name: 'EORI Number', link: '/eori-number' },
        ],
    },

    {
        name: 'Bookkeeping',
        submenu: [
            {
                name: 'Bookkeeping For 12 Months',
                link: '/bookkeeping-for-12-month',
            },
            {
                name: 'Xero Bookkeeping (Monthly)',
                link: '/xero-bookkeeping',
            },
            { name: 'QuickBooks Bookkeeping (Monthly)', link: '/quickbooks-bookkeeping' },
            { name: 'Excel Bookkeeping (Monthly)', link: '/excel-bookkeeping' },
           
        ],
    },

    {
        name: 'Company Formation',
        submenu: [
            {
                name: 'UK Company Registration (UK Resident)',
                link: '/uk-company-registration-uk-resident',
            },
            {
                name: 'UK Limited Company for Non-Residents',
                link: '/uk-limited-company-for-non-residents',
            },
            { name: 'LLP Company Formation in the UK', link: '/llp-company-formation' },
            
           
        ],
    },
];


//border-b-2 border-primary


const Menu = () => {




    const [active, setActive] = useState('Bookkeeping')








    return (                                                                                                    
        <section className='w-full my-6 px-60 max-2xl:px-40 max-xl:px-10  '>
            <div className='container mx-auto flex flex-col justify-center items-center rounded-xl drop-shadow-md   bg-slate-50'>
                <ul className='flex flex-row py-2 border-b-2 px-2'>
                    {
                        menu.map((el) => {
                            return (
                                <li className={` py-2 `}>
                                    <h3 className={`max-xl:text-sm  text-lg rounded-lg  text-nowrap py-2 px-4 font-semibold  hover:cursor-pointer  ${active === el.name ? 'text-secondary  bg-primary' : 'text-tertiary hover:text-primary'}`} onClick={() => setActive(el.name)}>{el.name}</h3>
                                </li>
                            )
                        })
                    }
                </ul>

                <ul className='flex flex-col justify-center items-center my-6 '>
                    {
                        menu.map((el) => {
                            return (
                                el.name === active ? 
                                <li className=''>
                                   {el.submenu.map((sub) => {
                                    return <h3 className='text-md font-semibold  flex items-center py-2 hover:cursor-pointer hover:text-primary  '><FaAngleDoubleRight className='text-primary mr-2 text-center'/><Link href={sub.link}>{sub.name}</Link></h3>
                                   })}
                                </li> : null
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    );
};

export default Menu;
