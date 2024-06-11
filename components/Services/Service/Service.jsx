import React from 'react'
import TopSection from './TopSection'
import PriceBoxes from './PriceBoxes/PriceBoxes'
import BenefitsSection from './BenefitsSection'
import Faq from './Faq'

const Service = () => {
  return (
    <div>
        <TopSection title={'Corporation Tax'} content={`
        
        This is a key tax return for UK limited companies, outlining financial details such as P&L and Balance sheet. It calculates corporation tax owed to HMRC which is currently 25% (previously 19%) of the net profit, Ensuring compliance and the timely and accurate submission to HMRC is essential to meet law standards and avoid fines.

If you have a UK-limited company, you'd probably know the importance of submitting your corporate tax return within 12 months. But, did you know? You have 9 months following the end of your company's accounting period to file and pay. That's where Affotax comes in to ease your burden. We can help you file and stay compliant with HMRC, ensuring timely submission. 
        
        `}/>




        <PriceBoxes />
        {/* <BenefitsSection />
        <Faq /> */}



    </div>
  )
}

export default Service