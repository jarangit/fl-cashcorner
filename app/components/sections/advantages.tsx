import React from "react";
import Column from "../elements/column";
import { TbNotes } from "react-icons/tb";
import { FaSackDollar } from "react-icons/fa6";
import { AiFillThunderbolt } from "react-icons/ai";
import { GrSecure } from "react-icons/gr";

type Props = {};

const Advantages = (props: Props) => {
  return (
    <div className="py-24">
      <div className="my-container">
        <Column className="gap-16">
          <div className="text-center font-medium text-2xl text-main">ADVANTAGES</div>
          <div className=" text-2xl  lg:text-5xl  font-medium text-center">Have No Time To Waste? Choose Us!</div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-24">
            <Column gap={12}>
              <div>
                <TbNotes className="text-7xl text-main" />
              </div>
              <div className="font-medium text-2xl">Simple</div>
              <div className="text-gray-400">
                {` Our advanced automated system lets you request up to $5000 by
                filling out a simple, clear-cut form directly from your
                computer, tablet, or mobile phone.`}
              </div>
            </Column>
            <Column gap={12}>
              <div>
                <FaSackDollar className="text-7xl text-main" />
              </div>
              <div className="font-medium text-2xl">Affordable</div>
              <div className="text-gray-400">{`
      We don’t focus solely on your credit score.
      We focus on helping you and providing you with loan offers! So don’t let your credit determine your future and stop you from submitting a request with us!
    `}</div>
            </Column>
            <Column gap={12}>
              <div>
                <AiFillThunderbolt className="text-7xl text-main" />
              </div>
              <div className="font-medium text-2xl">Fast</div>
              <div className="text-gray-400">
                {`
      The online form usually takes minutes to complete.
      So before you even finish your cup of tea, you’ll already have your request submitted.
    `}
              </div>
            </Column>
            <Column gap={12}>
              <div>
                <GrSecure className="text-7xl text-main" />
              </div>
              <div className="font-medium text-2xl">Secure</div>
              <div className="text-gray-400">{`
      We do our best to keep your information absolutely safe and secure.
      Our service uses the latest technology and data security procedures to make sure that your personal information is protected.
    `}</div>
            </Column>
          </div>
        </Column>
      </div>
    </div>
  );
};

export default Advantages;
