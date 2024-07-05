import React from 'react'
import Row from '../elements/row'
import Image from 'next/image'
import Column from '../elements/column'
import { GiCheckMark } from 'react-icons/gi'

type Props = {}

const list = [
  'No credit check',
  '1 minute application form',
  'Get your money today',
  'Repay in 90 to 120 days',
  '$250 to $1500 instalment loans',
]

const Banner = (props: Props) => {
  return (
    <div className='bg-secondary'>
      <div className='my-container grid grid-cols-1 md:grid-cols-2 !py-10 relative'>
        <Column gap={6}>
          <div className='text-5xl font-medium'>Get Your Personal Loan Up To $5000</div>
          <div className='border rounded-3xl shadow-lg overflow-hidden bg-white p-6'>
            <div id={'_lg_form_'}></div>
          </div>
        </Column>
        <div className='absolute w-[600px] h-[600px] bottom-0 right-0'>
          <Image
            src={'/images/image1.png'}
            alt=''
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  )
}

export default Banner