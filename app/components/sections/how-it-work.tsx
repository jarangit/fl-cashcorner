import React from "react";
import Column from "../elements/column";
import Image from "next/image";
import Row from "../elements/row";
import { TbNotes } from "react-icons/tb";

type Props = {};

const HowItWork = (props: Props) => {
  return (
    <div>
      <div className="my-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 items-center">
          {/* g1 */}
          <Column gap={12} className="col-span-1">
            <div className="text-main font-medium text-lg">How it work</div>
            <div className="text-5xl font-medium">
              Spoiler Alert: It Works Perfectly
            </div>
            <div className="text-xl font-medium">
              The process is super fast and simple. It takes minutes to see
              results and enjoy your extra cash
            </div>
            <div className="">
              <button className="bg-main text-white rounded-xl font-medium px-12 py-5">
                Get Started
              </button>
            </div>
          </Column>

          {/* g2 */}
          <Row className="gap-12 col-span-2 flex-wrap lg:flex-nowrap">
            <Column gap={12} className="border p-12 rounded-xl">
              <div>
                <div className="w-10 h-10 rounded-full bg-main text-white p-3 flex justify-center items-center font-medium">
                  1
                </div>
              </div>
              <div className="font-medium text-3xl">Submit A Request</div>
              <div className="text-gray-400">
                {` All paperwork is gone! The whole process is completely online. Just fill in a few details about yourself and hit “Get Started”!`}
              </div>
            </Column>
            <Column gap={6}>
              <Column gap={12} className="border p-12 rounded-xl">
                <div>
                  <div className="w-10 h-10 rounded-full bg-main text-white p-3 flex justify-center items-center font-medium">
                    2
                  </div>{" "}
                </div>
                <div className="font-medium text-3xl">Check The Offers</div>
                <div className="text-gray-400">
                  {`If the offer suits your needs and desires, and you agree with all the terms — simply e-sign the deal and get ready to enjoy the money!`}
                </div>
              </Column>{" "}
              <Column gap={12} className="border p-12 rounded-xl">
                <div>
                  <div className="w-10 h-10 rounded-full bg-main text-white p-3 flex justify-center items-center font-medium">
                    3
                  </div>{" "}
                </div>
                <div className="font-medium text-3xl">Receive Your Money</div>
                <div className="text-gray-400">
                  {` Once you submit your request, get your offer, and e-sign it, you’ll be able to get the funds to your bank account really fast!`}
                </div>
              </Column>
            </Column>
            {/* <Image src={"/images/image2.png"} alt="" width={600} height={600} /> */}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
