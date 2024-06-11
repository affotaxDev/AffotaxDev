import React from 'react'
import PriceBox from './PriceBox'

const PriceBoxes = () => {
  return (
    <section className='w-full px-60 max-2xl:px-40 max-xl:px-10 max-lg:p-0 py-8'>
        <div className='mx-auto container '>
            {
                <PriceBox />
            }
        </div>
    </section>
  )
}

export default PriceBoxes