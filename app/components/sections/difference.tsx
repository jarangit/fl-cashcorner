import React from 'react'
import Row from '../elements/row'
import Column from '../elements/column'
import { FaCheck } from 'react-icons/fa6'

type Props = {}

const list = [
  `Our payday loans or cash loans are available on time when you're in a pinch- and for this, we use instant e-Transfer® payment mode.`,
  `We offer quick cash loans, even to those who have bad credit.`,
  `CashCorner gives you the funds direct from the lender you can trust.`
]

const Difference = (props: Props) => {
  return (
    <div className='image-section'>
      <div className='my-container grid grid-cols-1 md:grid-cols-2 text-white'>
        <Column gap={6}>
          <div className=' text-2xl  lg:text-5xl  font-semibold'>The CashCorner Difference</div>
          <Column gap={6}>
            {list.map((item, key) => (
              <div key={key}>
                <Row gap={6} className='!items-start text-xl'>
                  <div className='mt-1'>
                    <FaCheck className='text-xl' />
                  </div>
                  <div>{item}</div>
                </Row>
              </div>
            ))}
          </Column>
        </Column>
      </div>
    </div>
  )
}

export default Difference