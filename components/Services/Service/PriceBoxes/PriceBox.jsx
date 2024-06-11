import React from 'react'

const PriceBox = () => {
  return (
    <div className='flex flex-row gap-8 items-end justify-start bg-primary/5 shadow-lg  p-8 w-[70%]'>
        <div className='flex flex-col gap-2 '>
            <h3 className='text-xl font-semibold'>Basic</h3>
            <p className='text-md'>The basic package is designed to support UK businesses with company tax return preparation and online submission with HMRC. Ideal for companies having Turnove.</p>

            <ul className='list-disc text-sm '>
            <h4 className='font-semibold text-md '>Package includes:</h4>
                <li className=''>
                Prepare tax return documentations
                </li>
                <li>
                Tax calculations & claim allowances
                </li>
                <li>
                Online Submission to HMRC
                </li>
            </ul>
        </div>

        <div className='flex flex-col '>
            <h3 className='text-2xl font-semibold'>£99</h3>
            <button className='ml-3 drop-shadow-md transition-all inline-flex text-secondary bg-primary border-0 py-2 px-6 hover:outline-primary outline-1 outline outline-transparent hover:bg-transparent hover:text-primary rounded-md text-lg font-semibold hover:scale-105 active:scale-95  '> Buy Now </button>
        </div>
    </div>
  )
}

export default PriceBox