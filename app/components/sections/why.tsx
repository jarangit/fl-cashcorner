import React from "react";
import Column from "../elements/column";
import Image from "next/image";
import Row from "../elements/row";

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
  return (
    <div className="bg-secondary my-12">
      <div className="my-container grid grid-cols-1 md:grid-cols-2  items-center !py-12">
        {/* g1 */}
        <Column gap={12} className="">
          <div className="text-main font-medium text-lg">WHY US</div>
          <div className="text-5xl font-medium">
            Fast. Reliable. Transparent.
          </div>
          <div className="text-xl font-medium">
            We offer free and straightforward services without any hidden fees
            or charges on our part. And as we care about your comfort and
            safety, we enable you to submit a request without having to worry
            about any obligations or threats to your data security.
          </div>
          <div className="">
            <button className="bg-main text-white rounded-xl font-medium px-12 py-5">
              Get Started
            </button>
          </div>
        </Column>

        {/* g2 */}
        <div>
          <div className="relative w-full h-[500px] overflow-hidden rounded-2xl ">
            <Image
              src={"/images/image2.png"}
              alt=""
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
