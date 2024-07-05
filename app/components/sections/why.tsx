"use client"; // This is a client component

import React from "react";
import Column from "../elements/column";
import Image from "next/image";
import Row from "../elements/row";
import { useRouter } from "next/dist/client/components/navigation";

type Props = {};

const list = [
  {
    title: "StarPayLoans is awesome!",
    detail: `Their application service was easy and only took a few moments to get my lo....`,
  },
  {
    title: "Instantly approved! So Great!",
    detail: `My application took minutes and I got my etransfer so fast! Thanks guys!`,
  },
  {
    title: "Super Happy Returning Customer!",
    detail: `I have used StarPayLoans in the past and they keep things simple. I highly recom....`,
  },
];

const Why = (props: Props) => {
  const { push } = useRouter()
  return (
    <div>
      <Column className="my-container !py-24" gap={10}>
        <div className="text-3xl font-semibold text-center">Why Choose CashCorner?</div>

        {/* grid */}
        <Row className="" gap={3}>
          <div className="border-2 p-6 rounded-lg border-gray-700">
            <Image
              src={"/images/Highest-approval-rates.webp"}
              alt=""
              width={300}
              height={300}
            />
          </div>
          <div className="border-2 p-6 rounded-lg border-gray-700">
            <Image
              src={"/images/Highest-approval-rates.webp"}
              alt=""
              width={300}
              height={300}
            />
          </div>
          <div className="border-2 p-6 rounded-lg border-gray-700">
            <Image
              src={"/images/Highest-approval-rates.webp"}
              alt=""
              width={300}
              height={300}
            />
          </div>
          <div className="border-2 p-6 rounded-lg border-gray-700">
            <Image
              src={"/images/Highest-approval-rates.webp"}
              alt=""
              width={300}
              height={300}
            />
          </div>

        </Row>

        <Column gap={12}>

          <div>
            <div className="text-2xl font-bold mb-6">Who are CashCorner?
            </div>
            <p>CashCorner is a well-established and trusted website that help thousands of Canadians every day to find the best payday loans and cash advance online. We strive to work harder to earn your trust and follow responsible lending parameters. Our application process is simple and fast, embedded with advanced AI algorithms that make it easy to find a loan from industry-leading lenders. In this way, you can make your life easier and save time. So, why wait? Find a loan now that matches you!</p>
          </div>
          <button
            onClick={() => push("/form-loan")}
            className="bg-main text-white py-5 px-8 rounded-full font-medium uppercase shadow-md hover:opacity-80 w-fit mx-auto min-w-[200px]"
          >
            GET STARTED
          </button>
        </Column>
      </Column>
    </div>
  );
};

export default Why;
